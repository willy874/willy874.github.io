# Technology Selection

## 框架

### 評估

前端框架

- React
  - 生態廣大，套件資源豐富
  - 需要技術與人力資源容易找到備援夥伴
  - AI 適配能力好

## Platform

- Client
  - Alias name: Agent
  - Target: 一般被管理人員
  - Platform: Window
- Backstage
  - Alias name: Console
  - Target: 系統管理者，行政人員、IT 人員
  - Platform: Web

## Theme

評估是否要兼容 Dark Mode?

採用 Light Mode，原因模式

- 業務在做系統簡報和操作教學時一定需要 Light Mode
- 雙模式製作成本偏高
- 可以事先備援，但先不要大幅度製作
- 雖然使用者族群偏愛 Dark Mode，但因為不是長時間泡在系統上，不需要優先提供。

## UI Framework

### 選項

- mui

## i18n

### 必要支持語系

- 中文
- 英文

### 原始碼存放架構

- 使用 Cloud Sheet (Google Sheet) 中心化管理
- 使用 Local File (JSON) 在原始碼管理

### 存取方式架構

- Local JSON, Build time

## Auth

- 採用 Auth2.0 + JWT 架構
- 經過評估，因為沒有多平台，不需要製作系統內的 SSO
