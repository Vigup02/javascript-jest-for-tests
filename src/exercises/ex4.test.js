const fs = require('fs'); // Importation du module fs pour lire les fichiers
const path = require('path'); // Importation du module path pour gérer et transformer les chemins de fichiers
const { JSDOM } = require('jsdom'); // Importation de JSDOM pour simuler un environnement DOM dans Node.js

// Configurer jsdom pour simuler un environnement de navigateur
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8'); // Lecture du fichier HTML
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" }); // Création d'un nouvel objet JSDOM avec les options nécessaires
global.window = dom.window; // Définir global.window pour qu'il soit accessible globalement
global.document = dom.window.document; // Définir global.document pour qu'il soit accessible globalement
global.navigator = {
  userAgent: 'node.js',
}; // Définir global.navigator pour simuler l'objet navigator du navigateur

// Importer les fonctions à tester depuis ex4.js
describe('fetchData function', () => {
    beforeEach(() => {
      global.fetch = fetch;
    });
  
    it('should fetch weather data correctly', async () => {
      const mockResponse = {
        main: {
          temp: 300, // Simulated Kelvin temperature for testing
        },
      };
  
      global.fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });
  
      const data = await fetchData();
  
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(data.main.temp).toEqual(mockResponse.main.temp);
    });
  
    it('should handle fetch errors', async () => {
      global.fetch.mockRejectedValue(new Error('Network error'));
  
      await expect(fetchData()).rejects.toThrow('Network error');
    });
  });
  
  describe('displayData function', () => {
    let paragraphElement;
  
    beforeEach(() => {
      paragraphElement = document.createElement('p');
      paragraphElement.id = 'paragraph';
      document.body.appendChild(paragraphElement);
    });
  
    afterEach(() => {
      document.body.removeChild(paragraphElement);
    });
  
    it('should display temperature correctly', async () => {
      const mockResponse = {
        main: {
          temp: 300, // Simulated Kelvin temperature for testing
        },
      };
  
      global.fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });
  
      await displayData();
  
      const temperatureCelsius = ((300 - 273.15).toFixed(2)) + "°C";
  
      expect(paragraphElement.textContent).toBe(`Temperature in Bordeaux: ${temperatureCelsius}`);
    });
  
    it('should handle fetch error while displaying data', async () => {
      global.fetch.mockRejectedValue(new Error('Network error'));
  
      await displayData();
  
      expect(paragraphElement.textContent).toBe('Failed to fetch weather data. Please try again later.');
    });
  });