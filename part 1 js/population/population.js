//Si la population de votre pays est plus grande que 33
//millions, utilisez une ternary operator pour log une string
//comme celle-ci « Portugal’s population is above
//average. » (La population du Portugal est au dessus de la
//moyenne.) Sinon loggez « Portugal’s population is below
//average. » (La population du Portugal est en dessous de la
//moyenne.) (Notez qu’un seul mot change dans cette
//phrase).
//Après avoir regardé le résultat, change la population à 13
//millions et ensuite à 130 et observez le résultat. Remettez
//ensuite les valeur de base à la variable.

country = prompt("What's your country? ");
population = prompt("What the population of your country? ");

console.log(
  `${country}'spopulation is ${population > 33 ? "above" : "below"} avarege`
);
