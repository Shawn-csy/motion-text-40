# Motion Text Lab

Motion Text Lab 是一個可直接拿來使用的文字動畫素材庫，收錄 01–40 種文字動態效果，適合影片片頭、字幕、轉場、社群短片與剪輯工具的素材製作。

## 網站功能

- 在 Playground 輸入文字、切換效果與調整速度
- 即時預覽 40 種文字動畫
- 下載單一效果的獨立 HTML 素材
- 複製效果 Prompt，交給 Agent 生成或整合到其他專案
- 依照 01–08、09–16 等區段瀏覽效果

## 專案結構

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網站頁面與 Playground 結構 |
| `style.css` | 網站樣式與動畫關鍵影格 |
| `app.js` | Playground、效果切換與卡片互動 |
| `download.js` | HTML 素材下載與 Prompt 複製 |
| `effects.json` | 40 個效果的名稱、描述與動畫設定 |
| `agent-guide.md` | 提供 Agent 使用的操作說明 |
| `agent-manifest.json` | 可供 Agent 或自動化工具讀取的頁面選擇器 |
| `reference.css` | 下載素材使用的基礎樣式參考 |
| `site.json` | 網站描述與 metadata |

## 本地預覽

這是一個 buildless 的靜態網站，不需要安裝套件。可以在專案目錄啟動任一個靜態檔案伺服器：

```bash
python3 -m http.server 8080
```

接著開啟 <http://localhost:8080/>。

## 給 Agent 的使用方式

效果資料集中在 `effects.json`。每個效果都有穩定的 `id` 與排序編號，可以先讀取資料，再使用效果 ID 組合 Playground URL：

```text
/?effect=laser&text=HELLO&speed=1.2#playground
```

完整的選擇器、效果格式與操作規格請參考 [`agent-guide.md`](./agent-guide.md) 及 [`agent-manifest.json`](./agent-manifest.json)。

## 開源

本專案以公開 GitHub repository 維護：

<https://github.com/Shawn-csy/motion-text-40>
