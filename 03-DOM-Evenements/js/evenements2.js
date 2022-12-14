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

// Event double click :

document.getElementById("div2").addEventListener("dblclick", function () {
  let divTop = this.style.top;
  console.log(divTop);
  let divLeft = this.style.left;
  console.log(divLeft);

  if (divTop == "0px" && divLeft == "0px") {
    this.style.left = "100px";
  } else if (divTop == "0px" && divLeft == "100px") {
    this.style.top = "100px";
  } else if (divTop == "100px" && divLeft == "100px") {
    this.style.left = "0px";
  } else {
    this.style.top = "0px";
  }
});

// Event Mousenter & Mouseleave

let listeImage = document.querySelectorAll("#blocImage1 img");
console.log(listeImage);

document
  .getElementById("blocImage1")
  .addEventListener("mouseenter", function () {
    listeImage[0].style.top = "0px";
    listeImage[1].style.top = "0px";
  });

document
  .getElementById("blocImage1")
  .addEventListener("mouseleave", function () {
    listeImage[0].style.top = "-360px";
    listeImage[1].style.top = "-360px";
  });

// Carousel

document
  .getElementById("changerImage")
  .addEventListener("click", function (event) {
    // l'argument dans le fonction permet de récupérer cet évènement.
    event.preventDefault();
    // preventDefault() permet de stopper la procédure habituelle de l'évènement.

    let imageEnCours = document
      .getElementById("blocImage2")
      .getAttribute("data-image");
    console.log(imageEnCours);

    // Exercie : trouver le moyen de modifier l'opcatité de l'image en cours à 0 et l'opacité
    // de l'image suivant à 1 et modifier data-image par l'image qui viendra après pour réaliser le
    // carousel

    if (imageEnCours == "image1") {
      document.getElementById("image1").style.opacity = 0;
      document.getElementById("image2").style.opacity = 1;
      document
        .getElementById("blocImage2")
        .setAttribute("data-image", "image2");
    } else if (imageEnCours == "image2") {
      document.getElementById("image2").style.opacity = 0;
      document.getElementById("image3").style.opacity = 1;
      document
        .getElementById("blocImage2")
        .setAttribute("data-image", "image3");
    } else if (imageEnCours == "image3") {
      document.getElementById("image3").style.opacity = 0;
      document.getElementById("image4").style.opacity = 1;
      document
        .getElementById("blocImage2")
        .setAttribute("data-image", "image4");
    } else if (imageEnCours == "image4") {
      document.getElementById("image4").style.opacity = 0;
      document.getElementById("image5").style.opacity = 1;
      document
        .getElementById("blocImage2")
        .setAttribute("data-image", "image5");
    } else {
      document.getElementById("image5").style.opacity = 0;
      document.getElementById("image1").style.opacity = 1;
      document
        .getElementById("blocImage2")
        .setAttribute("data-image", "image1");
    }
  });

//Mousedown
document.getElementById("div3").addEventListener("mousedown", function () {
  this.style.backgroundColor = "red";
});

// Mouseup
document.getElementById("div3").addEventListener("mouseup", function () {
  this.style.backgroundColor = "darkorchid";
});

// Exercice pour demain :
/*
LORS DU FOCUS DES INPUT transformer les bordures en noir mettre une épaisseur 3px

A l'inverse lors du blur, retrouver l'apparence d'origine.

*/

// FOCUS

// Pour l'input pseudo
/*document.getElementById("pseudo").addEventListener("focus", function () {
  this.style.border = "black 5px solid";
});

// Pour l'input email
document.getElementById("email").addEventListener("focus", function () {
  this.style.border = "black 5px solid";
});*/

// Pour le select choix
document.getElementById("choix").addEventListener("focus", function () {
  this.style.border = "black 5px solid";
});

// deuxième méthode juste pour les inputs :
let mesInputs = document.querySelectorAll("input");
console.log(mesInputs);

for (let i = 0; i < mesInputs.length; i++) {
  mesInputs[i].addEventListener("focus", function () {
    this.style.border = "black 5px solid";
  });
}

// BLUR

// Pour les inputs :
for (let i = 0; i < mesInputs.length; i++) {
  mesInputs[i].addEventListener("blur", function () {
    this.style.border = "1px solid lightslategray";
  });
}

// Pour le select :
document.getElementById("choix").addEventListener("blur", function () {
  this.style.border = "1px solid lightslategray";
});

document.getElementById("monForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let pseudoValue = document.getElementById("pseudo").value;
  // value permet de récupérer la valeur qui est inscrite dans l'input
  console.log(pseudoValue);

  // Exercice : récupérer la value de email et afficher le pseudo et l'email dans la div "message"

  let emailValue = document.getElementById("email").value;
  console.log(emailValue);

  document.getElementById("message").innerHTML =
    "Bonjour " + pseudoValue + ", votre email est : " + emailValue;

  document.getElementById("pseudo").value = "";
  document.getElementById("email").value = "";
});
