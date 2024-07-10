// Fonction pour trouver la valeur maximale dans un tableau de nombres
export function findMaxValue(arr) {
    if (arr.length === 0) {
      console.log("Le tableau est vide.");
      return undefined;
    } else {
      let maxValue = Math.max(...arr);
      console.log("La valeur maximale est " + maxValue);
      return maxValue;
    }
  }
  
  // Cas de test
  findMaxValue([1, 2, 3, 4, 5]); // Doit afficher 5
  findMaxValue([-10, -5, -1]);   // Doit afficher -1
  findMaxValue([]);              // Doit afficher undefined
  
  // Fonction pour supprimer les valeurs en double dans un tableau
  export function removeDuplicates(arr) {
    let uniqueArray = [...new Set(arr)];
    console.log("Le tableau sans doublons est " + uniqueArray);
    return uniqueArray;
  }
  
  // Cas de test
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Affiche "Le tableau sans doublons est 1,2,3,4,5"
  removeDuplicates([1, 1, 1, 1]);          // Affiche "Le tableau sans doublons est 1"
  removeDuplicates([]);                    // Affiche "Le tableau sans doublons est "
  
  // Fonction pour vérifier si un tableau contient une valeur spécifique
  export function arrayIncludes(arr, value) {
    let result = arr.includes(value);
    console.log("Le tableau " + (result ? "contient" : "ne contient pas") + " la valeur " + value);
    return result;
  }
  
  // Cas de test
  arrayIncludes([1, 2, 3, 4, 5], 3); // Affiche "Le tableau contient la valeur 3"
  arrayIncludes([1, 2, 3, 4, 5], 6); // Affiche "Le tableau ne contient pas la valeur 6"
  arrayIncludes([], 3);              // Affiche "Le tableau ne contient pas la valeur 3"
    
  // Fonction pour trier un tableau de nombres par ordre croissant
  export function sortArrayAscending(arr) {
    let sortedArray = arr.slice().sort((a, b) => a - b);
    console.log("Le tableau trié est " + sortedArray);
    return sortedArray;
  }
  
  // Cas de test
  sortArrayAscending([5, 3, 8, 1, 2]); // Affiche "Le tableau trié est 1,2,3,5,8"
  sortArrayAscending([3, -1, 0, -5]);  // Affiche "Le tableau trié est -5,-1,0,3"
  sortArrayAscending([]);              // Affiche "Le tableau trié est "