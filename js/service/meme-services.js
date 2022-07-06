"use strict"

const STORAGE_KEY = "memeDB"
let gMemes = []
let gSavedMemes = []

function getMemes() {
  return gMemes
}

function getSavedMemes() {
  return gSavedMemes
}

function getLine() {
  return gMemes.lines[gMemes.selectedLineIdx]
}

function createMeme(imgId) {
  let meme = {
    selectedImgId: imgId,
    selectedLineIdx: 0,
    isSaved: false,
    lines: [
      {
        txt: "TOP - first line",
        align: "center",
        size: 50,
        font: "Impact",
        color: "#f8312f",
        stroke: "black",
        pos: { x: elCanvas.width / 2, y: 150 },
        isDrag: false,
      },
      {
        txt: "BUTTOM - second line",
        align: "center",
        size: 50,
        font: "Impact",
        color: "#f8312f",
        stroke: "black",
        pos: { x: 10, y: 50 },
        isDrag: false,
      },
    ],
  }
  gMemes = meme
  return meme
}

function setLineTxt(txt) {
  return (gMemes.lines[gMemes.selectedLineIdx].txt = txt)
}

function setTextColor(color) {
  return (gMemes.lines[gMemes.selectedLineIdx].color = color)
}

function setTextStrokeColor(color) {
  return (gMemes.lines[gMemes.selectedLineIdx].stroke = color)
}

function updateTextSize(diff) {
  // TODO: Add a condition for min/max txt size
  return (gMemes.lines[gMemes.selectedLineIdx].size += diff)
}

function setTextAlignment(align) {
  // TODO: Add toggle 'active' state
  // TODO: Read - txtMeasure() for drawing RACT + set alignments within canvas w/h
  return (gMemes.lines[gMemes.selectedLineIdx].align = align)
}

function removeLine() {
  let delLine = gMemes.lines[gMemes.selectedLineIdx]
  gMemes.lines.splice(delLine, 1)
}

function addLine() {
  let meme = getMemes()
  let newLine = {
    txt: "NEW LINE",
    align: "center",
    size: 50,
    font: "Impact",
    color: "#f8312f",
    stroke: "black",
    pos: { x: 250, y: 100 },
    isDrag: false,
  }
  meme.lines.push(newLine)
}

function addSticker(val) {
  let meme = getMemes()
  let sticker = {
    txt: val,
    align: "center",
    size: 50,
    font: "Impact",
    color: "#f8312f",
    stroke: "black",
    pos: {
      x: getRandomIntInclusive(50, 300),
      y: getRandomIntInclusive(300, 500),
    },
    isDrag: false,
  }
  meme.lines.push(sticker)
  console.log(gMemes)
  return sticker
}

function saveMeme() {
  gMemes.isSaved = true
  gSavedMemes.push(gMemes)
  saveToLocalStorage(STORAGE_KEY, gSavedMemes)
}

function isLineClicked(clickedPos) {
  const { pos } = gMemes.lines[gMemes.selectedLineIdx]
  console.log(gMemes.lines[gMemes.selectedLineIdx])
  const distance = Math.sqrt(
    (pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2
  )
  // console.log(distance, gMemes.lines[gMemes.selectedLineIdx].size)
  return distance <= gMemes.lines[gMemes.selectedLineIdx].size
}

function setLineDrag(isDrag) {
  gMemes.lines[gMemes.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
  gMemes.lines[gMemes.selectedLineIdx].pos.x += dx
  gMemes.lines[gMemes.selectedLineIdx].pos.y += dy
}

function _loadFromStorage() {
  return loadFromLocalStorage(STORAGE_KEY)
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
