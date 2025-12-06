# Console Platform - 名詞解釋 (Glossary)

本文件整合了 Console Platform 各功能模組的專有名詞解釋，涵蓋登入系統與使用者管理系統的相關術語。

## 身份驗證與安全 (Authentication & Security)

| 名詞           | 英文                                 | 解釋                                                                                                  |
| -------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 雙因子認證     | Two-Factor Authentication (2FA)     | 除了密碼外,額外使用第二種驗證方式 (如 OTP) 來確認使用者身份,提高帳號安全性                            |
| 時基一次性密碼 | Time-based One-Time Password (TOTP) | 基於當前時間生成的一次性密碼,每 30 秒更新一次,常用於 2FA 驗證                                         |
| 驗證器         | Authenticator                       | 用於生成 OTP 的應用程式,如 Google Authenticator、Microsoft Authenticator、Authy                       |
| 多因素認證     | Multi-Factor Authentication (MFA)   | 使用兩種或以上的驗證方式確認使用者身份,比 2FA 更廣泛                                                  |
| 異常登入       | Anomalous Login                     | 與使用者正常登入模式不符的登入行為,如異常 IP、時段或地理位置                                          |
| 零信任         | Zero Trust                          | 一種安全模型,假設網路內外都不可信任,每次存取都需要驗證,不基於網路位置給予信任                         |
| 零信任模型     | Zero Trust Model                     | 假設網路內外都不可信任，每次存取都需要驗證的安全模型                                                 |
| 單一登入       | Single Sign-On (SSO)                | 使用者只需登入一次,即可存取多個相關系統或應用程式                                                     |

## Token 與 Session 管理

| 名詞           | 英文                                | 解釋                                                                                                  |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| JSON Web Token | JWT                                 | 一種用於安全傳輸資訊的 Token 格式,包含使用者身份、權限等資訊,由三部分組成: Header、Payload、Signature |
| Access Token   | Access Token                        | 短期有效的存取令牌,用於驗證使用者身份並存取系統資源,通常有效期為數小時                                |
| Refresh Token  | Refresh Token                       | 長期有效的更新令牌,用於獲取新的 Access Token 而無需重新登入,有效期通常為數天或數週                    |
| Session        | Session                             | 使用者從登入到登出之間的活動期間,系統會追蹤並記錄 Session 資訊                                        |
| Token 黑名單   | Token Blacklist                     | 記錄已登出或撤銷的 Token,防止這些 Token 繼續被使用                                                    |
| CSRF Token     | Cross-Site Request Forgery Token    | 用於防止跨站請求偽造攻擊的安全令牌,確保請求來自合法來源                                               |
| 閒置超時       | Idle Timeout                        | 使用者在一段時間內無任何操作,系統自動登出以保護帳號安全                                               |

## 密碼與加密

| 名詞       | 英文                     | 解釋                                                         |
| ---------- | ------------------------ | ------------------------------------------------------------ |
| 密碼雜湊   | Password Hashing         | 將密碼透過單向雜湊演算法 (如 bcrypt) 轉換為固定長度的字串,無法反推原始密碼 |
| 鹽值       | Salt                     | 在密碼雜湊前加入的隨機字串,防止彩虹表攻擊                    |
| 彩虹表攻擊 | Rainbow Table Attack     | 使用預先計算的雜湊值表來破解密碼的攻擊方式                   |
| 暴力破解   | Brute Force Attack       | 系統性地嘗試所有可能的密碼組合來破解帳號的攻擊方式          |
| Base32 編碼 | Base32 Encoding          | 一種二進位到文字的編碼方式,使用 32 個字元 (A-Z, 2-7) 表示資料,常用於 TOTP Secret Key |
| QR Code    | Quick Response Code      | 二維條碼,可快速被掃描讀取,常用於傳遞 TOTP 設定資訊           |

## 權限與存取控制

