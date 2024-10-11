//Écrivez une fonction nommée « describeCountry » qui
//prends 3 paramètres « country », « population » et
//« capitalCity ». La fonction doit retourné une string à ce
//format : « Finland has 6 million people and its capital city is
//Helsinki ». (La Finlande a 6 millions d’habitants et sa
//capitale est Helsinki)
//Appelez la fonction 3 fois avec 3 arguments différents pour
//chaque appel. Stockez les valeurs retournées dans 3
//variables différentes et loggez les dans la cons

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let france = describeCountry("France", 65, "Paris");
let brazil = describeCountry("Brazil", 200, "Brasilia");
let portugal = describeCountry("Portugal", 11, "Lisboa");

console.log(france);
console.log(brazil);
console.log(portugal);
