// ex1.test.js
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
  
  // Charger le script ex1.js après avoir initialisé le DOM
  const scriptContent = fs.readFileSync(path.resolve(__dirname, './ex1.js'), 'utf8');
  const scriptElement = document.createElement("script");
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);
});

// Test pour vérifier que la classe est ajoutée
test('adds new-class to element on button click', () => {
  const addButton = document.getElementById('add-class-button');
  const element = document.getElementById('element');

  // Simuler un clic sur le bouton
  addButton.click();

  // Vérifier que la classe 'new-class' est ajoutée
  expect(element.classList.contains('new-class')).toBe(true);
});