//🚀 À vos codes !
//
//Steven souhaite que vous amélioriez son calculateur de pourboire en utilisant les mêmes règles qu'auparavant :
//donner un pourboire de 15 % de la facture si la valeur de la facture est comprise entre 50 et 300, et si la valeur est différente,
// le pourboire est de 20 %.

//
//Vos tâches :
//
//1. Écrivez une fonction "calcTip" qui prend n'importe quelle valeur de facture en entrée et renvoie le pourboire correspondant,

const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

let calc = calcTip(100);
console.log(calc);

// calculé selon les règles ci-dessus (vous pouvez consulter le code du premier défi du calculateur de pourboire si vous en avez
//besoin). Utilisez le type de fonction que vous préférez. Testez la fonction en utilisant une valeur de facture de 100.
//
//2. Et maintenant, utilisons des tableaux ! Créez donc un tableau appelé "bills" contenant les données de test ci-dessous.

let bills = [125, 555, 44];

//3. Créez un tableau appelé "tips" contenant la valeur du pourboire pour chaque facture, calculée à partir de la fonction
//que vous avez créée précédemment.

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

//# BONUS :
//
//Créez un tableau "totals" contenant les valeurs totales, c'est-à-dire la facture + le pourboire.

let total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(total);

//
//# DONNÉES DE TEST :
//
//125, 555 et 44.
