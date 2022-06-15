"use strict"

let elCanvas
let gCtx

function renderMeme() {
  elCanvas = document.querySelector("#meme")
  gCtx = elCanvas.getContext("2d")
}

function setImg(url) {
  let img = new Image()
  img.src = url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
    console.log(elCanvas.width, elCanvas.height)
  }
}
