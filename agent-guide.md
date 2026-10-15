# Motion Text Lab — Agent 使用說明

這個站提供第一組 01–40 的可互動文字特效。Agent 使用時，先讀 `agent-manifest.json`，再讀 `effects.json`；不要只根據卡片標題猜效果。

## 選擇效果

1. 先用 `selection_rules` 與每個 `effects[].choose_when` 把使用者需求對應到 `effect_id`。
2. 需要預覽時，開啟：`./index.html?effect={effect_id}&text={文字}&speed={速度}#playground`。
3. `text` 最多 12 個字元；`speed` 建議使用 `0.6` 到 `1.8`。
4. 若使用者要求可讀性，優先考慮 `heartbeat`；若使用者要求倒數，使用 `slam`。09–40 的完整選擇條件、動作、CSS recipe 與 prompt 以 `effects.json` 為準。

每個 `effects[]` 項目都有 `agent_prompt_template`。這不是只有靈感描述，而是一段可直接交給前端 agent 的實作規格，包含視覺目標、HTML 結構、CSS selector、逐字變數、keyframe 時間軸與速度換算。它的用途是把效果套用到使用者現有的文字或元件，不是要求 Agent 另做一個與使用者專案無關的 demo page。複製前把 `{text}` 和 `{speed}` 換成目前需求；頁面上的「複製實作 Prompt」按鈕會自動補上整合規則、效果編號、網站位址、Playground URL、規格 API 與 runtime 調用方式。

## Prompt 的正確使用方式

複製的 Prompt 交給 Agent 後，Agent 應該依照以下順序工作：

1. 先找出使用者指定的目標文字、標題、字幕、Logo 或現有元件；目前 Prompt 裡的示範文字只用來說明動態，不是必須保留的內容。
2. 在使用者現有的 HTML、CSS、React、Vue 或其他前端結構中整合，不要擅自建立無關的獨立頁面。
3. 保留使用者原本的文字、語意、字型、顏色、版面與互動，只加入必要的動畫 class、span 結構、keyframes 或容器 pseudo-element。
4. 讓動畫可以重播、只作用於目標元素，並依照使用者指定的速度調整週期。
5. 完成後說明修改的檔案與套用方式；如果沒有提供目標檔案，先詢問要套用到哪個頁面或元件。

## Agent API

- `GET ./effects.json`：取得 01–40 的 `effects[]`；顯示編號讀 `effects[].order`，呼叫用 `effects[].id`。
- `GET ./agent-manifest.json`：取得完整操作契約、預覽 URL、DOM selector 與 runtime 方法。
- 預覽 URL：`./index.html?effect={effect_id}&text={text}&speed={speed}#playground`。
- 頁面 runtime：`window.MotionTextLab.getState()`、`selectEffect(effect_id)`、`setText(text)`、`replay()`。
- 素材下載使用 `#download-current`；每個卡片也有 `[data-download-effect]`。

複製出的 Prompt 會列出目前效果的 `order` 編號（例如 `12 / 40`）、`effect_id`、效果名稱、網站位址，以及可以直接開啟的 Playground URL。若 Agent 需要讀取效果規格，使用 Prompt 裡的 `GET ./effects.json` 位址；若要操作目前頁面，可使用：

```js
window.MotionTextLab.selectEffect('magnifier')
window.MotionTextLab.setText('使用者的文字')
window.MotionTextLab.replay()
```

## Effect ID 對照

| effect_id | 適合情境 | 動作關鍵 |
| --- | --- | --- |
| `lightning` | 開場、突襲、第一拍 | 閃光、模糊落入、閃電斜切 |
| `laser` | 科技、切割、分鏡 | 紅色光束掃過、切面殘光 |
| `coin` | 遊戲、抽卡、翻牌 | 逐字 3D 翻面、綠色厚度 |
| `explode` | 爆點、衝擊、分散 | 中心聚焦後四方爆散 |
| `disintegrate` | 消失、回憶、戲劇退場 | 模糊、色差、碎片飄散 |
| `heartbeat` | 節拍、呼吸、音樂同步 | 黑字放大、同心波紋 |
| `kaleido` | MV、循環、幾何視覺 | 字片與框架旋轉成萬花筒 |
| `slam` | 倒數、數字、強力收尾 | 從上方落下、壓縮、震波 |

09–40 的 effect_id 依序為：`waveletters`、`stopmotion`、`letterrain`、`magnifier`、`scramble`、`domino`、`gradient`、`circletext`、`water`、`bounce`、`flag`、`gravity`、`magnet`、`pulsegrid`、`weight`、`fan`、`karaoke`、`swing`、`pixel`、`rotating`、`blurtrail`、`checker`、`roller`、`shuffle`、`spiral`、`jitter`、`stretch`、`ink`、`assemble`、`mosaic`、`crumble`、`float`。每一個都有對應的 `choose_when`、`implementation`、`export` 與 `agent_prompt_template`。

## 可下載素材

在 playground 選好效果後，呼叫 `#download-current`。下載的是可直接雙擊開啟的 `*.html`，內容包含：

- 該效果的完整視覺樣式
- 目前選取的文字與播放速度
- 單一全畫布效果容器
- `effect_id` 與效果名稱 metadata

Agent 需要理解效果規格時，讀 `effects.json`；使用者需要可直接交付的素材時，下載 HTML。

這個素材包是可被 agent、前端工具或其他生成流程直接讀取的程式素材，不是壓平後的影片。若未來要輸出 GIF、WebM 或 MP4，再在這個 package 上加 browser recorder/exporter 即可，不要把影片檔當成效果的唯一來源。

## 人類與 Agent 共用的 DOM 入口

- `#text-input`：文字，最多 12 字元，輸入時即時更新
- `#effect-select`：效果選擇，value 等於 `effect_id`
- `#speed-input`：速度，0.6–1.8，調整時即時更新
- `#replay-button`：重新播放
- `#download-current`：下載目前效果素材包
- `#copy-prompt`：複製目前效果的實作 Prompt
- `[data-copy-prompt]`：複製指定 `data-copy-prompt` 效果的實作 Prompt
- `#stage-canvas`：目前預覽畫布；class 會包含 `effect--{effect_id}`

## 建議架構

`effects.json` 是唯一效果註冊表；`reference.css` 是執行層；`index.html` 是人類操作介面；`agent-manifest.json` 與本檔是 agent 介面。新增第 09 個效果時，先加 registry metadata，再加 CSS implementation，最後把卡片與下拉選單接到相同的 `effect_id`。
