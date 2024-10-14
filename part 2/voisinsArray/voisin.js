//Créez un tableau contenant tous les pays voisins d'un pays de votre choix.
//Choisissez un pays qui a au moins 2 ou 3 voisins. Stockez le tableau dans une
//variable appelée « neighbours »
let neighbours = [
  "Paraguay",
  "Uruguay",
  "Argentine",
  "Suriname",
  "Venezuela",
  "Colombie",
  "Guyana",
  "Pérou",
  "Bolivie",
  "Guyane",
];
//À un moment donné, un nouveau pays appelé "Utopia" est créé dans le voisinage

//du pays que vous avez choisi. Ajoutez-le donc à la fin du tableau « neighbours".

neighbours.push("Utopia");

//Malheureusement, au bout d'un certain temps, le nouveau pays est dissous, il faut
//donc l'enlever de la fin du tableau.

neighbours.pop();

let germany = neighbours.indexOf("Germany");

//Si le tableau 'neighbours' n'inclut pas le pays 'Germany', enregistrez sur la
//console : 'Probably not a central European country :D' (probablement pas un pays
//d'Europe centrale)

if (germany === -1) {
  console.log("Probably not a central European country :D");
}

//Changez le nom d’une des valeurs du tableau « neighbours ». Pour cela, trouvez
//l'indice du pays dans le tableau "neighbours", puis utilisez cet indice pour modifier
//le tableau à la position de cet indice. Par exemple, vous pouvez rechercher "Suède"
//dans le tableau, puis le remplacer par "République de Suède".

neighbours[0] = "Falsicland";

console.log(neighbours);
