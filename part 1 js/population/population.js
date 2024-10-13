// Gestion de la soumission du formulaire
document
  .getElementById("populationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération du nom du pays et de la population
    let country = document.getElementById("country").value;
    let population = Number(document.getElementById("population").value);

    // Utilisation de l'opérateur ternaire pour vérifier si la population est au-dessus ou en dessous de la moyenne
    let resultMessage = `${country}'s population is ${
      population > 33 ? "above" : "below"
    } average.`;

    // Affichage du résultat dans la div
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultMessage;
  });

// Gestion du bouton pour réinitialiser les données
document.getElementById("resetButton").addEventListener("click", function () {
  // Réinitialisation du formulaire
  document.getElementById("populationForm").reset();

  // Effacement du contenu de la div résultat
  document.getElementById("result").textContent = "";
});
