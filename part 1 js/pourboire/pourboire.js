//# Fundamentals - Part1 #4
//
//🚀 À vos codes !
//
//Steven a besoin d'un calculateur de pourboire très simple pour chaque fois qu'il va manger au restaurant.
//Dans son pays, il est habituel de donner un pourboire de 15 % si la valeur de la facture est entre 50 et 300.
//Si la valeur est différente, le pourboire est de 20 %.
//
//Vos tâches :
//
//1. Calculez le pourboire en fonction de la valeur de la facture. Créez une variable appelée "tip" pour cela.
//Il n'est pas autorisé d'utiliser une déclaration "if...else" (si cela vous est plus facile,
//vous pouvez commencer par une déclaration "if...else", puis essayer de la convertir en opérateur ternaire).
//
//2. Affichez une chaîne de caractères dans la console contenant la valeur de la facture,
//le pourboire et la valeur finale (facture + pourboire).
//
//# Exemple :
//
//La facture était de 275, le pourboire était de 41,25, et la valeur totale était de 316,25.
//(The bill was 275, the tip was 41.25, and the total value was 316.25.)
//
//# Remarque :
//
//Utilisez les valeurs des variables de facture et de pourboire pour construire cette chaîne de caractères.
//Ne les encodez pas en dur 🙂
//
//# DONNÉES DE TEST :
//
//Testez avec différentes valeurs de facture : 275, 40 et 430.

let bill = Number(prompt("Type your bill coust: "));
let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `Your bill is ${bill} dollars, your tip cost $${tip} and the total price is ${
    bill + tip
  }`
);

//if(bill > 50 && bill < 300){
//    let tip = bill * 0.15
//    console.log(`Your bill is ${bill} dollars, your must to pay 15% of tip,${tip}`)
//}
//else{
//    let tip = bill * 0.2
//    console.log(`Your bill is ${bill} dollars, your must to pay 15% of tip,${tip}`)
//}
