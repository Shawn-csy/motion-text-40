const downloadButton = document.querySelector('#download-current')
const registryRequest = fetch('./effects.json?v=prompt-3').then((response) => {
  if (!response.ok) throw new Error(`Unable to load effect registry: ${response.status}`)
  return response.json()
})
const stylesheetRequest = fetch('./reference.css').then(async (response) => {
  if (!response.ok) throw new Error('Unable to load effect stylesheet')
  return response.text()
})

function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}

function lettersMarkup(text) {
  const middle = (text.length - 1) / 2
  return [...text].map((character, index) => {
    const distance = index - middle
    const direction = distance === 0 ? 1 : Math.sign(distance)
    const x = Math.round(direction * (22 + Math.abs(distance) * 12))
    const y = Math.round(-12 - Math.abs(distance) * 8)
    const rotation = Math.round(direction * (7 + Math.abs(distance) * 5))
    return `<span style="--i:${index};--x:${x}px;--y:${y}px;--r:${rotation}deg">${escapeMarkup(character === ' ' ? '\u00a0' : character)}</span>`
  }).join('')
}

function packageUrl(effectId, text, speed) {
  const url = new URL(window.location.href)
  url.search = new URLSearchParams({ effect: effectId, text, speed: String(speed) }).toString()
  url.hash = 'playground'
  return url.toString()
}

function downloadJson(filename, value) {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function downloadText(filename, value, type = 'text/html;charset=utf-8') {
  const blob = new Blob([value], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.append(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function getCurrentState() {
  return window.MotionTextLab?.getState?.() || {
    effect: document.querySelector('#effect-select').value,
    text: document.querySelector('#text-input').value,
    speed: Number(document.querySelector('#speed-input').value),
  }
}

function fillAgentPrompt(effect, text, speed) {
  return effect.agent_prompt_template
    .replaceAll('{text}', text)
    .replaceAll('{speed}', Number(speed).toFixed(1))
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}

function showButtonMessage(button, message) {
  if (!button) return
  if (!button.dataset.originalAriaLabel) button.dataset.originalAriaLabel = button.getAttribute('aria-label') || ''
  if (!button.dataset.originalTitle) button.dataset.originalTitle = button.getAttribute('title') || ''
  button.classList.add('is-copied')
  button.setAttribute('aria-label', message)
  button.title = message
  window.setTimeout(() => {
    button.classList.remove('is-copied')
    button.setAttribute('aria-label', button.dataset.originalAriaLabel)
    button.title = button.dataset.originalTitle
  }, 1800)
}

async function copyAgentPrompt(effectId, button) {
  const registry = await registryRequest
  const effect = registry.effects.find((item) => item.id === effectId)
  if (!effect) return
  const state = getCurrentState()
  const text = state.effect === effectId ? state.text : effect.sample
  await copyText(fillAgentPrompt(effect, text || effect.sample, state.speed || 1))
  showButtonMessage(button, '已複製實作 Prompt')
}

function standaloneHtml(effect, text, speed, styles) {
  const duration = (3.2 / speed).toFixed(2)
  const html = `<div class="stage-canvas ${effect.implementation.container_class}" id="stage-canvas" style="--motion-duration:${duration}s" aria-label="${escapeMarkup(effect.name)}">
  <div class="stage-word" id="stage-word">${lettersMarkup(text)}</div>
</div>`
  const baseStyles = `:root{--bg:#0b0e0d;--ink:#f4f0e6;--lime:#c5ff3d;--red:#ff6259;--cream:#f1ede2;--violet:#a886ff;--blue:#8adcf8;--mono:"SFMono-Regular",Consolas,"Liberation Mono",monospace;--sans:Inter,"Helvetica Neue",Helvetica,Arial,sans-serif}*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden}body{background:transparent;color:var(--ink);font-family:var(--sans)}.stage-canvas{position:relative;width:100vw;height:100vh;min-height:320px;overflow:hidden;display:grid;place-items:center;isolation:isolate;perspective:900px}.stage-canvas:before,.stage-canvas:after{content:"";position:absolute;pointer-events:none}.stage-word{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;white-space:nowrap;font-family:Impact,Haettenschweiler,"Arial Narrow Bold","Helvetica Neue",Arial,sans-serif;font-size:clamp(48px,9vw,118px);font-weight:900;line-height:1;letter-spacing:-.085em;text-transform:uppercase}.stage-word span{display:inline-block;position:relative;will-change:transform,filter,opacity;backface-visibility:hidden;transform-origin:center}.stage-canvas .stage-word span,#stage-canvas .stage-word span{animation-duration:var(--motion-duration,3.2s)}#stage-canvas.effect--heartbeat .stage-word span{animation-duration:var(--motion-duration,1.8s)}#stage-canvas.effect--kaleido .stage-word span{animation-duration:var(--motion-duration,4s)}`
  return `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="motion-effect-id" content="${escapeMarkup(effect.id)}">
  <meta name="motion-effect-name" content="${escapeMarkup(effect.name)}">
  <title>${escapeMarkup(effect.name)} — Motion Text Lab</title>
  <style>${baseStyles}\n${styles}</style>
</head>
<body>
  ${html}
</body>
</html>`
}

async function downloadCurrentEffect(effectIdOverride = null, sourceButton = downloadButton) {
  const registry = await registryRequest
  const state = getCurrentState()
  const effectId = effectIdOverride || state.effect
  const effect = registry.effects.find((item) => item.id === effectId)
  if (!effect) return
  const text = state.effect === effectId ? state.text : effect.sample
  const speed = Number(state.speed || 1)
  const styles = await stylesheetRequest
  const filename = effect.export.download_name.replace(/\.motion-effect\.json$/, '.html')
  downloadText(filename, standaloneHtml(effect, text || effect.sample, speed, styles))
  if (sourceButton) showButtonMessage(sourceButton, '已下載 HTML 素材')
}

if (downloadButton) downloadButton.dataset.originalLabel = '下載 HTML 素材 '
downloadButton?.addEventListener('click', () => {
  downloadCurrentEffect().catch((error) => {
    console.error(error)
    showButtonMessage(downloadButton, 'HTML 下載失敗')
  })
})

document.querySelectorAll('[data-download-effect]').forEach((button) => {
  button.dataset.originalLabel = '下載 HTML 素材 '
  button.addEventListener('click', () => {
    downloadCurrentEffect(button.dataset.downloadEffect, button).catch((error) => {
      console.error(error)
      showButtonMessage(button, '下載失敗')
    })
  })
})

const copyPromptButton = document.querySelector('#copy-prompt')
if (copyPromptButton) {
  copyPromptButton.dataset.originalLabel = '複製實作 Prompt '
  copyPromptButton.addEventListener('click', () => {
    copyAgentPrompt(getCurrentState().effect, copyPromptButton).catch((error) => {
      console.error(error)
      showButtonMessage(copyPromptButton, '複製失敗')
    })
  })
}

document.querySelectorAll('[data-copy-prompt]').forEach((button) => {
  button.dataset.originalLabel = '複製實作 Prompt '
  button.addEventListener('click', () => {
    copyAgentPrompt(button.dataset.copyPrompt, button).catch((error) => {
      console.error(error)
      showButtonMessage(button, '複製失敗')
    })
  })
})
