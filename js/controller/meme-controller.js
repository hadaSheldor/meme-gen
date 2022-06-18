"use strict"

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ["touchstart", "touchmove", "touchend"]

function renderEditor() {
  gElCanvas = document.querySelector("#meme")
  gCtx = gElCanvas.getContext("2d")
  addEventsListeners()
}

function renderSaved() {
  const savedMemes = _loadFromStorage()
  const elGallery = document.querySelector(".images-container")

  let strHTML = savedMemes.map((meme) => {
    const img = getImgById(meme.selectedImgId)
    return `<div>
        <img class="gallery-img" src="${img.url}" onclick="onImgSelect(${img.id})">
    </div>`
  })
  elGallery.innerHTML = strHTML.join("")
}

function renderMeme() {
  let meme = getMemes()
  let imgUrl = getCurrImg().url

  const img = new Image()
  img.src = imgUrl
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.forEach((line) => {
      gCtx.align = line.aline
      if (line.align === "right") {
        line.pos.x += 120
      } else if (line.align === "left") {
        line.pos.x -= 120
      } else if (line.align === "center") {
        line.pos.x = gElCanvas.width / 2
      }

      gCtx.font = `${line.size}px ${line.font}`
      gCtx.stroke = line.stroke
      gCtx.color = line.color

      setText(line.txt, line.pos)
    })
  }
}

function setText(txt, pos) {
  let meme = getMemes()
  gCtx.lineWidth = 5
  gCtx.size = meme.lines[meme.selectedLineIdx].size
  gCtx.strokeStyle = meme.lines[meme.selectedLineIdx].stroke
  gCtx.fillStyle = meme.lines[meme.selectedLineIdx].color
  gCtx.fillText(txt, pos.x, pos.y)
  gCtx.strokeText(txt, pos.x, pos.y)
}

function onUpdateTxt(val) {
  // TODO: Verify that there's any line in MEMEobj
  setLineTxt(val)
  renderMeme()
}

function onChangeColor(color) {
  setTextColor(color)
  renderMeme()
}

function onChangeStrokeColor(color) {
  setTextStrokeColor(color)
  renderMeme()
}

function onChangeTxtSize(diff) {
  updateTextSize(diff)
  renderMeme()
}

function onChangeFont() {
  toggleFonts()
  renderMeme()
}

function onChangeTextAlignment(val) {
  setTextAlignment(val)
  renderMeme()
}

function onRemoveLine() {
  removeLine()
  renderMeme()
}

function onSaveMeme() {
  saveMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

function onSticker(val) {
  addSticker(val)
  renderMeme()
}

// TODO: move FNs to util
function addEventsListeners() {
  addMouseListeners()
  addTouchListeners()
}

function addMouseListeners() {
  gElCanvas.addEventListener("mousemove", onMove)
  gElCanvas.addEventListener("mousedown", onDown)
  gElCanvas.addEventListener("mouseup", onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener("touchmove", onMove)
  gElCanvas.addEventListener("touchstart", onDown)
  gElCanvas.addEventListener("touchend", onUp)
}

function onDown(ev) {
  const pos = getEvPos(ev)
  if (!isLineClicked(pos)) return
  setLineDrag(true)
  gStartPos = pos
  document.body.style.cursor = "grabbing"
}

function onMove(ev) {
  let line = getLine()
  if (line.isDrag) {
    console.log(line)
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderMeme()
  }
}

function onUp() {
  setLineDrag(false)
  document.body.style.cursor = "grab"
}

function getEvPos(ev) {
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}
