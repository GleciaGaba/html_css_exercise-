console.log("Hello");

// Données de base
const country = "Brazil";
const continent = "South America";
let population = 200;

// Affiche la population initiale et effectue des calculs simples
function displayPopulationStats() {
  console.log(population / 2);
  population++;
  console.log(population);
  console.log(
    `${country} is a country from ${continent}, and its population is ${population} millions`
  );
}

displayPopulationStats();

// Vérification des conditions basiques
function checkPopulationAverage() {
  if (population > 33) {
    console.log(`The population of ${country} is greater than average`);
  } else {
    console.log(
      `The population of ${country} is ${
        33 - population
      } millions below average`
    );
  }
}

checkPopulationAverage();

// Définition des variables pour exercice 1
let isIsland = false;
let language = "français";

// Vérification du type des variables
function checkTypes() {
  console.log(typeof isIsland);
}

checkTypes();

// Exercice 3 : Opérateurs basiques
const now = 2024;

function basicOperators() {
  let x = 10 + 5;
  x++;
  console.log(x);
  x--;
  console.log(x);
}

basicOperators();

// Calcul de l'IMC (indice de masse corporelle)
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

function calculateIMC(weight, height) {
  return weight / (height * height);
}

let imcMark = calculateIMC(massMark, heightMark);
let imcJohn = calculateIMC(massJohn, heightJohn);

// Comparaison des IMC
function compareIMC(imcMark, imcJohn) {
  console.log("Mark's IMC:", imcMark);
  console.log("John's IMC:", imcJohn);

  if (imcMark > imcJohn) {
    console.log(
      `L'IMC de Mark (${imcMark}) est supérieur à celui de John (${imcJohn}) !`
    );
  } else {
    console.log(
      `L'IMC de John (${imcJohn}) est supérieur à celui de Mark (${imcMark}) !`
    );
  }
}

compareIMC(imcMark, imcJohn);

// Exercice conditionnel basé sur la langue et la population
function matchCountryCriteria(language, population, isIsland) {
  if (language === "english" && population < 50 && isIsland === false) {
    console.log("Match");
  } else {
    console.log("Does not match");
  }
}

matchCountryCriteria(language, population, isIsland);

// Ajout d'une fonction pour manipuler un formulaire avec la population
function updatePopulationFromForm(
  countryInput,
  continentInput,
  populationInput
) {
  let populationValue = parseInt(populationInput);
  populationValue++;
  let message = `${countryInput} is in ${continentInput} and its population is ${populationValue} millions.`;

  if (populationValue > 33) {
    message += ` The population of ${countryInput} is greater than average.`;
  } else {
    message += ` The population of ${countryInput} is ${
      33 - populationValue
    } millions below average.`;
  }

  console.log(message);
}

// Exemple d'utilisation d'une fonction depuis un formulaire (associé à l'HTML)
