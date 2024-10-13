// Gestion de la soumission du formulaire
document
  .getElementById("languageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération de la langue sélectionnée
    const selectedLanguage = document.querySelector(
      'input[name="language"]:checked'
    ).value;

    const resultDiv = document.getElementById("result");

    // Utilisation d'un switch pour afficher le message approprié
    switch (selectedLanguage) {
      case "chinese":
        resultDiv.textContent = "MOST number of native speakers!";
        break;
      case "spanish":
        resultDiv.textContent = "2nd place in number of native speakers";
        break;
      case "english":
        resultDiv.textContent = "3rd place";
        break;
      case "hindi":
        resultDiv.textContent = "Number 4";
        break;
      case "arabic":
        resultDiv.textContent = "5th most spoken language";
        break;
      default:
        resultDiv.textContent = "Great language too :D";
    }
  });

// Gestion du bouton pour réinitialiser le formulaire
document.getElementById("resetButton").addEventListener("click", function () {
  // Réinitialiser le formulaire
  document.getElementById("languageForm").reset();

  // Effacer le contenu de la div de résultat
  document.getElementById("result").textContent = "";
});
