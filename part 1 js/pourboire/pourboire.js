// Gestion de la soumission du formulaire
document.getElementById("tipForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération du montant de la facture
  let bill = parseFloat(document.getElementById("bill").value);

  // Calcul du pourboire
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // Affichage du résultat dans la div
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `La facture était de $${bill}, le pourboire est de $${tip.toFixed(
    2
  )}, et la valeur totale est de $${(bill + tip).toFixed(2)}.`;
});

// Gestion du bouton pour réinitialiser les données
document.getElementById("resetButton").addEventListener("click", function () {
  // Réinitialisation du formulaire
  document.getElementById("tipForm").reset();

  // Effacer le contenu de la div résultat
  document.getElementById("result").textContent = "";
});
