// Fonction pour calculer le score moyen
function match(first, second, third) {
  let sum = first + second + third;
  let div = sum / 3;
  return div;
}

// Gestion de la soumission du formulaire
document
  .getElementById("scoresForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des scores des Dauphins
    let dolphin1 = parseInt(document.getElementById("dolphin1").value);
    let dolphin2 = parseInt(document.getElementById("dolphin2").value);
    let dolphin3 = parseInt(document.getElementById("dolphin3").value);

    // Récupération des scores des Koalas
    let koala1 = parseInt(document.getElementById("koala1").value);
    let koala2 = parseInt(document.getElementById("koala2").value);
    let koala3 = parseInt(document.getElementById("koala3").value);

    // Calcul des scores moyens
    let scoreDolphins = match(dolphin1, dolphin2, dolphin3);
    let scoreKoalas = match(koala1, koala2, koala3);

    // Affichage des résultats
    const resultDiv = document.getElementById("result");

    if (scoreDolphins > scoreKoalas) {
      resultDiv.textContent = "Les Dauphins ont remporté le trophée!";
    } else if (scoreDolphins < scoreKoalas) {
      resultDiv.textContent = "Les Koalas ont remporté le trophée!";
    } else {
      resultDiv.textContent = "Les équipes sont à égalité.";
    }
  });

// Gestion du bouton pour réinitialiser les données
document.getElementById("resetButton").addEventListener("click", function () {
  // Réinitialisation des champs du formulaire
  document.getElementById("scoresForm").reset();

  // Effacement du résultat affiché
  document.getElementById("result").textContent = "";
});
