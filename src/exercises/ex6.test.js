// Importe les fonctions findMaxValue, removeDuplicates, arrayIncludes, et sortArrayAscending depuis le fichier ex6.js.
const { findMaxValue, removeDuplicates, arrayIncludes, sortArrayAscending } = require('./ex6');

// Tests pour findMaxValue
describe('findMaxValue function', () => {
  // Test pour vérifier que la fonction retourne la valeur maximale dans le tableau
  it('should return the maximum value in the array', () => {
    expect(findMaxValue([1, 2, 3, 4, 5])).toBe(5);
    expect(findMaxValue([-10, -5, -1])).toBe(-1);
  });

  // Test pour vérifier que la fonction retourne undefined pour un tableau vide
  it('should return undefined for an empty array', () => {
    expect(findMaxValue([])).toBeUndefined();
  });

  // Test pour vérifier que la fonction loge les messages corrects
  it('should log correct messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    findMaxValue([1, 2, 3, 4, 5]);
    expect(consoleSpy).toHaveBeenCalledWith('La valeur maximale est 5');

    findMaxValue([]);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau est vide.');

    consoleSpy.mockRestore();
  });
});

// Tests pour removeDuplicates
describe('removeDuplicates function', () => {
  // Test pour vérifier que la fonction supprime les valeurs en double du tableau
  it('should remove duplicate values from the array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(removeDuplicates([1, 1, 1, 1])).toEqual([1]);
  });

  // Test pour vérifier que la fonction gère correctement un tableau vide
  it('should handle an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  // Test pour vérifier que la fonction loge les messages corrects
  it('should log correct messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau sans doublons est 1,2,3,4,5');

    removeDuplicates([]);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau sans doublons est ');

    consoleSpy.mockRestore();
  });
});

// Tests pour arrayIncludes
describe('arrayIncludes function', () => {
  // Test pour vérifier si la fonction vérifie si le tableau contient une valeur spécifique
  it('should check if the array includes a specific value', () => {
    expect(arrayIncludes([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(arrayIncludes([1, 2, 3, 4, 5], 6)).toBe(false);
  });

  // Test pour vérifier que la fonction gère correctement un tableau vide
  it('should handle an empty array', () => {
    expect(arrayIncludes([], 3)).toBe(false);
  });

  // Test pour vérifier que la fonction loge les messages corrects
  it('should log correct messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    arrayIncludes([1, 2, 3, 4, 5], 3);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau contient la valeur 3');

    arrayIncludes([1, 2, 3, 4, 5], 6);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau ne contient pas la valeur 6');

    consoleSpy.mockRestore();
  });
});

// Tests pour sortArrayAscending
describe('sortArrayAscending function', () => {
  // Test pour vérifier si la fonction trie le tableau de nombres par ordre croissant
  it('should sort the array of numbers in ascending order', () => {
    expect(sortArrayAscending([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    expect(sortArrayAscending([3, -1, 0, -5])).toEqual([-5, -1, 0, 3]);
  });

  // Test pour vérifier que la fonction gère correctement un tableau vide
  it('should handle an empty array', () => {
    expect(sortArrayAscending([])).toEqual([]);
  });

  // Test pour vérifier que la fonction loge les messages corrects
  it('should log correct messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    sortArrayAscending([5, 3, 8, 1, 2]);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau trié est 1,2,3,5,8');

    sortArrayAscending([]);
    expect(consoleSpy).toHaveBeenCalledWith('Le tableau trié est ');

    consoleSpy.mockRestore();
  });
});