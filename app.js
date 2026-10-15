const EFFECTS = {
  lightning: { label: 'Lightning Strike', number: '01', sample: 'STRIKE' },
  laser: { label: 'Laser Cut', number: '02', sample: 'CUT' },
  coin: { label: 'Coin Flip', number: '03', sample: 'FLIP' },
  explode: { label: 'Explode Out', number: '04', sample: 'BURST' },
  disintegrate: { label: 'Disintegrate', number: '05', sample: 'GONE' },
  heartbeat: { label: 'Heartbeat Zoom', number: '06', sample: 'PULSE' },
  kaleido: { label: 'Text Kaleido', number: '07', sample: 'SPIN' },
  slam: { label: 'Number Slam', number: '08', sample: '3' },
}

Object.assign(EFFECTS, {
  waveletters: { label: 'Wave Letters', number: '09', sample: 'WAVE' },
  stopmotion: { label: 'Stop Motion', number: '10', sample: 'STOP' },
  letterrain: { label: 'Letter Rain', number: '11', sample: 'RAIN' },
  magnifier: { label: 'Magnifier Lens', number: '12', sample: 'ZOOM' },
  scramble: { label: 'Scramble Decode', number: '13', sample: 'DECODE' },
  domino: { label: 'Domino Letters', number: '14', sample: 'DOMINO' },
  gradient: { label: 'Gradient Flow', number: '15', sample: 'FLOW' },
  circletext: { label: 'Circle Text', number: '16', sample: 'CIRCLE' },
  water: { label: 'Water Reflection', number: '17', sample: 'REFLECT' },
  bounce: { label: 'Letter Bounce', number: '18', sample: 'BOUNCE' },
  flag: { label: 'Text Flag', number: '19', sample: 'FLAG' },
  gravity: { label: 'Gravity Flip', number: '20', sample: 'GRAVITY' },
  magnet: { label: 'Magnet Pull', number: '21', sample: 'PULL' },
  pulsegrid: { label: 'Word Pulse Grid', number: '22', sample: 'GRID' },
  weight: { label: 'Weight Grow', number: '23', sample: 'GROW' },
  fan: { label: 'Text Fan', number: '24', sample: 'FAN' },
  karaoke: { label: 'Karaoke Ball', number: '25', sample: 'SING' },
  swing: { label: 'Swing Letters', number: '26', sample: 'SWING' },
  pixel: { label: 'Pixel Dissolve', number: '27', sample: 'PIXEL' },
  rotating: { label: 'Rotating Words', number: '28', sample: 'ROTATE' },
  blurtrail: { label: 'Blur Trail', number: '29', sample: 'TRAIL' },
  checker: { label: 'Checker Words', number: '30', sample: 'CHECK' },
  roller: { label: 'Roller Path', number: '31', sample: 'ROLL' },
  shuffle: { label: 'Shuffle Letters', number: '32', sample: 'SHUFFLE' },
  spiral: { label: 'Text Spiral', number: '33', sample: 'SPIRAL' },
  jitter: { label: 'Jitter Settle', number: '34', sample: 'JITTER' },
  stretch: { label: 'Elastic Wave Stretch', number: '35', sample: 'STRETCH' },
  ink: { label: 'Ink Bleed', number: '36', sample: 'INK' },
  assemble: { label: 'Letter Assemble', number: '37', sample: 'ASSEMBLE' },
  mosaic: { label: 'Text Mosaic', number: '38', sample: 'MOSAIC' },
  crumble: { label: 'Crumble Down', number: '39', sample: 'CRUMBLE' },
  float: { label: 'Float Drift', number: '40', sample: 'FLOAT' },
})

