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
  gMemes.push(meme)
  return meme
}
