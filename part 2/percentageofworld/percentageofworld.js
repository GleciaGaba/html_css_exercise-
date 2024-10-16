//La population mondiale est de 7900 millions de personnes. Créez une function
//declaration nommée « percentageOfWorld1 » qui recevra en paramètre
//« population » et qui retournera la valeur en pourcentage de la valeur entrée
//dans population par rapport à la population mondiale. Par exemple, China has
//1441 million people, so it's about 18.2% of the world population (la Chine a
//1441 millions d’habitants donc c’est 18.2% de la population mondiale).
// Pour calculer le pourcentage, divisez la valeur « population » par 7900 et
//multipliez par 100.
//Appelez « percentageOfWorld1 » pour 3 valeurs de population de pays de
//votre choix, stockez les résultats dans des variables et loggez-les dans la
//console.
//Créez une function expression qui fait la même chose et qui sera nommée
//« percentageOfWorld2 », appelez également cette fonction avec 3 valeurs de
//population de pays de votre choix (Vous pouvez prendre les même que pour
//la fonction précédente).

/**
 * It returns pourcentagen of mondial population
 * @param {Number} population
 * @returns Number
 */
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

console.log(
  percentageOfWorld1(200),
  percentageOfWorld1(65),
  percentageOfWorld1(11)
);

//Créez une fonction nommée « describePopulation ».
//Utilisez la fonction que vous préférerez. Cette fonction a 2
//paramètres « country » et « population », et elle retourne
//une string comme ceci : « China has 1441 million people,
//so it's about 18.2% of the world population. »
//Pour calculer le pourcentage utilisez la fonction
//« percentageOfWorld1 » crée auparavant.
//Appelez « describePopulation » avec les données de 3 pays
//de votre choix.

const describePopulation = (country, population) => {
  const percent = percentageOfWorld1(population);
  return `${country} has ${population} million people, so it's about ${percent}% of the world population.`;
};

console.log(describePopulation("Brazil", 200));
