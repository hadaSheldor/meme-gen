"use strict"

let gImages = [
  {
    id: 1,
    url: "./images/1.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 2,
    url: "./images/2.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 3,
    url: "./images/3.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 4,
    url: "./images/4.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 5,
    url: "./images/5.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 6,
    url: "./images/6.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 7,
    url: "./images/7.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 8,
    url: "./images/8.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 9,
    url: "./images/9.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 10,
    url: "./images/10.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 11,
    url: "./images/11.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 12,
    url: "./images/12.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 13,
    url: "./images/13.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 14,
    url: "./images/14.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 15,
    url: "./images/15.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 16,
    url: "./images/16.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 17,
    url: "./images/17.jpg",
    keyword: ["funny", "cat"],
  },
  {
    id: 18,
    url: "./images/18.jpg",
    keyword: ["funny", "cat"],
  },
]

function getImgs() {
  return gImages
}

function getImgById(imgId) {
  return gImages.find((img) => img.id === imgId)
}

function setSelectedImg(id) {
  let memes = getMemes()
  memes.selectedImgId = id
  createMeme(id)
  console.log(memes)
  renderMeme()
}
