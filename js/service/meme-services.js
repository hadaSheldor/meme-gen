"use strict"

let gMemes = []

function getMemes() {
  return gMemes
}

function drawText(txt, x, y) {
  console.log(txt)
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
        color: "white",
      },
      {
        txt: "BUTTOM - type second line",
        align: "center",
        size: 40,
        stroke: "black",
        color: "white",
      },
    ],
  }
  gMemes = meme
  drawText(gMemes.lines[0].txt)
  return meme
}
