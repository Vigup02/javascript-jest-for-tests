// script.js
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  element.classList.add('new-class');
  }

addButton.addEventListener('click', addClassToElement);



