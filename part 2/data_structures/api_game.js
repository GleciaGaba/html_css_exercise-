//# Data Structures, Modern Operator & Strings #1
//
//Nous allons créer une application de pari sur le football!
//Supposons que nous obtenions des données d'une API (variable « game » à la page suivante).
//Dans ce défi, nous allons travailler avec ces données.
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//
//Vos tâches :
//
//1. Créer un tableau de joueurs pour chaque équipe (variables 'players1' et 'players2')

const players1 = game.players[0];
const players2 = game.players[1];
//console.log(players1);
//console.log(players2);

//2. Le premier joueur du tableau est le gardien et les autres joueurs ensuite.

let [gardien1, ...joueur1] = players1;
//console.log(gardien1, joueur1);
let [gardien2, ...joueur2] = players2;
//console.log(gardien2, joueur2);

//Pour le Bayern (team1) créer une variable ('gk') avec le nom du gardien,

let gk = gardien1;
console.log(gk);

//et un tableau ('fieldPlayers') avec les 10 autres joueurs à l'intérieur

let fieldPlayers = joueur1;
console.log(fieldPlayers);

//3. Créer un tableau 'allPlayers' qui contiendra tous les joueurs des deux équipes (22 joueurs)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. Pendant le match, le Bayern (team 1) a fait 3 remplacements.

//Créer un nouveau tableau ('players1Final') qui contiendra les 11 joueurs de l'équipe (team 1) plus 'Thiago',
//'Coutinho' et 'Perisic'
let remplacements = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...players1, ...remplacements];
console.log(players1Final);
//5. Sur la base de l'objet game.odds, créer une variable pour chaque mise ('team1', 'draw' et 'team2')

//6. Écrire une fonction 'printGoals' qui recevra un nombre arbitraire de noms de joueurs
//(PAS un tableau) et logger chacun d'eux dans la console, avec le nombre de buts qui ont été marqué au total
//(nombre de buts = la longueur du tableau)
//7. L'équipe avec la côte la plus basse a plus de chance de gagner. Logger dans la console
//quelle équipe a plus de chance de l'emporter sans utiliser de condition if/else ou de ternary operator.
//
//# Data pour tester la partie 6 :
//
//D'abord, utiliser 'Davies', 'Muller', 'Lewandowski' et 'Kimmich'.
//Puis, appeler la fonction une nouvelle fois avec les joueurs présent dans game.scored
//
//Bonne chance 😀