| 名詞           | 英文                                 | 解釋                                                                             |
| -------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| 角色型存取控制 | Role-Based Access Control (RBAC)     | 透過角色來管理使用者權限的存取控制模型，使用者被指派角色，角色擁有權限           |
| 權限           | Permission                           | 對特定資源執行特定操作的授權，如 "users.read" 代表讀取使用者資料的權限           |
| 角色           | Role                                 | 一組權限的集合，代表使用者在系統中的職能，如 "管理員" 角色包含管理系統的各種權限 |
| 權限繼承       | Permission Inheritance               | 子角色自動擁有父角色的所有權限的機制                                             |
| 最小權限原則   | Principle of Least Privilege         | 使用者只應擁有完成其工作所需的最小權限集合                                       |
| 權限提升       | Privilege Escalation                 | 獲得比原本擁有更高權限的行為，需要嚴格控制以防止安全風險                         |
| 存取控制清單   | Access Control List (ACL)            | 指定哪些使用者或系統可以存取特定資源的列表                                       |
| 權限矩陣       | Permission Matrix                    | 顯示角色與權限關係的二維表格                                                     |
| 職責分離       | Separation of Duties (SoD)           | 將敏感操作分散給不同角色執行，防止單一使用者擁有過大權力                         |
| 權限委派       | Permission Delegation                | 將部分權限臨時或永久轉移給其他使用者的機制                                       |
| 權限撤銷       | Permission Revocation                | 移除使用者已授予權限的過程                                                       |
| 存取請求       | Access Request                       | 使用者申請新權限或資源存取的正式流程                                             |
| 權限核准       | Permission Approval                  | 對存取請求進行審核和核准的流程                                                   |
| 權限範圍       | Permission Scope                     | 權限適用的範圍或界限                                                             |
| 臨時權限       | Temporary Permission                 | 有時間限制的權限授予                                                             |
| 緊急存取       | Emergency Access                     | 緊急情況下的特殊存取機制                                                         |
| 權限合規性     | Permission Compliance                | 權限設定符合法規或政策要求的狀態                                                 |

## 系統管理與稽核

| 名詞           | 英文                                 | 解釋                                                         |
| -------------- | ------------------------------------ | ------------------------------------------------------------ |
| 身份與存取管理 | Identity and Access Management (IAM) | 管理使用者身份、認證和授權的完整系統                         |
| 批次操作       | Batch Operations                     | 同時對多個目標執行相同操作的功能，提升管理效率               |
| 使用者生命週期 | User Lifecycle                       | 使用者從建立、啟用、使用到停用/刪除的完整過程                |
| 權限稽核       | Permission Audit                     | 定期檢查使用者權限是否合適的過程                             |
| 速率限制       | Rate Limiting                        | 限制特定時間內可執行的操作次數,防止暴力破解或 DDoS 攻擊      |
| 系統帳號       | System Account                       | 用於系統間通訊或自動化任務的特殊帳號                         |
| 服務帳號       | Service Account                      | 用於應用程式或服務運行的專用帳號                             |
| 權限快取       | Permission Cache                     | 為提升效能而暫存的權限資訊                                   |
| 權限同步       | Permission Synchronization           | 確保不同系統間權限資訊一致性的過程                           |
| 組織單位       | Organizational Unit (OU)             | 反映企業組織架構的邏輯分組                                   |

---

## 版本資訊

- **建立日期**: 2024年11月
- **來源文件**: 
  - `docs/features/login.md` (登入系統產品規格書)
  - `docs/features/user.md` (使用者管理系統產品規格書)
- **維護責任**: 產品開發團隊
- **更新頻率**: 隨功能文件更新而更新

## 使用說明

1. **查詢方式**: 使用瀏覽器搜尋功能 (Ctrl+F 或 Cmd+F) 快速查找特定名詞
2. **分類瀏覽**: 依據功能領域分類查看相關名詞
3. **英文對照**: 提供中英文對照便於技術文件閱讀
4. **詳細解釋**: 每個名詞都包含完整的定義和應用場景說明

如需增加新的名詞或修正現有解釋，請聯繫產品開發團隊。