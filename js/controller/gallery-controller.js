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

function onImgSelect(idx) {
  gCurrImg = getImgById(idx)
  setSelectedImg(idx)
  renderMeme()
  onMoveToPage("meme-editor")
}

function onMoveToPage(target) {
  PAGES.forEach((page) => {
    document.querySelector(`.${page}`).classList.add("hidden")
  })
  document.querySelector(`.${target}`).classList.remove("hidden")
}

function toggleMenu() {
  document.body.classList.toggle("menu-open")
}

function getCurrImg() {
  return gCurrImg
}
