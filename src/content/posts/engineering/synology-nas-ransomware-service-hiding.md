---
title: "從 Synology NAS 勒索事件，看服務隱藏如何降低漏洞暴露風險"
description: "Synology NAS 遭 .L0CK3D 勒索攻擊後的架構檢討：登入前就能連上的服務就是攻擊面。說明服務隱藏如何把驗證與授權前移、為什麼不能留下繞過路徑，以及修補與備份仍要負責的部分。"
publishDate: 2026-10-30T20:00:00+08:00
category: "工程實務"
tags:
  - "安全"
  - "架構"
  - "工程實務"
series: "zero-trust"
draft: false
lang: zh-Hant
---

NAS 同時承載檔案共享、備份、協作與遠端管理等功能，也因此集中保存了企業大量重要資料。一旦攻擊者取得設備控制權，影響範圍可能涵蓋正式文件、應用程式資料，以及存放於同一設備上的備份。

近期 [HKEPC 報導](https://www.hkepc.com/27125)，部分 Synology NAS 遭勒索攻擊，檔案被加上「.L0CK3D」副檔名。[Synology 則於 2026 年 10 月 29 日發布聲明](https://www.synology.com/zh-tw/company/news/article/C3RB3R)，指出已發現攻擊者利用[一項於 2024 年 12 月修補的漏洞](https://www.synology.com/zh-tw/security/advisory/Synology_SA_24_20)，攻擊仍執行舊版 DSM 的設備。由於媒體與官方對攻擊入口的說明有所差異，不能將所有受害案件直接歸因於同一條漏洞利用鏈。

從防護架構來看，這起事件值得關注的問題是：在完成身分驗證之前，外部來源是否已經能夠接觸 NAS 的服務？

——

## 對外開放服務，代表登入前就存在攻擊面

企業為了提供遠端存取，常透過 NAT 與[連接埠轉送](https://en.wikipedia.org/wiki/Port_forwarding)，將 NAS 的管理介面或應用服務發布至網際網路。

在這種架構下，外部來源不需要具備合法帳號，就能先與服務建立網路連線，向 Web 伺服器、API 或其他協定處理元件送出請求。帳號密碼驗證只是後續流程中的一道控制。

如果漏洞存在於驗證之前的請求處理流程，攻擊者便可能不經正常登入程序，直接觸發漏洞。因此，即使企業已啟用 [MFA](https://www.cisa.gov/MFA)，也不能將它視為所有未授權遠端漏洞的防護措施。

<figure>
  <svg viewBox="0 0 720 230" role="img" aria-labelledby="fig-nas-expose-title fig-nas-expose-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-nas-expose-title">對外開放架構下，請求在登入驗證之前就已抵達 NAS</title>
    <desc id="fig-nas-expose-desc">任意網際網路來源經由路由器的連接埠轉送，直接連到 NAS 的 Web 伺服器與 API；登入驗證位於 NAS 內部的後段，驗證前的請求處理流程已暴露在外。</desc>
    <defs>
      <marker id="fig-nas-expose-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-accent)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="10" y="70" width="130" height="70" rx="10" />
      <rect x="190" y="70" width="140" height="70" rx="10" />
      <rect x="380" y="30" width="330" height="150" rx="12" />
    </g>
    <rect x="396" y="70" width="140" height="70" rx="8" fill="none" stroke="var(--color-accent)" stroke-width="2" />
    <rect x="556" y="70" width="140" height="70" rx="8" fill="none" stroke="var(--color-border)" stroke-width="1.5" />
    <g fill="var(--color-text)" font-size="15" text-anchor="middle">
      <text x="75" y="102">任意來源</text>
      <text x="75" y="124" font-size="12" fill="var(--color-muted)">無需合法帳號</text>
      <text x="260" y="102">路由器</text>
      <text x="260" y="124" font-size="12" fill="var(--color-muted)">NAT／連接埠轉送</text>
      <text x="545" y="54" font-size="13" fill="var(--color-muted)">NAS（DSM）</text>
      <text x="466" y="102">Web／API</text>
      <text x="466" y="124" font-size="12" fill="var(--color-muted)">請求處理流程</text>
      <text x="626" y="102">登入驗證</text>
      <text x="626" y="124" font-size="12" fill="var(--color-muted)">帳號密碼＋MFA</text>
    </g>
    <g stroke="var(--color-accent)" stroke-width="2" fill="none" marker-end="url(#fig-nas-expose-arrow)">
      <path d="M142 105 H186" />
      <path d="M332 105 H392" />
    </g>
    <path d="M538 105 H552" stroke="var(--color-border)" stroke-width="2" />
    <path d="M396 158 H536" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="5 4" />
    <text x="466" y="174" font-size="12" text-anchor="middle" fill="var(--color-accent)">驗證前的漏洞在這裡被觸發</text>
    <text x="360" y="215" font-size="13" text-anchor="middle" fill="var(--color-muted)">還沒登入，請求就已經送到 NAS 的服務上</text>
  </svg>
  <figcaption>透過連接埠轉送發布 NAS 服務時，任何來源都能在登入驗證之前把請求送進 Web 伺服器與 API；漏洞若在這段流程裡，MFA 擋不住。</figcaption>
</figure>

這裡需要區分兩個層次：應用程式的登入驗證，決定使用者能否操作功能；網路層與服務層的存取控制，則決定對方是否有機會接觸應用程式。

——

## Merak 將存取控制前移至服務連線之前

[Merak 服務隱藏架構](https://kunansec.com/)，透過預設拒絕未授權連線的方式，將身分驗證與授權放在受保護服務的連線建立之前。

以 NAS 為例，部署時可將 DSM 管理介面、檔案服務及相關應用納入保護範圍，並移除原有的公網直連入口。使用者須先通過 Merak 的驗證與授權，才能建立通往指定服務的加密連線。

這種設計的重點，是讓 NAS 不必直接接收來自任意網際網路來源的應用請求。對於仰賴公網可達性進行掃描與漏洞利用的攻擊，可在請求抵達 NAS 前先限制其連線路徑。

<figure>
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="fig-nas-hide-title fig-nas-hide-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-nas-hide-title">導入服務隱藏後，驗證與授權移到連線建立之前</title>
    <desc id="fig-nas-hide-desc">任意來源的直連入口已移除；使用者先通過 Merak 的 mTLS、MFA 與 RBAC 檢查，才能建立通往 NAS 指定服務的加密連線。未授權來源在抵達 NAS 前就被拒絕。</desc>
    <defs>
      <marker id="fig-nas-hide-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="10" y="30" width="130" height="64" rx="10" />
      <rect x="10" y="150" width="130" height="64" rx="10" />
      <rect x="560" y="80" width="150" height="90" rx="12" />
    </g>
    <rect x="230" y="60" width="200" height="130" rx="12" fill="var(--color-surface)" stroke="var(--color-primary)" stroke-width="2" />
    <g fill="var(--color-text)" font-size="15" text-anchor="middle">
      <text x="75" y="60">已授權使用者</text>
      <text x="75" y="80" font-size="12" fill="var(--color-muted)">員工／維運人員</text>
      <text x="75" y="180">未授權來源</text>
      <text x="75" y="200" font-size="12" fill="var(--color-muted)">掃描／漏洞利用</text>
      <text x="330" y="90" fill="var(--color-primary)">Merak</text>
      <text x="330" y="114" font-size="12" fill="var(--color-muted)">預設拒絕未授權連線</text>
      <text x="330" y="138" font-size="13">mTLS · MFA · RBAC</text>
      <text x="330" y="162" font-size="12" fill="var(--color-muted)">先驗證、授權，再連線</text>
      <text x="635" y="118">NAS</text>
      <text x="635" y="142" font-size="12" fill="var(--color-muted)">DSM／檔案服務</text>
    </g>
    <g stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#fig-nas-hide-arrow)">
      <path d="M142 62 C190 62 190 90 226 92" />
      <path d="M432 125 H556" />
    </g>
    <text x="494" y="115" font-size="12" text-anchor="middle" fill="var(--color-primary)">加密連線</text>
    <path d="M142 182 C185 182 195 165 226 160" stroke="var(--color-accent)" stroke-width="2" fill="none" />
    <text x="216" y="226" font-size="12" text-anchor="middle" fill="var(--color-accent)">在抵達 NAS 前被拒絕</text>
    <path d="M140 232 C330 248 470 240 600 172" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="5 5" fill="none" />
    <g stroke="var(--color-accent)" stroke-width="2.5">
      <path d="M450 228 l14 14 M464 228 l-14 14" />
    </g>
    <text x="530" y="242" font-size="12" text-anchor="middle" fill="var(--color-muted)">公網直連入口已移除</text>
  </svg>
  <figcaption>服務隱藏把身分驗證與授權放到連線建立之前：通過 Merak 檢查的使用者才拿得到通往 NAS 的加密連線，未授權來源連 NAS 的服務都碰不到。</figcaption>
</figure>

在這個架構中，各項控制分別負責不同工作：

- 預設拒絕未授權連線：限制外部來源直接接觸受保護服務。
- [mTLS 雙向驗證](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/)：在連線雙方之間驗證憑證與身分。
- [MFA](https://www.cisa.gov/MFA)：加強使用者身分驗證，降低單一密碼遭竊所造成的風險。
- [RBAC 服務層級授權](https://csrc.nist.gov/projects/role-based-access-control)：依角色開放必要服務，限制可連線的範圍。

例如，一般員工可以被授權使用 NAS 檔案服務，但不具備連線至 DSM 管理介面的權限；維運人員則依職務取得管理服務的存取權。即使通過驗證，也不代表能連到所有內部服務。

<figure>
  <svg viewBox="0 0 720 220" role="img" aria-labelledby="fig-nas-rbac-title fig-nas-rbac-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-nas-rbac-title">RBAC 依角色決定能連到 NAS 的哪些服務</title>
    <desc id="fig-nas-rbac-desc">一般員工可連線至 NAS 檔案服務，但無法連線至 DSM 管理介面；維運人員依職務可連線至 DSM 管理介面與檔案服務。</desc>
    <defs>
      <marker id="fig-nas-rbac-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="20" y="30" width="150" height="60" rx="10" />
      <rect x="20" y="130" width="150" height="60" rx="10" />
      <rect x="520" y="30" width="180" height="60" rx="10" />
      <rect x="520" y="130" width="180" height="60" rx="10" />
    </g>
    <g fill="var(--color-text)" font-size="15" text-anchor="middle">
      <text x="95" y="66">一般員工</text>
      <text x="95" y="166">維運人員</text>
      <text x="610" y="66">NAS 檔案服務</text>
      <text x="610" y="166">DSM 管理介面</text>
    </g>
    <g stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#fig-nas-rbac-arrow)">
      <path d="M172 60 H516" />
      <path d="M172 160 H516" />
      <path d="M172 150 C330 150 360 72 516 72" />
    </g>
    <path d="M172 72 C300 72 380 140 470 148" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="6 5" fill="none" />
    <g stroke="var(--color-accent)" stroke-width="2.5">
      <path d="M474 140 l14 14 M488 140 l-14 14" />
    </g>
    <g font-size="12" text-anchor="middle">
      <text x="300" y="50" fill="var(--color-primary)">已授權</text>
      <text x="300" y="182" fill="var(--color-primary)">已授權</text>
      <text x="420" y="128" fill="var(--color-accent)">未授權</text>
    </g>
  </svg>
  <figcaption>通過驗證不等於能連到所有服務：一般員工只開放檔案服務，DSM 管理介面只留給依職務取得權限的維運人員。</figcaption>
</figure>

這類服務層級授權，仍須搭配 NAS 本身的帳號、共享資料夾與檔案權限，才能完整限制使用者可執行的操作。

——

## 降低暴露風險，關鍵在於沒有繞過路徑

[服務隱藏](/posts/engineering/zero-trust-explained/)能否發揮效果，取決於存取路徑是否完整納管。

如果 NAS 已納入 Merak 保護，但路由器仍保留直接連至 NAS 的連接埠轉送，外部來源就可能繞過驗證機制。其他遠端存取入口、反向代理與內部網路路徑，也需要一併盤點。

<figure>
  <svg viewBox="0 0 720 250" role="img" aria-labelledby="fig-nas-bypass-title fig-nas-bypass-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-nas-bypass-title">導入服務隱藏後仍需盤點的繞過路徑</title>
    <desc id="fig-nas-bypass-desc">經過 Merak 驗證與授權的路徑是唯一應存在的入口；路由器殘留的連接埠轉送、其他遠端存取入口與反向代理、內部網路路徑，都可能繞過驗證直接抵達 NAS。</desc>
    <defs>
      <marker id="fig-nas-bypass-ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-primary)" />
      </marker>
      <marker id="fig-nas-bypass-bad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--color-accent)" />
      </marker>
    </defs>
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="10" y="95" width="120" height="60" rx="10" />
      <rect x="580" y="80" width="130" height="90" rx="12" />
    </g>
    <rect x="250" y="16" width="200" height="50" rx="10" fill="var(--color-surface)" stroke="var(--color-primary)" stroke-width="2" />
    <g fill="var(--color-surface)" stroke="var(--color-accent)" stroke-width="1.5" stroke-dasharray="5 4">
      <rect x="250" y="86" width="200" height="40" rx="8" />
      <rect x="250" y="140" width="200" height="40" rx="8" />
      <rect x="250" y="194" width="200" height="40" rx="8" />
    </g>
    <g fill="var(--color-text)" font-size="15" text-anchor="middle">
      <text x="70" y="130">外部來源</text>
      <text x="350" y="46" fill="var(--color-primary)">Merak 驗證與授權</text>
      <text x="645" y="130">NAS</text>
    </g>
    <g fill="var(--color-text)" font-size="13" text-anchor="middle">
      <text x="350" y="111">殘留的連接埠轉送</text>
      <text x="350" y="165">其他遠端入口／反向代理</text>
      <text x="350" y="219">內部網路路徑</text>
    </g>
    <g stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#fig-nas-bypass-ok)">
      <path d="M132 112 C190 112 200 41 246 41" />
      <path d="M452 41 C520 41 530 95 576 100" />
    </g>
    <g stroke="var(--color-accent)" stroke-width="1.8" stroke-dasharray="5 4" fill="none" marker-end="url(#fig-nas-bypass-bad)">
      <path d="M132 125 H246" />
      <path d="M132 135 C190 135 200 160 246 160" />
      <path d="M132 145 C180 160 200 214 246 214" />
      <path d="M452 106 H576" />
      <path d="M452 160 C520 160 530 140 576 140" />
      <path d="M452 214 C530 214 540 160 576 155" />
    </g>
    <text x="645" y="196" font-size="12" text-anchor="middle" fill="var(--color-accent)">繞過驗證</text>
  </svg>
  <figcaption>受保護服務應只接受經 Merak 授權路徑而來的連線；殘留的連接埠轉送、其他遠端入口、反向代理與內部網路路徑，都要一起盤點並關閉。</figcaption>
</figure>

部署時應確認受保護服務只接受經授權路徑而來的連線，並檢查網路區隔與防火牆規則。單純更換連接埠、隱藏網址或不公開 DNS 名稱，都不足以建立這種存取限制。

——

## 服務隱藏降低可達性，修補與備份處理剩餘風險

Merak 能降低未授權來源直接利用 NAS 服務漏洞的機會，尤其適合保護僅供員工、維運人員或特定合作對象使用的服務。

但服務隱藏不會消除設備本身的漏洞。若攻擊來自已獲授權且遭入侵的端點，或勒索程式已在 NAS 內執行，仍須依靠端點防護、最小權限、[系統修補](https://www.synology.com/zh-tw/security/advisory)與事件應變處理。對具有寫入權限的合法連線，服務層級授權也不能自行判斷每一次檔案修改是否出於惡意。

因此，NAS 防護需要同時處理三件事：限制誰能接觸服務、持續修補可被利用的漏洞，以及保留攻擊者[無法輕易改寫或刪除的備份](https://www.cisa.gov/stopransomware/ransomware-guide)。

<figure>
  <svg viewBox="0 0 720 200" role="img" aria-labelledby="fig-nas-layers-title fig-nas-layers-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="fig-nas-layers-title">NAS 防護需要同時處理的三件事</title>
    <desc id="fig-nas-layers-desc">第一層是限制誰能接觸服務，由服務隱藏負責；第二層是持續修補可被利用的漏洞；第三層是保留攻擊者無法輕易改寫或刪除的備份。三者分別處理不同風險，無法互相取代。</desc>
    <rect x="10" y="30" width="220" height="130" rx="12" fill="var(--color-surface)" stroke="var(--color-primary)" stroke-width="2" />
    <g fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1.5">
      <rect x="250" y="30" width="220" height="130" rx="12" />
      <rect x="490" y="30" width="220" height="130" rx="12" />
    </g>
    <g font-size="13" text-anchor="middle" fill="var(--color-muted)">
      <text x="120" y="60">①</text>
      <text x="360" y="60">②</text>
      <text x="600" y="60">③</text>
    </g>
    <g font-size="16" text-anchor="middle" fill="var(--color-text)">
      <text x="120" y="92">限制誰能接觸服務</text>
      <text x="360" y="92">持續修補漏洞</text>
      <text x="600" y="92">不可輕易改寫的備份</text>
    </g>
    <g font-size="12" text-anchor="middle" fill="var(--color-muted)">
      <text x="120" y="122">服務隱藏・預設拒絕</text>
      <text x="120" y="142">降低公網可達性</text>
      <text x="360" y="122">更新 DSM 與套件</text>
      <text x="360" y="142">縮短漏洞存在時間</text>
      <text x="600" y="122">攻擊者難以改寫或刪除</text>
      <text x="600" y="142">勒索發生後仍可還原</text>
    </g>
    <text x="360" y="188" font-size="13" text-anchor="middle" fill="var(--color-muted)">三件事處理不同風險，彼此無法取代</text>
  </svg>
  <figcaption>服務隱藏負責第一件事：縮小服務可被接觸的範圍；修補與備份處理它管不到的剩餘風險，三者缺一不可。</figcaption>
</figure>

Merak 在其中的角色，是先縮小服務可被接觸的範圍。讓 NAS 的管理與檔案服務僅對通過驗證及授權的身分開放，能減少企業在漏洞公告後、修補完成前，持續暴露於公網攻擊的風險。

——

## 參考資料

- [Synology 呼籲盡速更新 DSM，避免過時版本暴露於風險](https://www.synology.com/zh-tw/company/news/article/C3RB3R)（Synology 官方聲明，2026-10-29）
- [Synology-SA-24:20 DSM (PWN2OWN 2024)](https://www.synology.com/zh-tw/security/advisory/Synology_SA_24_20)（CVE-2024-10441 等，官方安全公告）
- [Synology 證實 .L0ck3D 勒索攻擊](https://www.hkepc.com/27125)（HKEPC）
- [Synology 產品安全公告列表](https://www.synology.com/zh-tw/security/advisory)
- [NIST SP 800-207：Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)
- [CISA #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
- 站內延伸：[零信任](/posts/engineering/zero-trust-explained/)、[資安漏洞遠比你想像的還要多](/posts/engineering/more-security-holes-than-you-think/)
