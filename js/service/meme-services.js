"use strict"

let gMemes = []

function getMemes() {
  return gMemes
}

function createMeme(imgId) {
  let meme = {
    selectedImgId: imgId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: "TOP - type first line",
        align: "center",
        size: 40,
        stroke: "black",
        color: "black",
        pos: { x: 100, y: 100 },
      },
      {
        txt: "BUTTOM - type second line",
        align: "center",
        size: 40,
        stroke: "blcak",
        color: "black",
        pos: { x: 100, y: 300 },
      },
    ],
  }
  gMemes = meme
  return meme
}

function setLinePos() {
  let memes = getMemes()
  memes.lines[memes.selectedLineIdx].pos = {
    x: gElCanvas.width / 2,
    y: 70,
  }
  renderCanvas()
}

function setLineTxt(txt) {
  gMemes.lines[gMemes.selectedLineIdx].txt = txt
  renderCanvas()
}

function setTextColor(color) {
  console.log(color)
  gMemes.lines[gMemes.selectedLineIdx].color = color
  gMemes.lines[gMemes.selectedLineIdx].stroke = color
  renderCanvas()
}

function increaseTextSize() {
  gMemes.lines[gMemes.selectedLineIdx].size += 10
  renderCanvas()
}

function decreaseTextSize() {
  gMemes.lines[gMemes.selectedLineIdx].size += 10
  renderCanvas()
}
