//# Fundamentals - Part2 #3
//
//🚀 À vos codes !
//
//Revenons à la comparaison des IMC de Mark et John !
//
//Cette fois-ci, utilisons des objets pour implémenter les calculs !
//Rappelez-vous : IMC = masse / (taille \* taille) (masse en kg et taille en mètres).
//
//Vos tâches :
//
//1. Pour chacun d'eux, créez un objet avec des propriétés pour leur nom complet,
//leur masse et leur taille (Mark Miller et John Smith). Nommez ces objets "mark" et "john",
//et leurs propriétés exactement "fullName", "mass" et "height".

//2. Créez une méthode "calcBMI" sur chaque objet pour calculer l'IMC (la même méthode sur les deux objets).
//Attribuez la valeur de l'IMC à une propriété, et renvoyez-la également depuis la méthode.

//
//3. Affichez dans la console qui a le plus grand IMC, avec le nom complet et l'IMC respectif. Exemple :
//"L'IMC de John Smith (28,3) est supérieur à celui de Mark Miller (23,9) !".
//

let mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.imc = this.weight / (this.height * this.height);
    return this.imc;
  },
};
let john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.imc = this.weight / (this.height * this.height);
    return this.imc;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `L'IMC de Mark Miller ${mark.calcBMI(
      this.imc
    )} est supérieur à celui de John Smith ${john.calcBMI(this.imc)}} !`
  );
} else {
  console.log(
    `L'IMC de John Smith ${john.calcBMI(
      this.imc
    )} est supérieur à celui de Mark Miller ${mark.calcBMI(this.imc)} !`
  );
}

//
//3. Affichez dans la console qui a le plus grand IMC, avec le nom complet et l'IMC respectif. Exemple :
//"L'IMC de John Smith (28,3) est supérieur à celui de Mark Miller (23,9) !".
//
//# DONNÉES DE TEST :
//
//Mark pèse 78 kg et mesure 1,69 m de haut. John pèse 92 kg et mesure 1,95 m de haut.
