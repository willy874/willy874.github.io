# Console Platform - 參考資料 (References)

本文件整合了 Console Platform 各功能模組開發時參考的標準、規範、最佳實踐與技術文件。

## 安全標準與規範

### 密碼與認證標準

#### RFC 標準

- **RFC 6238**: TOTP: Time-Based One-Time Password Algorithm
  - 定義 TOTP 演算法規範
  - 時間步長與容錯機制
  - <https://datatracker.ietf.org/doc/html/rfc6238>

- **RFC 4226**: HOTP: An HMAC-Based One-Time Password Algorithm
  - 定義 HMAC-Based OTP 演算法
  - TOTP 的基礎規範
  - <https://datatracker.ietf.org/doc/html/rfc4226>

- **RFC 7519**: JSON Web Token (JWT)
  - JWT 格式定義
  - Claims 與驗證機制
  - <https://datatracker.ietf.org/doc/html/rfc7519>

- **RFC 6749**: OAuth 2.0 Authorization Framework
  - Token 類型與生命週期
  - Refresh Token 機制
  - <https://datatracker.ietf.org/doc/html/rfc6749>

#### NIST 標準

- **NIST SP 800-63B**: Digital Identity Guidelines - Authentication and Lifecycle Management
  - 密碼強度要求
  - 認證方式建議
  - 帳號生命週期管理
  - <https://pages.nist.gov/800-63-3/sp800-63b.html>

- **NIST SP 800-207**: Zero Trust Architecture
  - 零信任原則
  - 架構實作建議
  - <https://csrc.nist.gov/publications/detail/sp/800-207/final>

- **NIST SP 800-53**: Security and Privacy Controls
  - AC-1 ~ AC-6: Access Control
  - IA-1 ~ IA-11: Identification and Authentication
  - 詳細的控制措施
  - <https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final>

- **NIST SP 800-162**: Guide to Attribute Based Access Control (ABAC)
  - 屬性型存取控制指南
  - RBAC 的進階發展
  - <https://csrc.nist.gov/publications/detail/sp/800-162/final>

- **NIST SP 800-115**: Technical Guide to Information Security Testing and Assessment
  - 資訊安全測試與評估指南
  - <https://csrc.nist.gov/publications/detail/sp/800-115/final>

- **NIST Cybersecurity Framework**: Identity Management and Access Control
  - 身份與存取管理
  - 持續驗證機制
  - <https://www.nist.gov/cyberframework>

#### OWASP 安全指南

- **OWASP Authentication Cheat Sheet**
  - 認證最佳實踐
  - 常見漏洞與防護
  - <https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html>

- **OWASP Password Storage Cheat Sheet**
  - 密碼儲存最佳實踐
  - 雜湊演算法選擇
  - <https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html>

- **OWASP Session Management Cheat Sheet**
  - Session 安全管理
  - Token 生成與驗證
  - <https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html>

- **OWASP Testing Guide**: Authentication Testing
  - 認證功能測試方法
  - 漏洞檢測
  - <https://owasp.org/www-project-web-security-testing-guide/>

- **OWASP Testing Guide**: Authorization Testing
  - 授權測試方法
  - <https://owasp.org/www-project-web-security-testing-guide/>

- **OWASP Top 10**:
  - A01: Broken Access Control
  - A02: Cryptographic Failures
  - A07: Identification and Authentication Failures
  - <https://owasp.org/Top10/>

- **OWASP Application Security Verification Standard (ASVS)**
  - V4: Access Control Verification Requirements
  - 應用程式安全驗證標準
  - <https://owasp.org/www-project-application-security-verification-standard/>

### 零信任架構

- **BeyondCorp**: Google's Zero Trust Model
  - Google 零信任實踐
  - 無邊界安全模型
  - <https://cloud.google.com/beyondcorp>

## RBAC 標準與規範

### 核心標準

- **ANSI INCITS 359-2004**: Role Based Access Control Standard
  - RBAC 的官方標準規範
  - 定義核心概念與實作模型
  - <https://www.ansi.org>

- **ISO/IEC 10181-3**: Security frameworks for open systems - Access control framework
  - 開放系統存取控制框架
  - 國際標準規範
  - <https://www.iso.org>

### 業界指南

- **SANS Institute**: Implementing Role-Based Access Controls
  - RBAC 實作指南
  - 最佳實踐與常見錯誤
  - <https://www.sans.org>

- **CIS Controls v8**: Control 6 - Access Control Management
  - 存取控制管理指南
  - <https://www.cisecurity.org/controls/v8>

## 法規遵循

### 國際標準

- **ISO/IEC 27001:2013**: Information Security Management
  - A.9.2: User Access Management
  - A.9.4: System and Application Access Control
  - 帳號管理與存取控制要求

- **ISO/IEC 27001**: Information Security Management
  - A.9 Access Control
  - 資訊安全管理標準
  - <https://www.iso.org/isoiec-27001-information-security.html>

### 隱私保護法規

- **GDPR**: General Data Protection Regulation
  - Article 32: Security of Processing
  - Article 32: Security of processing
  - 個人資料保護要求
  - 認證與授權機制
  - 歐盟個資保護法規
  - <https://gdpr-info.eu>

- **California Consumer Privacy Act (CCPA)**
  - 加州消費者隱私法案
  - <https://oag.ca.gov/privacy/ccpa>