const CARD_META = {
  lightning: { card: 'card-lime', category: 'IMPACT', tone: '衝擊 · 開場', description: '閃電的閃光讓文字像被瞬間打亮。', decoration: 'preview-flash' },
  laser: { card: 'card-red', category: 'SPLIT', tone: '科幻 · 切斷', description: '一道紅線穿過字面，留下乾淨的切割感。', decoration: 'preview-laser' },
  coin: { card: 'card-cream', category: 'TURN', tone: '遊戲 · 翻面', description: '每個字母像硬幣一樣翻過來，逐字落地。', decoration: 'preview-shadow' },
  explode: { card: 'card-violet', category: 'BURST', tone: '衝擊 · 分散', description: '中心的字向四方彈開，像一個被按下的爆點。', decoration: 'preview-burst' },
  disintegrate: { card: 'card-ink', category: 'DISSOLVE', tone: '消融 · 劇情', description: '字被拆成碎片，從畫面裡失去重量。', decoration: 'preview-particles' },
  heartbeat: { card: 'card-lime', category: 'PULSE', tone: '節奏 · 放大', description: '跟著鼓點呼吸，字在放大與收縮間保持張力。', decoration: 'preview-heart' },
  kaleido: { card: 'card-cream', category: 'ROTATE', tone: '像素 · 萬花筒', description: '文字像萬花筒一樣旋轉，把一個字變成一個圖案。', decoration: 'preview-kaleido' },
  slam: { card: 'card-red', category: 'COUNTDOWN', tone: '倒數 · 落下', description: '倒數數字從高處落下，撞擊畫面後留下震動。', decoration: 'preview-impact' },
  waveletters: { card: 'card-red', category: 'WAVE', tone: '波浪 · 起伏', description: '文字像波浪一樣上下起伏。' },
  stopmotion: { card: 'card-red', category: 'FRAME', tone: '逐格 · 玩具', description: '像逐格拍攝一樣一格格抖動。' },
  letterrain: { card: 'card-red', category: 'RAIN', tone: '雨幕 · 背景', description: '字母像雨滴一樣從上方落下。' },
  magnifier: { card: 'card-red', category: 'LENS', tone: '解讀 · 發現', description: '放大鏡掃過文字，局部被放大。' },
  scramble: { card: 'card-red', category: 'CODE', tone: '駭客 · SF', description: '亂碼快速重組成正確文字。' },
  domino: { card: 'card-red', category: 'DOMINO', tone: '連鎖 · 趣味', description: '字母像骨牌一樣依序倒下。' },
  gradient: { card: 'card-red', category: 'FLOW', tone: '色彩 · 今風', description: '彩色漸層沿著文字持續流動。' },
  circletext: { card: 'card-red', category: 'CIRCLE', tone: '標誌 · 循環', description: '文字沿圓形路徑旋轉與翻面。' },
  water: { card: 'card-violet', category: 'WATER', tone: '夜景 · 朦朧', description: '文字與水面倒影同步晃動。' },
  bounce: { card: 'card-violet', category: 'BOUNCE', tone: '可愛 · MV', description: '字母逐字彈起再落下。' },
  flag: { card: 'card-cream', category: 'FLAG', tone: '勢い · 應援', description: '文字像旗幟一樣被風吹動。' },
  gravity: { card: 'card-violet', category: 'GRAVITY', tone: '震き · SF', description: '文字反轉後被重力拉起。' },
  magnet: { card: 'card-violet', category: 'MAGNET', tone: '集中 · LOGO', description: '字母像被磁鐵吸引聚到中心。' },
  pulsegrid: { card: 'card-violet', category: 'GRID', tone: '背景 · 節奏', description: '格子狀文字像波一樣膨脹。' },
  weight: { card: 'card-cream', category: 'WEIGHT', tone: '強調 · 變化', description: '細字逐漸變粗變重。' },
  fan: { card: 'card-violet', category: 'FAN', tone: '和風 · 登場', description: '同一文字像扇子一樣展開。' },
  karaoke: { card: 'card-ink', category: 'BALL', tone: '歌 · 字幕', description: '球沿著文字移動，標記播放進度。' },
  swing: { card: 'card-ink', category: 'SWING', tone: '可愛 · 悠り', description: '字母從上方吊掛來回擺盪。' },
  pixel: { card: 'card-cream', category: 'PIXEL', tone: '數位 · 消融', description: '文字拆成像素後消散再組回。' },
  rotating: { card: 'card-ink', category: 'ROTATE', tone: '時間 · 季節', description: '單字沿圓周旋轉切換。' },
  blurtrail: { card: 'card-ink', category: 'TRAIL', tone: '速度 · 疾走', description: '文字高速移動留下模糊殘影。' },
  checker: { card: 'card-ink', category: 'CHECKER', tone: '棋 · 背景', description: '格狀文字交錯翻轉。' },
  roller: { card: 'card-cream', category: 'ROLLER', tone: '疾走 · 童趣', description: '文字沿無限路徑滾動穿越畫面。' },
  shuffle: { card: 'card-ink', category: 'SHUFFLE', tone: '遊戲 · 拼圖', description: '字母快速換位後整理成文字。' },
  spiral: { card: 'card-orange', category: 'SPIRAL', tone: '幻覺 · 吸い込み', description: '字母沿螺旋軌道盤旋。' },
  jitter: { card: 'card-orange', category: 'JITTER', tone: '驚き · 緊張', description: '文字先抖動再逐字穩定。' },
  stretch: { card: 'card-cream', category: 'ELASTIC', tone: 'POP · 音樂', description: '文字像橡皮筋一樣拉伸成波。' },
  ink: { card: 'card-orange', category: 'INK', tone: '和 · 手書き風', description: '文字像墨水一樣擴散暈開。' },
  assemble: { card: 'card-orange', category: 'ASSEMBLE', tone: '標題 · 導入', description: '散落字母從四周聚回成字。' },
  mosaic: { card: 'card-orange', category: 'MOSAIC', tone: '身體見本 · DESIGN', description: '文字被切成格子並逐格亮起。' },
  crumble: { card: 'card-cream', category: 'CRUMBLE', tone: '落わり · 結幕', description: '文字碎裂後向下崩落。' },
  float: { card: 'card-ink', category: 'FLOAT', tone: '癒し · 夢', description: '文字像氣球一樣柔和漂浮。' },
}

