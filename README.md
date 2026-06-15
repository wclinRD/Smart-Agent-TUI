# Smart Agent TUI

**Smart Agent TUI** 是一個從 [OpenCode](https://github.com/sst/opencode) fork 出來、修改而成的 AI 編碼代理終端介面。

> 本專案是 OpenCode 的衍生版本，並非原始專案官方版本。

---

## 關於本專案

OpenCode 是一個優秀的開源 AI 編碼代理，支援終端介面（TUI）、桌面應用與 Web 介面。

Smart Agent TUI 在 OpenCode 的基礎上進行了客製化修改，包含：

- **Smart MCP Agent** 整合 — 增強的 MCP 工具路由與代理架構
- **自訂技能系統** — 支援 OpenCode Skills 載入與執行
- **增強的 prompt 模板** — 針對不同使用場景最佳化的系統提示
- **客製化工具鏈** — 整合程式碼分析、編輯、除錯、搜尋等工具

---

## 安裝

安裝方式與原始 OpenCode 相同（套件名稱為 `smart-ai`）：

```bash
# YOLO
curl -fsSL https://smart.ai/install | bash

# Package managers
npm i -g smart-ai@latest
brew install anomalyco/tap/smart
```

> 更詳細的安裝說明請參考 [OpenCode 官方文件](https://opencode.ai/docs)。

---

## 差異說明

| 項目 | OpenCode | Smart Agent TUI |
|------|----------|----------------|
| 基礎架構 | 原始版本 | Fork 後客製化 |
| MCP 工具路由 | 標準實作 | 增強路由 + Smart Agent |
| 技能系統 | 內建技能 | 可擴充技能載入 |
| 系統提示 | 預設提示 | 客製化模板 |

---

## 授權

本專案繼承原始 OpenCode 的授權條款。詳見 [LICENSE](./LICENSE)。

---

## 致謝

- [OpenCode](https://github.com/sst/opencode) — 原始的 AI 編碼代理專案
- [SST](https://sst.dev) — OpenCode 的維護團隊