### 產業特定法規

- **SOX**: Sarbanes-Oxley Act
  - 財務報告內控要求
  - 存取控制合規要求

- **HIPAA**: Health Insurance Portability and Accountability Act
  - 醫療資訊隱私保護
  - 存取控制要求

- **PCI DSS**: Payment Card Industry Data Security Standard
  - 支付卡產業安全標準
  - 存取控制要求
  - <https://www.pcisecuritystandards.org>

### 稽核標準

- **SOC 2 Type II**: Service Organization Control
  - CC6.1: Logical and Physical Access Controls
  - CC6.2: Prior to Issuing System Credentials
  - CC6.6: Management of Credentials
  - CC6: Logical and Physical Access Controls
  - 服務組織控制報告
  - <https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html>

- **COBIT**: Control Objectives for Information Technologies
  - IT 治理框架
  - <https://www.isaca.org/resources/cobit>

## 技術實作參考

### 認證與授權庫

- **JWT.io**: JWT Debugger and Libraries
  - JWT 驗證工具
  - 各語言實作庫
  - <https://jwt.io/>

- **Speakeasy**: TOTP Library
  - TOTP 實作參考
  - 多語言支援
  - <https://github.com/speakeasyjs/speakeasy>

- **bcrypt**: Password Hashing
  - 密碼雜湊最佳實踐
  - 效能與安全平衡
  - <https://github.com/kelektiv/node.bcrypt.js>

### 開源框架與專案

- **Apache Shiro**: Java Security Framework
  - RBAC 實作參考
  - <https://shiro.apache.org>

- **Casbin**: Authorization Library
  - 多語言權限控制庫
  - <https://casbin.org>

- **Open Policy Agent (OPA)**
  - 政策引擎
  - <https://www.openpolicyagent.org>

### 開發框架

- **Spring Security**: Java Security Framework
  - 企業級安全框架
  - <https://spring.io/projects/spring-security>

- **Passport.js**: Authentication Middleware for Node.js
  - Node.js 認證中介軟體
  - <https://www.passportjs.org>

### 雲端服務

- **AWS IAM**: Identity and Access Management
  - AWS 權限管理服務
  - <https://aws.amazon.com/iam/>

- **Azure Active Directory**: Identity Management
  - Microsoft 身份管理服務
  - <https://azure.microsoft.com/services/active-directory/>

- **Google Cloud Identity**: Identity and Access Management
  - Google Cloud 身份管理
  - <https://cloud.google.com/identity>

## 使用者體驗參考

### 認證技術

- **WebAuthn**: Web Authentication API
  - 無密碼認證
  - <https://www.w3.org/TR/webauthn/>

### 設計指南

- **Material Design**: Authentication Patterns
  - UI/UX 設計指南
  - 認證流程設計
  - <https://material.io/design>

- **Google Authenticator Protocol**
  - Key URI 格式
  - QR Code 生成
  - <https://github.com/google/google-authenticator/wiki/Key-Uri-Format>

- **Microsoft Identity Platform Best Practices**
  - Token 管理最佳實踐
  - Session 安全
  - <https://learn.microsoft.com/en-us/azure/active-directory/develop/>

### 管理介面

- **Admin Dashboard Templates**
  - 管理介面設計參考
  - UX/UI 最佳實踐

- **React Admin**: Admin Interface Framework
  - 管理介面框架
  - <https://marmelab.com/react-admin/>

## 測試與驗證

### 安全測試

- **Penetration Testing Methodologies**
  - 滲透測試方法
  - 權限提升測試

### 效能測試

- **Load Testing for Authentication Systems**
  - 認證系統效能測試
  - 大量使用者場景測試

## 系統架構參考

### 架構設計模式

- **Microservices Security Patterns**
  - 微服務安全模式
  - 分散式權限管理

- **API Security Best Practices**
  - API 安全最佳實踐
  - OAuth 2.0 與 OpenID Connect

### 資料庫設計

- **Database Security Guide**
  - 資料庫安全設計
  - 權限資料模型

---

## 使用說明

### 文件分類

1. **標準規範**: 國際標準組織發布的正式規範
2. **最佳實踐**: 業界認可的實作指南
3. **技術文件**: 具體技術實作的參考資料
4. **法規遵循**: 相關法規與合規要求

### 查閱建議

1. **開發階段**: 重點參考技術實作相關文件
2. **安全審查**: 重點參考安全標準與最佳實踐
3. **法規遵循**: 重點參考相關法規與稽核標準
4. **架構設計**: 重點參考系統架構相關資料

### 維護說明

- **更新頻率**: 每季度檢視一次，確保連結有效性
- **版本管控**: 重要標準變更時更新版本號
- **責任單位**: 技術架構團隊負責維護
- **審查機制**: 資安團隊定期審查安全相關標準

---

## 版本資訊

- **建立日期**: 2024年11月
- **來源文件**: 
  - `docs/features/login.md` (登入系統產品規格書)
  - `docs/features/user.md` (使用者管理系統產品規格書)
- **維護責任**: 技術架構團隊
- **更新頻率**: 季度更新，重要變更即時更新
- **審查週期**: 每半年進行完整審查

如需增加新的參考資料或更新現有連結，請聯繫技術架構團隊。