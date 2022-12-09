// Copieur

let texte = document.getElementById("texte"),
  copie = document.getElementById("copie");

texte.addEventListener("keyup", function () {
  copie.value = texte.value;
});

// Calcul

let nombre = document.getElementsByTagName("td")[0],
  carre = document.getElementsByTagName("td")[1],
  cube = document.getElementsByTagName("td")[2],
  saisi = document.getElementById("nombre");

saisi.addEventListener("keyup", function () {
  nombre.innerHTML = saisi.value;
  let chiffre = parseInt(nombre.innerHTML);
  if (!isNaN(chiffre)) {
    carre.innerHTML = chiffre * chiffre;
    cube.innerHTML = chiffre * chiffre * chiffre;
  } else {
    carre.innerHTML = "Tu n'as pas donné un nombre !";
    cube.innerHTML = "Tu n'as pas donné un nombre !";
  }
});

// Déplacement Carré

let bouge = document.getElementById("bouge"),
  move1 = document.getElementById("move1");

bouge.addEventListener("click", function () {
  if (
    (move1.style.left === "0px" || !move1.style.left) &&
    (move1.style.bottom === "0px" || !move1.style.bottom)
  ) {
    move1.style.left = "100px";
    move1.style.bottom = "0px";
  } else if (move1.style.left === "100px" && move1.style.bottom === "0px") {
    move1.style.bottom = "100px";
  } else if (move1.style.left === "100px" && move1.style.bottom === "100px") {
    move1.style.left = "0px";
  } else if (move1.style.left === "0px" && move1.style.bottom === "100px") {
    move1.style.bottom = "0px";
  }
});

// Déplaceur

let move = document.getElementById("move");

let temoin = true;
ancienOffset = 0;
document.addEventListener("wheel", function (event) {
  event.preventDefault();
  if (move.offsetLeft <= 500 && temoin) {
    move.style.left = move.offsetLeft + 100 + "px";
  } else if (move.offsetLeft >= 100) {
    move.style.left = move.offsetLeft - 100 + "px";
    temoin = false;
  } else {
    move.style.left = move.offsetLeft + 100 + "px";
    temoin = true;
  }
});
