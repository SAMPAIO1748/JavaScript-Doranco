// -------------------------- LES SELECTEURS DANS JAVASCRIPT --------------------------------------------------

// -------------------------- SELECTEUR NATUREL -------------------------------------------------
let monId = masection;
// Tous les id sont atteignables sans fonction. Je met directement le nom de l'id
console.log(monId);
console.log("monId : " + monId.innerHTML);
monId.innerHTML = "Ma Super Section";
/**
 * innerHTML permet de selectionner le contenu compris entre les deux balises HTML de l'élément sélectionné
 * il permet aussi de modifier ce contenu (en fait de la remplacer)
 *
 */
console.log("body : " + document.body); // body est atteignable directement car il est unique dans le fichier html

// -------------------------- SELECTEUR BYID -------------------------------------------------

let myId = document.getElementById("masection");
// getElementById est une fonction qui permet de sélectionner un élément HTML via son id
console.log("myId : " + myId); // cela renvoie un object HTMLCollection (ARRAY/OBJECT)
console.log("myId : " + myId.innerHTML);

// -------------------------- SELECTEUR BYTAGNAME -------------------------------------------------

let maBalise = document.getElementsByTagName("span");
console.log("maBalise : " + maBalise); // cela renvoie un object HTMLCollection (ARRAY/OBJECT)
console.log("maBalise : " + maBalise[0].innerHTML);
// getElementsByTagName est une fonction qui sélectionne tous les éléments d'une page html qui ont pour balise
// la balise sélectionnée. Cette fonction renvoie un résultat sous forme de tableau.

// -------------------------- SELECTEUR BYCLASSE -------------------------------------------------

let maClasse = document.getElementsByClassName("avion");
console.log("maClasse : " + maClasse); // cela renvoie un object HTMLCollection (ARRAY/OBJECT)
console.log("type : " + typeof maClasse); // ARRAY/OBJECT
console.log("ma1ereClasse : " + maClasse[0].innerHTML);
for (let i = 0; i < maClasse.length; i++) {
  j = i + 1;
  maClasse[i].style.backgroundColor = "red";
  console.log(
    "Tour n°" + j + " : " + maClasse[i].innerHTML + " , id : " + maClasse[i].id
  );
}
// getElementsByClassName est une fonction qui sélectionne tous les éléments d'une page html qui ont pour clasee
// la classe sélectionnée. Cette fonction renvoie un résultat sous forme de tableau.

// ------------------------- SELECTION QUERYSELECTOR ---------------------------------------
let p = document.querySelector("p"); // le querySelector récupère le premier élément qui a une balise p
console.log("querSelector : " + p.innerHTML);
let idSection = document.querySelector("#masection");
// le querySelector récupère le premier élément qui a un id = "masection"
console.log("querSelector : " + idSection.innerHTML);
let voiture = document.querySelector(".voiture");
// le querySelector récupère le prmeier élement qui a une classe = "voiture"
console.log("querSelector : " + voiture.innerHTML);
// Les sélecteurs sont les mêmes que pour CSS : . : classe, # : id

// ------------------------- SELECTION QUERYSELECTORALL -------------------------------------

let pAll = document.querySelectorAll("p");
console.log(pAll);
// querySelectorAll renvoie tous les éléments qui ont la balise p
// il renvoie la réponse sous forme de NodeList (qui ressemble beaucoup à un tableau).
console.log("querySelector : " + pAll[0].innerHTML);
console.log("querySelector : " + pAll[1].innerHTML);
console.log("querySelector : " + pAll[4].innerHTML);
let voituresAll = document.querySelectorAll(".voiture");
// querySelectorAll renvoie tous les éléments qui ont la classe = "voiture"
// il renvoie le résultat sous forme de NodeList (qui ressemeble à un tableau)
console.log(voituresAll);
console.log("querySelector : " + voituresAll[2].innerHTML);

// --------------------------- RESUME DES SELECTEURS --------------------------

/* 
    id : selecteur naturel via un id.
    getElementById() : recherche un élément qui aura l'id demandé entre parenthèses
    getElementsByTagName() : recherche tous les éléments qui ont pour balise
    la balise sélectionnée entre parenthèses
    getElementsByClassName : recherche tous les élements qui ont pour classe
    la classe sélectionnée entre parenthèses
    querySelector : retourne le premier élement qui satisfait le sélecteur demandé
    (les sélecteur utilisent le même syntaxe de CSS : #id, .classe, balise)
    querySelectorAll : retourne tous les éléments qui satisfont le selecteur
    demandé (les sélecteurs sont les mêmes que pour querySelector).

*/
