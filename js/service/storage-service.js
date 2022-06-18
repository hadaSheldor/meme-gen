"use strict"

function saveToLocalStorage(key, val) {
  return localStorage.setItem(key, JSON.stringify(val))
}

function loadFromLocalStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}
