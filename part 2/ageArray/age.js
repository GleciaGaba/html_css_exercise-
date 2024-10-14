//Créez un tableau contenant 4 valeurs de population de 4
//pays de votre choix.
//Vous pouvez utiliser les valeurs que
//vous avez utilisées précédemment. Stockez ce tableau dans
//une variable appelée « populations »

let populations = [65, 11, 200, 800];

//Loggez dans la console si le tableau a 4 éléments ou non
//(vrai ou faux).

if (populations.length == 4) {
  console.log("vrai");
} else {
  console.log("faux");
}

//Créez un tableau appelé "pourcentages" contenant les
//pourcentages de la population mondiale pour ces 4 valeurs
//de population.

let pourcentages = [65, 11, 200, 800];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const percent = [
  percentageOfWorld1(pourcentages[0]),
  percentageOfWorld1(pourcentages[1]),
  percentageOfWorld1(pourcentages[2]),
  percentageOfWorld1(pourcentages[3]),
];

console.log(percent);

//Utilisez la fonction "percentageOfWorld1"
//que vous avez créée précédemment pour calculer les 4
//pourcentages.
