// Sélectionnez l'élément avec l'ID 'hover-area'
const hoverArea = document.getElementById('hover-area');

// Sélectionnez l'élément avec l'ID 'interaction-result'
const interactionResult = document.getElementById('interaction-result');

// Ajoutez un écouteur d'événement pour détecter le survol de la souris sur l'élément 'hover-area'
hoverArea.addEventListener('mouseover', () => {
  // Met à jour le contenu du paragraphe avec un feedback
  interactionResult.textContent = 'Tu survoles la zone !';
});

// Ajoutez un écouteur d'événement pour détecter lorsque la souris quitte l'élément 'hover-area'
hoverArea.addEventListener('mouseout', () => {
  // Réinitialise le contenu du paragraphe
  interactionResult.textContent = 'Hover over the area.';
});