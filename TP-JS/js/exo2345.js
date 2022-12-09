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
