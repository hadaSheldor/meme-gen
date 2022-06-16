"use strict"

const PAGES = ["meme-gallery", "meme-editor"]
let gCurrImg

function init() {
  renderGallery()
}

function renderGallery() {
  const imgs = getImgs()
  const elGallery = document.querySelector(".images-container")

  let strHTML = imgs.map((img) => {
    return `<div>
        <img class="gallery-img" src="${img.url}" onclick="onImgSelect(${img.id})">
    </div>`
  })
  elGallery.innerHTML = strHTML.join("")
}

function onMoveToPage(target) {
  //
  PAGES.forEach((page) => {
    document.querySelector(`.${page}`).classList.add("hidden")
  })
  // TODO: test if flex helper solves hidden class
  document.querySelector(`.${target}`).classList.remove("hidden")
}

function onImgSelect(idx) {
  let imgUrl = getImgById(idx).url
  setSelectedImg(idx)
  onMoveToPage("meme-editor")
  setImg(imgUrl)
}
