const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    validationMessage.textContent = 'Valid email!';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'Invalid email!';
    validationMessage.style.color = 'red';
  }
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});