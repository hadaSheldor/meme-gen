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
        pos: { x: 100, y: 100 },
      },
    ],
  }
  gMemes = meme
  return meme
}

function setLinePos() {
  let memes = getMemes()
  memes.lines[0].pos = {
    x: gElCanvas.width / 2,
    y: 70,
  }
  memes.lines[1].pos = {
    x: gElCanvas.width / 2,
    y: 70,
  }
  renderCanvas()
}

function setLineTxt(txt) {
  gMemes.lines[0].txt = txt
  renderCanvas()
}

function setTextColor(color) {
  console.log(color)
  gMemes.lines[0].color = color
  gMemes.lines[0].stroke = color
  console.log(gMemes)
  renderCanvas()
}
