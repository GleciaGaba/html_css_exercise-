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

const percentageOfWorld1 = function (population) {
  let percent = (population / 7900) * 100;
  let result = Math.ceil(percent);
  return result;
};

console.log(
  percentageOfWorld1(200),
  percentageOfWorld1(65),
  percentageOfWorld1(11)
);
