const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    // Assurez-vous que le chemin est correct selon la structure de votre projet
    require('./ex5.js');
});

// Test pour vérifier que le message est mis à jour
test('updates message on hover area', () => {
  const hoverArea = document.getElementById('hover-area');
  const interactionResult = document.getElementById('interaction-result');

  // Simuler un événement de survol
  const event = new window.MouseEvent('mouseover');
  hoverArea.dispatchEvent(event);

  // Vérifier si le texte a été mis à jour correctement
  expect(interactionResult.textContent).toBe('Tu survoles la zone !');
});