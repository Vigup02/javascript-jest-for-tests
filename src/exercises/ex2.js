const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = 'Button was clicked!';
}

clickMeButton.addEventListener('click', showMessage);