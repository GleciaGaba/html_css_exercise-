//Il y a deux équipes de gymnastique : les Dauphins et les Koalas. Elles se sont affrontées trois fois.
//Le gagnant avec le score moyen le plus élevé remporte un trophée !
//
//🚀 À vos codes !
//
//Vos tâches :
//
//1. Calculez le score moyen pour chaque équipe en utilisant les données de test fournies ci-dessous.
//Le score moyen des Dauphins doit être assigné à la variable scoreDolphins, et le score moyen des Koalas doit être assigné à la variable scoreKoalas.
//
//2. Comparez les scores moyens des équipes pour déterminer le gagnant de la compétition, et affichez dans la console :
//
//"Dolphins won the trophy" en cas de victoire des Dauphins,
//ou "Les équipes sont à égalité" en cas de match nul.
//
//# DONNÉES DE TEST :
//
//Les Dauphins ont obtenu les scores suivants : 96, 108 et 89. Les Koalas ont obtenu les scores suivants : 88, 91 et 110.

//Calculez le score moyen pour chaque équipe
//Le score moyen des Dauphins doit être assigné à la variable scoreDolphins
//le score moyen des Koalas doit être assigné à la variable
//Comparez les scores moyens des équipes pour déterminer le gagnant de la compétition

function match(first, second, third) {
  let sum = first + second + third;
  let div = sum / 3;
  return div;
}

let scoreKoalas = match(100, 30, 80);
let scoreDolphins = match(120, 60, 90);

if (scoreDolphins > scoreKoalas) {
  console.log("scoreDolphins are the winners!");
} else {
  console.log("scoreKoalas are the winners!");
}
