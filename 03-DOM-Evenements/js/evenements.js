/**
 *
 * En JavaScript un événement permet de réaliser  des instructions de code uniquement lorsqu'un
 * événement particulier a lieu sur la page web.
 *
 *  SYNTHAXE :
 *
 * elementSelectionne.addEventListener("nom_de_l_evenement", code qui doit se faire (sous forme de focntion))
 *
 */

// -------------------- Evenement sur les div --------------------------------------------
document.getElementById("div1").addEventListener("click", div1);

// -------------------- Fonction de test -------------------------------------------------
function div1() {
  alert("div1 - clic div1");
}
