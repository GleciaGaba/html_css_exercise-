// Récupération des éléments du formulaire et du bouton reset
const form = document.getElementById("populationForm");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("resetButton"); // Nouveau bouton effacer

// Fonction pour afficher les statistiques de la population
function displayPopulationStats(country, continent, population) {
  // Incrémentation de la population
  const message = `${country} is a country from ${continent}, and its population is ${population} millions.`;

  // Vérification si la population est supérieure ou inférieure à la moyenne
  if (population > 33) {
    return message + ` The population of ${country} is greater than average.`;
  } else {
    return (
      message +
      ` The population of ${country} is ${
        33 - population
      } millions below average.`
    );
  }
}

// Ajout de l'écouteur d'événement pour soumettre le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs du formulaire
  const country = document.getElementById("country").value;
  const continent = document.getElementById("continent").value;
  let population = parseInt(document.getElementById("population").value);

  // Appel de la fonction pour obtenir le message des statistiques
  const resultMessage = displayPopulationStats(country, continent, population);

  // Afficher le résultat dans la div et le champ texte
  resultDiv.textContent = resultMessage;
});

// Ajout de l'écouteur d'événement pour le bouton effacer
resetButton.addEventListener("click", function () {
  // Réinitialiser le formulaire
  form.reset();

  // Effacer le contenu de la div résultat et du champ texte
  resultDiv.textContent = "";
});
