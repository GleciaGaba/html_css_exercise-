//Il y a des élections dans notre pays ! Dans notre petite ville,
//il n'y a que 50 électeurs.
//Utilisez une boucle for pour simuler les 50 personnes qui
//votent, en loggant une string comme celle-ci dans la
//console (pour les numéros 1 à 50): : « Voter number 1 is
//currently voting ». (L'électeur numéro 1 est en train de
//voter).

for (let p = 1; p <= 50; p++) {
  console.log(`L'électeur numéro ${p} est en train de voter.`);
}

let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let elements = document.querySelectorAll("a");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "red";
}

//Reprenons le tableau "populations" de l’exercice précédent
//Utilisez une boucle for pour calculer un tableau appelé
//"percentages2" contenant les pourcentages de la
//population mondiale pour les 4 valeurs de population.
//Utilisez la fonction 'percentageOfWorld1' que vous avez
//créée plus tôt
//Confirmez que 'percentages2' contient exactement les
//mêmes valeurs que le tableau 'percentages' que nous
//avons créé manuellement dans le devoir précédent et
//réfléchissez à l'amélioration de cette solution

const populations = [62, 42, 89, 11];
let percentages2 = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

for (i = 0; i < 4; i++) {
  console.log(`______________First loop: ${i + 1} ____________________`);
  for (j = 0; j < 10; j++) {
    console.log(`Seconde loop: ${j + 1} ____________________`);
  }
}

//Stockez ce tableau de tableaux dans une variable appelée
//« listOfNeighbours » [['Canada', 'Mexico'], ['Spain'],
//['Norway', 'Sweden', 'Russia']] ;

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

//Loggez uniquement les pays voisins sur la console, un par
//un, et non les tableaux entiers. Loggez une string comme
//ça : « Neighbour : Canada » pour chaque pays.

for (i = 0; i < listOfNeighbours.length; i++) {
  for (j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour :${listOfNeighbours[i][j]}`);
  }
}
//Vous aurez besoin d'une boucle intérieure pour cela. C'est
//en fait un peu difficile, ne vous inquiétez pas si c'est trop
//difficile pour vous ! Mais vous pouvez quand même essayer
//de le faire �
