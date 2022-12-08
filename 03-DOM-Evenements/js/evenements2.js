// Evenement Click Div1

document.getElementById("div1").addEventListener("click", function () {
  let couleurActuelle = this.style.backgroundColor;
  console.log(couleurActuelle);

  if (couleurActuelle == "cornflowerblue") {
    this.style.backgroundColor = "red";
    this.style.width = "200px";
  } else if (couleurActuelle == "red") {
    this.style.backgroundColor = "orange";
    this.style.height = "200px";
  } else if (couleurActuelle == "orange") {
    this.style.backgroundColor = "purple";
    this.style.width = "100px";
  } else {
    this.style.backgroundColor = "cornflowerblue";
    this.style.height = "100px";
  }
});

// Exercice : Event Double Click
/*

    Lorsque je double clique sur le carré il se décale vers la droite.
    Ensuite je double clique à nouveau, il se décale vers le bas.
    Puis si je clique encore un fois, il se décale vers la gauche.
    Enfin, lorsque l'on clique un dernière fois il se décale vers le haut reprenat sa place d'origine.

*/
