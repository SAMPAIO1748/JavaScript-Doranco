/* Exercice : tout afficher dans la console
  
    - avec les trois manières possibles afficher le contenu de l'article qui a l'id monArticle

    - Afficher la liste des contenues des divs qui ont la classe "mesDivs"

    - Afficher le contenu du premier paragraphe (2 méthodes différentes)

    - Afficher le contenu du 1er span (2 méthodes différentes)

    - Modifier le contenu du h1.

    - Afficher la liste des contenus de tous les p.

    - Modifier le contenu de la div qui a l'id result

    - Afficher le contenu de la div qui contient 4

*/

// 1er :
let article1 = monArticle;
console.log(article1.innerHTML);
let article2 = document.getElementById("monArticle");
console.log(article2.innerHTML);
let article3 = document.querySelector("#monArticle");
console.log(article3.innerHTML);

// 2ème :
let divs = document.getElementsByClassName("mesDivs");
console.log(divs);
for (let index = 0; index < divs.length; index++) {
  console.log(divs[index].innerHTML);
}

//3ème
let p1 = document.querySelector("p");
console.log(p1.innerHTML);
let p2 = document.getElementsByTagName("p");
console.log(p2[0].innerHTML);

//4ème
let span1 = document.getElementsByTagName("span");
console.log(span1[0].innerHTML);
let span2 = document.querySelector("span");
console.log(span2.innerHTML);

//5ème
let h1 = document.querySelector("h1");
h1.innerHTML = "Le titre de l'article";

/*
    2nde méthode
    let h1bis = document.getElementsByTagName("h1");
    h1bis[0].innerHTML = "Le titre de l'article"
*/

//6ème
let ps = document.getElementsByTagName("p");
for (let i = 0; i < ps.length; i++) {
  console.log(ps[i].innerHTML);
}

//7ème
let result = document.getElementById("result");
result.innerHTML = "Voici les résultats qui sont dans la console.";

//8ème
let div4 = document.querySelectorAll(".mesDivs");
console.log(div4[3].innerHTML);
