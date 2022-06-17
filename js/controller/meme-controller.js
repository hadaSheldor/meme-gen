"use strict"

let gElCanvas = document.querySelector("#meme")
let gCtx

function renderCanvas() {
  gCtx = gElCanvas.getContext("2d")
}

function setImg(url) {
  let img = new Image()
  img.src = url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
  setLinePos()
}

function setText(meme) {
  let txt = meme.lines[meme.selectedLineIdx].txt
  let posX = meme.lines[meme.selectedLineIdx].pos.x
  let posY = meme.lines[meme.selectedLineIdx].pos.y

  gCtx.lineWidth = 2
  gCtx.strokeStyle = meme.lines[meme.selectedLineIdx].stroke
  gCtx.fillStyle = meme.lines[meme.selectedLineIdx].color
  gCtx.font = "40px Arial"
  gCtx.fillText(txt, posX, posY)
  gCtx.strokeText(txt, posX, posY)
}

function onUpdateTxt(val) {
  setLineTxt(val)
  setText(gMemes)
  console.log(val)
}

function onChangeColor(color) {
  setTextColor(color)
}

// function drawRect(x, y, xEnd, yEnd, color) {
//   gCtx.beginPath()
//   gCtx.rect(x, y, xEnd, yEnd)
//   gCtx.strokeStyle = color
//   gCtx.stroke()
//   gCtx.closePath()
// }
