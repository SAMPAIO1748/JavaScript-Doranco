/**
 *
 * En JavaScript un événement permet de réaliser  des instructions de code uniquement lorsqu'un
 * événement particulier a lieu sur la page web.
 *
 *  SYNTHAXE :
 *
 * elementSelectionne.addEventListener("nom_de_l_evenement", code qui doit se faire (sous forme de focntion))
 *
 *  Liste de tous les events :
 * https://developer.mozilla.org/fr/docs/Web/Events
 *
 */

// -------------------- Evenement sur les div --------------------------------------------
document.getElementById("div1").addEventListener("click", div1);

let div2 = document.getElementById("div2");
div2.addEventListener("dblclick", function () {
  alert("div2 - double click");
});

document.getElementById("div3").addEventListener("mouseover", div3);

document.getElementById("div3").addEventListener("mouseleave", function () {
  document.getElementById("div3").style.backgroundColor = "blue";
});

document.getElementById("div4").addEventListener("mouseout", div4);

document.getElementById("div5").addEventListener("mousedown", div5);

document.getElementById("div6").addEventListener("blur", div6);
// blur est l'événement où l'on quitte le focus d'un input

document.getElementById("div7").addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  // this fait référence à l'élément sélectionné par getElementById et qui subit l'évènement.
});

document.getElementById("div7").addEventListener("blur", function () {
  this.style.backgroundColor = "white";
});

// -------------------- Fonction de test -------------------------------------------------
function div1() {
  alert("div1 - clic div1");
}

function div3() {
  document.getElementById("div3").style.backgroundColor = "green";
}

function div4() {
  document.getElementById("div4").style.backgroundColor = "darkgrey";
}

function div5() {
  document.getElementById("div5").style.backgroundColor = "orange";
}

function div6() {
  alert("Blur - je quitte le focus");
}

// exercice : lorsque que la souris quitte div3 alors le background devient bleu.
