//Créez un objet appelé "myCountry" pour un pays de votre
//choix, contenant les propriétés "country", "capital",
//"language", "population" et "neighbours" (un tableau
//comme celui que nous avons utilisé dans les devoirs
//précédents).

//1. Ajoutez une méthode appelée « describe » à l’objet
//« myCountry ». Cette méthode loggera une chaîne dans la
//console, de la même manière que la chaîne loggée dans le
//devoir précédent, mais cette fois-ci en utilisant le mot-clé "this".
//2. Appelez la méthode "describe".
//3. Ajoutez une méthode appelée "checkIsland" à l'objet
//"myCountry".
//Cette méthode définira une nouvelle propriété sur l'objet,
//appelée "isIsland". "isIsland" sera vrai s'il n'y a pas de pays
//voisins, et faux s'il y en a. Utilisez l'opérateur ternaire pour
//définir la propriété.

let myCountry = {
  country: "Brésil",
  capital: "Brasilia",
  language: "Portugais",
  population: 200,
  neighbours: [
    "Paraguay",
    "Uruguay",
    "Argentine",
    "Suriname",
    "Venezuela",
    "Colombie",
    "Guyana",
    "Pérou",
    "Bolivie",
    "Guyane",
  ],
  describe: function () {
    return `${this.country} has ${this.population} millions of ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

myCountry.continent = "Sud d'Amérique";

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//En utilisant l'objet de l'exercice précédent, loggez dans la
//console une string comme ça : « Finland has 6 million
//finnish-speaking people, 3 neighbouring countries and a
//capital called Helsinki » (La Finlande compte 6 millions de
//finnophones, 3 pays voisins et une capitale appelée
//Helsinki).

//console.log(`${myCountry.country} has ${myCountry.population} million
//${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a
//capital called ${myCountry.capital} `);

//Augmentez la population du pays de deux millions en
//utilisant la notation en points, puis diminuez-la de deux
//millions en utilisant la notation entre crochets.

myCountry.population += 2;
myCountry["population"] -= 2;
