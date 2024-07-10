// Coordonnées et clé API pour Bordeaux
const longitude = 44.83; // Longitude de Bordeaux
const latitude = -0.57; // Latitude de Bordeaux
const api_key = '08cb792ca8906ae401dad848ccb6410d'; // Clé API (exemple fourni)

// Fonction pour effectuer une requête API et récupérer les données
const fetchData = async () => {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Fonction pour convertir Kelvin en Celsius
const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

// Fonction pour afficher les données sur la page HTML
const displayData = async () => {
  try {
    const data = await fetchData();
    const temperatureCelsius = kelvinToCelsius(data.main.temp);
    console.log(`Temperature in Bordeaux: ${temperatureCelsius}°C`);
    document.getElementById('paragraph').textContent = `Temperature in Bordeaux: ${temperatureCelsius}°C`;
  } catch (error) {
    console.error('Error fetching and displaying data:', error);
    document.getElementById('paragraph').textContent = 'Failed to fetch weather data. Please try again later.';
  }
};

// Exécuter displayData immédiatement après sa définition
displayData();

// Code pour gérer le bouton de suppression
const removeButton = document.getElementById('remove-paragraph-button');
removeButton.addEventListener('click', () => {
  const paragraphElement = document.getElementById('paragraph');
  if (paragraphElement) {
    paragraphElement.parentNode.removeChild(paragraphElement);
  }
});

module.exports = { fetchData, displayData };