const controlPanel = document.querySelector('#control-panel')
const textInput = document.querySelector('#text-input')
const effectSelect = document.querySelector('#effect-select')
const speedInput = document.querySelector('#speed-input')
const speedOutput = document.querySelector('#speed-output')
const stageCounter = document.querySelector('#stage-counter')
const effectCount = document.querySelector('#effect-count')
const replayButton = document.querySelector('#replay-button')
const previousEffectButton = document.querySelector('#previous-effect')
const nextEffectButton = document.querySelector('#next-effect')
const effectKeys = Object.keys(EFFECTS)
let stageCanvas = document.querySelector('#stage-canvas')
let stageWord = document.querySelector('#stage-word')
const urlParams = new URLSearchParams(window.location.search)
const initialEffect = EFFECTS[urlParams.get('effect')] ? urlParams.get('effect') : effectSelect.value
const initialText = urlParams.get('text') || textInput.value
const initialSpeed = Number(urlParams.get('speed'))
let currentEffect = initialEffect
let currentText = escapeText(initialText)

effectSelect.value = currentEffect
textInput.value = currentText
if (Number.isFinite(initialSpeed) && initialSpeed >= 0.6 && initialSpeed <= 1.8) speedInput.value = initialSpeed.toFixed(1)

function escapeText(value) {
  return [...value].slice(0, 12).join('') || 'MOTION'
}

function renderWord(container, text) {
  const safeText = escapeText(text)
  container.replaceChildren()
  const middle = (safeText.length - 1) / 2
  ;[...safeText].forEach((character, index) => {
    const letter = document.createElement('span')
    const distance = index - middle
    const direction = distance === 0 ? 1 : Math.sign(distance)
    letter.textContent = character === ' ' ? '\u00a0' : character
    letter.style.setProperty('--i', index)
    letter.style.setProperty('--x', `${Math.round(direction * (22 + Math.abs(distance) * 12))}px`)
    letter.style.setProperty('--y', `${Math.round(-12 - Math.abs(distance) * 8)}px`)
    letter.style.setProperty('--r', `${Math.round(direction * (7 + Math.abs(distance) * 5))}deg`)
    container.append(letter)
  })
}

function setSpeed() {
  const speed = Number(speedInput.value)
  speedOutput.textContent = `${speed.toFixed(1)}×`
  stageCanvas.style.setProperty('--motion-duration', `${(3.2 / speed).toFixed(2)}s`)
}

function restartStage() {
  const freshCanvas = stageCanvas.cloneNode(true)
  stageCanvas.replaceWith(freshCanvas)
  stageCanvas = freshCanvas
  stageWord = stageCanvas.querySelector('#stage-word')
  renderWord(stageWord, currentText)
  setSpeed()
}

function setEffect(nextEffect, shouldRestart = true) {
  if (!EFFECTS[nextEffect]) return
  currentEffect = nextEffect
  const info = EFFECTS[currentEffect]
  effectSelect.value = currentEffect
  stageCounter.textContent = info.number
  if (effectCount) effectCount.textContent = info.number
  stageCanvas.className = `stage-canvas effect--${currentEffect}`
  if (shouldRestart) restartStage()
}

function setText(nextText) {
  currentText = escapeText(nextText)
  textInput.value = currentText
  renderWord(stageWord, currentText)
}

const CARD_ICONS = {
  play: '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"></path></svg>',
  copy: '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
  download: '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
}

function renderEffectCards() {
  const grid = document.querySelector('#effects-grid')
  if (!grid) return
  grid.replaceChildren()
  effectKeys.forEach((effectId) => {
    const effect = EFFECTS[effectId]
    const meta = CARD_META[effectId] || { card: 'card-ink', category: 'TYPE', tone: '文字 · 動態', description: '讓文字以新的方式移動。' }
    const article = document.createElement('article')
    article.className = `effect-card ${meta.card}`
    article.dataset.effectCard = effectId
    article.dataset.label = effect.label
    article.dataset.number = effect.number
    article.innerHTML = `<div class="card-topline"><span>${effect.number} / ${meta.category}</span><b>${meta.tone}</b></div><div class="effect-preview effect--${effectId}" data-text="${effect.sample}"><div class="preview-word"></div><span class="preview-effect-detail ${meta.decoration || ''}"></span></div><div class="card-copy"><h3>${effect.label}</h3><p>${meta.description}</p><div class="card-tools"><button type="button" class="card-icon-button" data-use-effect aria-label="在 playground 試試" title="在 playground 試試">${CARD_ICONS.play}</button><button type="button" class="card-icon-button card-prompt" data-copy-prompt="${effectId}" aria-label="複製實作 Prompt" title="複製實作 Prompt">${CARD_ICONS.copy}</button><button type="button" class="card-icon-button card-download" data-download-effect="${effectId}" aria-label="下載 HTML 素材" title="下載 HTML 素材">${CARD_ICONS.download}</button></div></div>`
    grid.append(article)
  })
}

