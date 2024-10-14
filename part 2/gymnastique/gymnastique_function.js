//🚀 À vos codes !
//
//De retour aux deux équipes de gymnastique, les Dauphins et les Koalas !
//Il existe une nouvelle discipline de gymnastique qui fonctionne différemment.
//
//Chaque équipe participe 3 fois, puis la moyenne des 3 scores est calculée (donc un score moyen par équipe).
//
//Une équipe ne gagne que si elle a au moins le double du score moyen de l'autre équipe. Sinon, aucune équipe ne gagne !
//
//Vos tâches :
//
//1. Créez une fonction fléchée "calcAverage" pour calculer la moyenne de 3 scores.
//Cette fonction doit avoir trois paramètres et retourner un seul nombre (le score moyen).
//
//2. Créez deux nouvelles variables - "scoreDolphins" et "scoreKoalas",
//et assignez-leur la valeur renvoyée par la fonction "calcAverage" (vous devrez appeler cette fonction et passer les scores en arguments).
//
//3. Créez une fonction "checkWinner" qui prend le score moyen de chaque équipe en tant que paramètres (avgDolphins et avgKoalas),
//puis affiche le gagnant dans la console, avec les points de victoire, selon la règle ci-dessus.
//Exemple : Les Koalas gagnent (30 vs. 13) (utilisez avgDolphins et avgKoalas au lieu de valeurs codées en dur).
//
//4. Utilisez la fonction "checkWinner" pour déterminer le gagnant pour les DONNÉES 1 et les DONNÉES 2.
//
//5. Ignorez les matchs nuls cette fois-ci. Au lieu de cela, affichez "Aucune équipe ne gagne..." dans la console s'il n'y a pas de gagnant.
//
//# DONNÉES DE TEST 1 :
//
//Les Dauphins ont obtenu les scores 44, 23 et 71. Les Koalas ont obtenu les scores 65, 54 et 49.
//
//# DONNÉES DE TEST 2 :
//
//Les Dauphins ont obtenu les scores 85, 54 et 41. Les Koalas ont obtenu les scores 23, 34 et 27.

//Créez une fonction fléchée "calcAverage" pour calculer la moyenne de 3 scores.
const calcAverage = (first, second, third) => {
  let sum = first + second + third;
  let div = Math.ceil(sum / 3);
  return div;
};

//Créez deux nouvelles variables - "scoreDolphins" et "scoreKoalas" &&
//assignez-leur la valeur renvoyée par la fonction "calcAverage"

let scoreDolphins = calcAverage(10, 10, 10);

let scoreKoalas = calcAverage(20, 20, 20);

//Créez une fonction "checkWinner" qui prend le score moyen de chaque équipe en tant que paramètres

function checkWinner(avgDolphins, avgKoalas) {
  //puis affiche le gagnant dans la console, avec les points de victoire

  if (avgDolphins >= avgKoalas * 2) {
    return `Les Dolphins gagnent (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Les Koalas gagnent (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `Aucune équipe ne gagne...`;
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
