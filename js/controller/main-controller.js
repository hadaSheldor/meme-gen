"use strict"

function init() {
  renderGallery()
}

function renderGallery() {
  const imgs = getImgs()
  const elGallery = document.querySelector(".images-container")

  let strHTML = imgs.map((img) => {
    return `<div>
        <img class="gallery-img" src="${img.url}">
    </div>`
  })
  elGallery.innerHTML = strHTML.join("")
}