function populateEffectSelect() {
  effectSelect.replaceChildren(...effectKeys.map((effectId) => {
    const option = document.createElement('option')
    option.value = effectId
    option.textContent = EFFECTS[effectId].label
    return option
  }))
}

populateEffectSelect()
renderEffectCards()

const visibleEffectCount = document.querySelector('#visible-effect-count')
const rangeButtons = document.querySelectorAll('[data-effect-range]')

function applyEffectRange(range) {
  const [start, end] = range === 'all' ? [1, effectKeys.length] : range.split('-').map(Number)
  let visible = 0

  document.querySelectorAll('[data-effect-card]').forEach((card) => {
    const number = Number(card.dataset.number)
    const shouldShow = number >= start && number <= end
    card.hidden = !shouldShow
    if (shouldShow) visible += 1
  })

  rangeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.effectRange === range)
    button.setAttribute('aria-selected', button.dataset.effectRange === range ? 'true' : 'false')
  })
  if (visibleEffectCount) visibleEffectCount.textContent = `${String(visible).padStart(2, '0')} / ${effectKeys.length}`
}

rangeButtons.forEach((button) => {
  button.addEventListener('click', () => applyEffectRange(button.dataset.effectRange))
})
applyEffectRange('all')

const usageHelpToggle = document.querySelector('#usage-help-toggle')
const usageHelpPanel = document.querySelector('#usage-help-panel')
const usageHelpClose = document.querySelector('#usage-help-close')

function setUsageHelp(isOpen) {
  if (!usageHelpToggle || !usageHelpPanel) return
  usageHelpPanel.hidden = !isOpen
  usageHelpToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
}

usageHelpToggle?.addEventListener('click', () => {
  setUsageHelp(usageHelpPanel.hidden)
})
usageHelpClose?.addEventListener('click', () => setUsageHelp(false))
document.addEventListener('click', (event) => {
  if (usageHelpPanel?.hidden || event.target.closest('.usage-help')) return
  setUsageHelp(false)
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setUsageHelp(false)
})

document.querySelectorAll('.preview-word').forEach((preview) => {
  renderWord(preview, preview.closest('.effect-preview').dataset.text)
})

renderWord(stageWord, currentText)
setEffect(currentEffect, false)
setSpeed()

controlPanel.addEventListener('submit', (event) => {
  event.preventDefault()
  setText(textInput.value)
  setEffect(effectSelect.value)
})

effectSelect.addEventListener('change', () => setEffect(effectSelect.value))
textInput.addEventListener('input', () => setText(textInput.value))
speedInput.addEventListener('input', setSpeed)
replayButton.addEventListener('click', restartStage)

function stepEffect(direction) {
  const currentIndex = effectKeys.indexOf(currentEffect)
  const nextIndex = (currentIndex + direction + effectKeys.length) % effectKeys.length
  setEffect(effectKeys[nextIndex])
}

previousEffectButton.addEventListener('click', () => stepEffect(-1))
nextEffectButton.addEventListener('click', () => stepEffect(1))

document.querySelectorAll('[data-effect-card]').forEach((card) => {
  const activate = () => {
    const effectId = card.dataset.effectCard
    if (!EFFECTS[effectId]) return

    setText(effectId === 'slam' ? '3' : EFFECTS[effectId].sample)
    setEffect(effectId)

    const playground = document.querySelector('#playground')
    if (!playground) return

    const url = new URL(window.location.href)
    url.searchParams.set('effect', effectId)
    url.searchParams.set('text', currentText)
    url.searchParams.set('speed', speedInput.value)
    url.hash = 'playground'
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
    playground.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  card.querySelector('[data-use-effect]')?.addEventListener('click', activate)
})

document.addEventListener('keydown', (event) => {
  if (event.target.matches('input, select')) return
  const number = Number(event.key)
  if (number >= 1 && number <= 8) setEffect(effectKeys[number - 1])
  if (event.key.toLowerCase() === 'r') restartStage()
})

window.MotionTextLab = {
  getState: () => ({ effect: currentEffect, text: currentText, speed: Number(speedInput.value) }),
  selectEffect: (nextEffect) => setEffect(nextEffect),
  setText: (nextText) => setText(nextText),
  replay: () => restartStage(),
}
