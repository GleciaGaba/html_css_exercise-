console.log("Hello");

const country = "Brazil";

const continent = "South America";

let population = 200;

console.log(population / 2);

population++;
//console.log(population);
//
//console.log(population < 6);
//console.log(population < 33);

console.log(
  country +
    " is country from " +
    continent +
    " and the its population is " +
    population +
    " milions "
);
//console.log({ country });
//console.log("country:", country);
//console.log("continent", continent);
//console.log("population", population);
//console.log(population, country, continent);
/////////////exercice 1////////////

let isIsland = false;

let language = "français";

console.log(typeof isIsland);

/////////////exercice 2////////////

const num = 8;

//num = 11;

/////////////exercice 3////////////

//Basic Operators////

const now = 2024;
//console.log(now - 200);
//console.log(now + 200);
//console.log(3 ** 3);

let x = 10 + 5;
x++;
console.log(x);
x--;
console.log(x);

/////////////exercice 4////////////
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

function IMC(weight, height) {
  return weight / (height * height);
}

let imcMark = IMC(massMark, heightMark);

let imcJohn = IMC(massJohn, heightJohn);

//1. Affichez un log dans la console, indiquant à
//l'utilisateur qui a le plus grand IMC. Le message
//peut être soit :

console.log("Mark's imc:", imcMark);
console.log("John's imc:", imcJohn);

if (imcMark > imcJohn) {
  console.log(
    `L'IMC de Mark ${imcMark} est supérieur à celui de John ${imcJohn} !`
  );
} else {
  console.log(
    `L'IMC de John ${imcJohn} est supérieur à celui de Mark ${imcMark} !`
  );
}

//////////////////////////////////////////////////////////////////////////////

console.log(
  `${country} is in ${continent} an its population is ${population} milions`
);

if (population > 33) {
  console.log(`The population of ${country} is greater than average`);
} else {
  console.log(
    `The population of ${country} is ${
      population - 33
    } milions greater than everage`
  );
}

////////////////////////////////////////////////////////////////

//let numNeighbours = Number(
//  prompt("Combien de pays frontaliers a votre pays ?")
//);

//if (numNeighbours === 1) {
//console.log("Un seul pays frontalier! ");
//} else if (numNeighbours > 1) {
//console.log("Plus d'un pays frontalier! ");
//} else {
//console.log("Pas de frontières! ");
//}

if (language === "english" && population < 50 && isIsland === false) {
  console.log("Match");
} else {
  console.log("Does not match");
}
