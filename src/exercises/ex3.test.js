// ex3.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Charger l'HTML
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// Initialiser le DOM
let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  document = dom.window.document;
  
  // Charger le script ex3.js après avoir initialisé le DOM
  const scriptContent = fs.readFileSync(path.resolve(__dirname, './ex3.js'), 'utf8');
  const scriptElement = document.createElement("script");
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);
});

// Test pour vérifier la validation des emails
test('displays "Valid email!" message for a valid email', () => {
  const emailInput = document.getElementById('email-input');
  const emailForm = document.getElementById('email-form');
  const validationMessage = document.getElementById('validation-message');

  emailInput.value = 'test@example.com';

  // Créer un événement de soumission en utilisant l'interface d'événements de JSDOM
  const event = new dom.window.Event('submit', {
    bubbles: true,
    cancelable: true
  });

  // Simuler la soumission du formulaire
  emailForm.dispatchEvent(event);

  // Vérifier que le message de validation est affiché correctement
  expect(validationMessage.textContent).toBe('Valid email!');
  expect(validationMessage.style.color).toBe('green');
});

test('displays "Invalid email!" message for an invalid email', () => {
  const emailInput = document.getElementById('email-input');
  const emailForm = document.getElementById('email-form');
  const validationMessage = document.getElementById('validation-message');

  emailInput.value = 'invalid-email';

  // Créer un événement de soumission en utilisant l'interface d'événements de JSDOM
  const event = new dom.window.Event('submit', {
    bubbles: true,
    cancelable: true
  });

  // Simuler la soumission du formulaire
  emailForm.dispatchEvent(event);

  // Vérifier que le message de validation est affiché correctement
  expect(validationMessage.textContent).toBe('Invalid email!');
  expect(validationMessage.style.color).toBe('red');
});