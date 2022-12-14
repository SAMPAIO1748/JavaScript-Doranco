// --1-- Commentaire------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

// Commenatire sur une seul ligne en JavaScript avec double slash
/*

    Commentaire sur plusieurs lignes :
    avec back-slash étolie - (le commentaire) - étoile back-slash

    Exercice : écrire un commentaire d'une ligne "Mon premier commenetaire en JS",
    écrire un commentire sur plusieurs lignes qui contiendra un paragraphe avec en lorem ipsom

*/

// Mon premier commentaire en JS

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Obcaecati eum itaque sunt id illo iusto laudantium necessitatibus
at unde aliquid laboriosam totam ipsum dolorum enim quam, 
magnam voluptatibus repellendus expedita!
*/

// ------------------------------------------------------------------------------------------------------------
// -- 2 -- AFFICHAGE
// ------------------------------------------------------------------------------------------------------------

document.write("Mon premier message"); // affichage
// Les requêtes JavaScript finissent par ;
document.write("<h1>Découverte JavaScript Message </h1>"); // affichage avec HTML
document.writeln("Affichage de texte avec retour à la ligne"); // affichage simple avec retour de ligne (créer un espace après le texte affiche)
document.write("Salut l'ami");
// window.alert("Bonjour"); // Apparition d'une boite de dialogue simple
//alert("Salut"); // Apparition d'une boite de dialogue simple
//confirm("Etes-vous sûr ?"); // Boîte de dialogue avec bouton de confirmation
//prompt('Quel âge as-tu ?'); // Boîte de dialogue avec un champ pour remplir.
/*
 Les boîtes de dialogue sont stylisables pour les rendre plus agréables à voir
*/
console.log("Message dans la console"); // message écrit dans la console de debuguage.
console.info("Je suis pareil que mon frère console.log"); // message écrit dans la console de debuguage.

// ------------------------------------------------------------------------------------------------------------
// -- 3 -- VARIABLES
// ------------------------------------------------------------------------------------------------------------

document.write("<h2> Les Variables</h2>");
// Une variable est une "boîte" dans laquelle on stocke une données. Cette donnée peut être de n'importe quel type (chiffres, des lettres,...)

var maBoite; // le mot clé "var" permet de créer la variable "maBoite". (Ici on déclare la variable maBoite = création de la "boite")
maBoite = 10; // permet d'affecter la valeur 10 à notre variable maBoite (affection = je donne la valuer 10 à maBoite)
document.write(maBoite);
document.write("<br>");

// convention de nommage : maVariableUitilise

var monAutreBoite = 20; // déclaration + affectation en même temps (on utilisera toujour cette façon)

let maNouvelleBoite = 30; /* le mot clé "let" permer de déclarer une variable comme "var" mais 
                            "let" permet une optimisation de la mémoire pour le stockage.
                            */

document.write(maBoite);
console.log(monAutreBoite);
console.log(maNouvelleBoite);

maDerniereBoite = 50; // écriture possible mais très déconseillée car non conventionnel

document.write(maDerniereBoite);

let prenom = "Sylvie", // par convention, retour à la ligne pour chaque variable et on applique l'indentation
  nom = "Robert",
  age = 28; // "let" et "var" peut aussi faire plusieurs "déclaration-affectation" sans devoir réécrire les mots clé à chaque.
// Il suffit de séparer les variables avec des "," à la place du ";".

document.writeln(nom);
document.writeln(prenom);
document.writeln(age);

document.write("<br>");

prenom = "Pierre"; // nous changeons la valeur de la variable "prenom". Npus supprimons "Sylvie" et nous mettons "Pierre" à la place.
document.writeln(prenom); // affichera Pierre.

prenom = nom; // nous affectons à la variable "prenom" la valeur de la variable "nom"
document.write(prenom); // affichera Robert
document.write(nom); // affichera Robert

document.write("<br>");

let nombre = 1;
nombre += 3; // ajout d'une valeur à partir de la valeur d'origine sans supprimer cette valeur d'origine
document.writeln(nombre); //affichera 4 = 1 +3

let nombre2 = 2;
nombre2 = nombre2 + 6; // ajout d'une valeur à partir de la valeur d'origine sans supprimer cette valeur d'origine
document.write(nombre2); // affichera 8 = 2 + 6

document.write("<br>");

// document.write(Chose); Dans la console : ReferenceError: Cose is not defined.
//Cette erreur arrive car Chose n'a pas été déclarée comme variable

let fruit;
document.write(fruit); // affichera undefined car nous n'avons pas affecté de valeur à la variable "fruit".

//let disBonjour = prompt("Dis Bonjour !"); // Nous pouvons stocker ce que va saisir l'utilisateur
//alert(disBonjour);

// ------------------------------------------------------------------------------------------------------------
// -- 4 -- Types de données
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les types de données</h2>");

// Commençons par les 3 principaux (primitifs) types de données

// Les types chaînes de caractères (string ou varchar)
// Elles sont toujours écrites entre guillemets (simple ou double)
let monTexte =
  "Voici du texte écrit en JavaScript, c'est donc une chaîne de caractères"; // entre double guillemets
let apostrophes =
  "Pour l'utilisation d'une apostrophe dans les quotes simples, il faut mettre un caractère d'échapement (backslash)";
let numero = "10"; // si nous écrivons un chiffre entre quotes (simple ou double), l'ordinateur va le traiter comme un string

// les types numériques (number) [integer (nombre entier), float (nombre décimaux)]
let chiffre = 9; // affectation tel quel, sans quotes ni doubles quotes
let negatif = -60; // tous les types d'écriture numériques sont possibles. Négatif, positif, décimal...
let decimal = 2.3;

// Les types booléens (boolean)
// Le type booléen ne prend que deux valeurs : TRUE ou FALSE
var choix = true; // ou false.

// typeof permet de checker le type d'une variable
document.write(typeof chiffre);
document.write("<br>");

// Exercice : afficher le type de toutes les variables du chapitre 4;

document.write(typeof monTexte);

document.write("<br>");

document.write(typeof apostrophes);

document.write("<br>");

document.write(typeof numero);

document.write("<br>");

document.write(typeof negatif);

document.write("<br>");

document.write(typeof decimal);

document.write("<br>");

document.write(typeof choix);

document.write("<br>");

document.write(Boolean(numero)); // renvoie true si la variable est affectée (par autre chose que par false ou 0) et déclarée.
// Si la variable n'existe pas ou n'a pas de valeur alors Boolean() renvoie false.

document.write("<br>");

//document.write(typeof(maVariable)); // affichera undefined si une variable n'est pas déclarée ou n'a pas de valeur affectée.
document.write("<br>");
let maVariable;
document.write(typeof maVariable); // affichera undefined car elle est déclarée mais pas affectée.

// ------------------------------------------------------------------------------------------------------------
// -- 5 -- CONSTANTES
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les constantes</h2>");
// les contraintes sont des boîtes dont la valeur NE PEUT ETRE MODIFIEE, autrememtn dit : dont la valeur est constante.

const BOUGE_PAS = "Ma constante impossible à modifier";
document.write(BOUGE_PAS);
document.write("<br>");

//BOUGE_PAS = "nouvelle valeur ? impossible"; // affichera dans la console -> TypeError : assignment of constant variable.

// const BOUGE_PAS = "autre valeur"; // impossible aussi -> SyntaxError : la constante a déjà été déclarée.

// let BOUGE_PAS = "encore une autre valeur"; // impossible aussi -> SyntaxError : la constante a déjà été déclarée.

// IMPORTANT : le mot clé "const" n'est pas compatible avec tous les navigateurs. Donc les développeurs utilisent la métode suivante :
// déclarer une variable dont le nom complet est en majuscule.
// Exemple :
var NE_PAS_MODIFIER = "ma variable ne doit pas être modifiée";
// Si le mot clé var ou let est utilisé et que le nom de la variable est ne majuscule et qu'il contient UNDERSCORE _ alors cela
// indique aux développeurs que la variable ne doit pas être modifiée.

// ------------------------------------------------------------------------------------------------------------
// -- 6 -- CONCATENATION
// ------------------------------------------------------------------------------------------------------------

// Concaténer les STRING avec le symbole +
document.write("<h2>La concaténation</h2>");

let firstname = "Bruce",
  name = "Wayne";
document.write(firstname + name); // BruceWayne
document.write("<br>");

document.write("<strong>" + firstname + "</strong> " + name); // Bruce Wayne

// ------------------------------------------------------------------------------------------------------------
// -- 7 -- OPERATEURS ARITHMETIQUES
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les opératurs arithmétiques</h2>");

let resultat = 10 + 5; // addition
document.write(resultat + "<br>"); // 15

let resultat1 = 10 - 5; // soustraction
document.write(resultat1 + "<br>"); // 5

let resultat2 = 10 * 5; // multiplication
document.write(resultat2 + "<br>"); // 50

let resultat3 = 10 / 5; // division (affiche le quotien)
document.write(resultat3 + "<br>"); // 2

let resultat4 = 10 % 3; // modulo (donne le reste de la division euclidienne)
document.write(resultat4 + "<br>"); // 1

let chiffre1 = 7;
chiffre1 = chiffre1 + 5; // veut dire chiffre1 = 7 + 5 donc 12
chiffre1 += 5; // ATTENTION chiffre1 n'a plus la valeur de départ, maintenaint chiffre1 vaut  12 donc le résulat de ce calcul est 17.
document.write(chiffre1 + "<br>"); // 17
// fonctionne avec tous les opérateurs arithmétiques : +=, -=, *=, /=, %=

let chiffre2 = 56,
  chiffre3 = 24;

let resultat5 = chiffre2 - chiffre3;
document.write(resultat5 + "<br>"); // 32

// ------------------------------------------------------------------------------------------------------------
// -- 8 -- Conditions
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Conditions et opérateurs de comparaison de logique</h2>");

let a = 10,
  b = 5,
  c = 2;

// If
if (a > b) {
  // si a est strictement supérieur à b
  document.write("Le chiffre a est plus grand que le chiffre b. <br>");
}

//If/Else
if (c > b) {
  // si c est strictement supérieur à b
  document.write("Le chiffre c est plus grand que le chiffre b. <br>");
} // sinon
else {
  document.write("Le chiffre c n'est pas plus grand que le chiffre b.<br>");
}

// If avec AND
if (a > b && b > c) {
  // Si a est strictement supérieur à b ET que b est strictememnt supérieur à c.
  document.write("Les deux conditions sont réunies.<br>");
}

//If avec OR.
if (a == 9 || b > c) {
  // Si a est égale à 9 ou si b est supérieur à c
  document.write("L'une des deux conditions est respectées. <br>");
}

// If/Else If/Else
if (a == 8) {
  // Si a est égale à 8
  document.write("1 - a est égale à 8.<br>");
} else if (a != 10) {
  // Sinon Si a est différent de 10
  document.write("2 - a est différent de 10.<br>");
} // Sinon, c'est que je ne suis ni dans le if ni dans le elseif, je me retrouve dans le else.
else {
  document.write("3 - Tout le monde a faux.<br>");
}

// if avec l'opérateur négation !
var test = 3 < 1; // test est un booleén qui renvoie false
console.log(test);
if (!test) {
  // ! est l'opérateur NOT, qui veut dire "inverse la valeur du boolean"
  console.log(!test);
  document.write("Je teste le contraire du test.<br>");
}

// if avec opérateur comparaison == et ===
let vara = 1,
  varb = "1";
if (vara == varb) {
  document.write("les deux variables sont égales.<br>");
}

if (vara === varb) {
  document.write("les deux variables sont égales et de même type.<br>");
}

// Condition ternaire.
let voiture = "ford";
document.write(voiture == "twingo" ? "jolie<br>" : "moche<br>");
/*

    Traduction de la condition ternaire :
    if(voiture == "twingo")
    {
        document.write('jolie<br>');
    }
    else
    {
        document.write('moche<br>');
    }
    

*/

//isNaN
if (!isNaN(varb)) {
  document.write(
    "varb n'est pas un number ou nombre (Not a Number - NaN). <br>"
  );
}

/* Exercice :

    A l'aide la fonction appropriée faire apparaitre une fenetre qui va demandé l'age de la personne.
    Si l'âge est supérieur ou égale à 18 alors, le message "Vous avez le droit de voter s'affiche" apparait.
    Sinon et si l'age est inférieur à 18 alors le message "Retourne jouer à Pokémon" apparait.
    Sinon, le message suivant apparait 'Tu dois donner un age, valide Méchant !!!'

*/

// Correction :

/*let age1 = prompt("Saisissez votre age");
if(age1 >= 18 && !isNaN(age1))
{
    document.write("Vous avez le droit de voter.<br>");
}
else if(age1 < 18 && !isNaN(age1) && age1 > 0)
{
    alert("Retourne jouer à Pokémon");
}
else
{
    document.write("Tu dois donner un age valide, Méchant !!! <br>")
}

*/

// ------------------------------------------------------------------------------------------------------------
// -- 9 -- Condition SWITCH
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Condition Switch</h2>");

//let couleur = prompt("Quelle est votre couleur préférée ?");

/*switch(couleur){ // j'indique la variable que je vais tester dans mon switch

            case 'rose' : // on n'oublie pas les deux points
                alert('tu aimes le rose'); // les instructions qui doivent s'appliquer si on rentre dans ce cas.
                
            break; // On utilise Break pour indiquer qu'on a fini les instrcuitions dans ce cas

            case 'violet' :
                alert('tu aimes le violet');
            break; // A la fin de chaque cas, après le break on met un ;

            case 'orange' :
                alert('tu aimes le orange');
            break;

            default : // la réponse si la variable n'entre dans aucun cas
                    alert("Dommage, ta couleur n'est pas dans la liste");
            break;        

    }
    */

// Exercice : Réécrire le switch avec des if et des else.
/*
        if(couleur == "rose")
        {
            alert('Tu aimes le rose');
        }else if(couleur == "violet")
        {
            alert('Tu aimes le violet');
        }
        else if(couleur == "orange")
        {
            alert("Tu aimes le orange");
        }
        else
        {
            alert("Ta couleur n'existe pas dans la liste");
        }
*/

// Exercice :

const email = "toto@email.fr";
const mdp = "0000";

/* Demander à l'utilisateur son email et son mot de passe
        Si les deux correspondent aux constantes alors envoyer le message vous êtes connecté email
        Sinnon on envoie le message les identifiants sont incorrects
        */

/**
 *
 * Demander la marque de votre voiture à l'utilisateur
 * si il répond audi, on envoie très jolie voiture
 * si il répond bmw, on envoie super voiture
 * si il répond mercedes, on envoie voiture géniale
 * sinon on envoie dommage que vous n'ayez pas d'audi, de bmw ou de mercedes.
 *
 * */

// Correction :

/* let emailUser = prompt("Saisissez votre email");
         let mdpUser = prompt("Saisissez votre mot de passe");

         if(emailUser == email && mdpUser == mdp)
         {
            alert("Vous êtes connecté.");
         }else{
            alert("Vos identifiants sont incorrects.");
         }
*/
// let car = prompt("Donnez la marque de votre voiture");

let car = "audi";

switch (car) {
  case "audi":
    // alert("Très jolie voiture");
    document.write("Très jolie voiture");
    break;

  case "bmw":
    //alert("Super voiture");
    document.write("Super voiture");
    break;

  case "mercedes":
    //alert("Voiture géniale");
    document.write("Voiture géniale");
    break;

  default:
    //alert("Dommage, vous n'avez pas ni audi, ni bmw ni mercedes");
    break;
}
// ------------------------------------------------------------------------------------------------------------
// -- 10 -- Les boucles
// ------------------------------------------------------------------------------------------------------------
// Boucle While
document.write("<h2>La Boucle While (tant que)</h2>");

let i = 0; // on initialise une varibale à 0
while (i <= 17) {
  // la condition de la boucle : "tant que i <= 5"
  document.write(i + "---"); // les instructions qui devront être executées tant que la condition est vrai.
  i++; // équivaut à i += 1
}

document.write("<br>");

// Exercice : retirer les "---" à la fin du dernier tour.
let j = 0;
while (j <= 17) {
  if (j === 17) {
    document.write(j);
  } else {
    document.write(j + "---");
  }
  j++;
}

/*
    VOCABULAIRE : 
    i++ veut dire incrémenter de 1, ajouter 1 à i
    i-- veut dire décréémenter de 1, retirer 1 à i
*/

/*
    Exercice : afficher un prompt qui permettra de taper le nom d'une couleur ou d'écrire stop
    tant que l'on écrit pas stop,  ajouter la couleur écrite dans une variable et afficher la liste des couleurs qui sont enregistrées dans
    la variable

*/

document.write("<br>");

/*let color = prompt("Veuillez saisir une couleur ou écrivez stop");
let stock = "";

while(color != "stop")
{
    stock += color + "--";
    
    color = prompt('Veuillez saisir une couleur ou écrivez stop');
}
document.write("Liste des couleurs : " + stock);

*/

// Boucle For
document.write("<h2>La Boucle For</h2>");

for (let k = 0; k <= 12; k++) {
  // initialisation; condition; incrémentation
  document.write(k + "/"); // instructions
}

document.write("<br>");

document.write("<table border=2 style='border-color: black;'>");
for (var l = 1; l <= 100; l += 10) {
  document.write("<tr>");
  for (let n = l; n <= l + 9; n++) {
    document.write("<td>" + n + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");

// Boucle Do While
document.write("<h2>La Boucle Do While</h2>");
let o = 2;

do {
  document.write(
    "<p>Ce code s'execute une seule fois car le condition n'est jamais respectée.</p>"
  ); // ce code s'éxécute une première fois
  // sans se soucier de vérifier la condition
  document.write("<p> La valeur de o est : " + o + "</p>");
} while (o > 5); // Le code écrit dans le do ne s'éxécute ensuite que si la condition est respectée.

// ------------------------------------------------------------------------------------------------------------
// -- 11 -- Les fonctions prédéfinies
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les fonctions prédéfinies</h2>");

/* Comme dans tous langage de programmation, JS possède des fonctions.
    Les fonctions sont des morceaux de codes encapsulés qu'on appelle ensuite en de besoin pour éxécuter une action précise.
    On distingue deux types de fonctions : les fonctions prédéfinies (qui existent dans JS) et les fonctions utilisateurs
    (fonctions créées par les utilisateurs/développeurs d'un site).
*/

// Déclaration d'une variable
let phrase = "Salut, je suis Roger";
document.write(phrase + "<br>");
// Cette variable contient du texte. C'est en fait un objet String. Elle possède plusieurs fonctions et une propriété.

//indexOf
document.write(
  "Roger se trouve à la position : " + phrase.indexOf("Roger") + "<br>"
);
// La méthode indxOf retourne la position de la 1ère lettre de "Roger" dans la phrase
// (le décompte commence à 0).
// arguments = paramètres = parameters (anglais) : tout ce qui se trouve à l'interieur des () d'une fonction.

// substr
let phrase1 = "Bonjour Pierre, comment vas-tu ?";
let decoupe = phrase1.substr(8, 6); // la fonction "substr" permet de récupérer un morceau de la chîne de caractères.
// 1er argument : où commence la découpe, 2ème argument : de combien de caractères.
document.write(decoupe + "<br>"); // Pierre

// substring
let decoupe2 = phrase1.substring(8, 14); // Fait la même chose que substr() sauf que le 2ème argument est la position d'arrêt.
document.write(decoupe2 + "<br>"); // Pierre
document.write("Bonjour Roberd comment vas-tu ?".substring(8, 14) + "<br>");

// Divers : valueOf + toLowerCase + toUpperCase
document.write(phrase.valueOf() + "<br>"); // valueOf() retourne la valeur de la variable "phrase". Elle n'a pas besoin d'arguments.
document.write(phrase.toLowerCase() + "<br>"); // passe tout en minuscule
document.write(phrase.toUpperCase() + "<br>"); // passe tout en majuscule
document.write(phrase.length + "<br>"); // Ce n'est pas une fonction mais une propriété de la variable donc elle ne demande par de paranthèse;
//elle permet d'obtenir la longeur d'une chaîne de caractères.

/*
        Pour trouver les fonctions prédéfinis de JavaScript il faut utiliser le documentation !!!!!
        Exemple : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions
    */

// ------------------------------------------------------------------------------------------------------------
// -- 12 -- Les fonctions utilisateurs
// ------------------------------------------------------------------------------------------------------------
/* "Don't Repeat Yourself Dry"
    Principe philisophique de la programmation : ne pas répéter son travail.
    A chaque qu'on répète une action, c'est qu'on peut créer une fonction utilisateur et ainsi on évite la répétition du code l'action
*/
document.write("<h2>Les fonctions utilisateurs</h2>");

// la manière appelée FUNCTION STATEMENT (déclaration de fonction)
function maFonction() {
  // par convention : espace après function avant l'ouverture d'une parenthèse
  // ici le code à éxécuter
  return document.write("<p>Il fait très froid aujourd'hui</p>");
}

// Exécution de la fonction
maFonction();

// La manière appelée FUNCTION OPERATOR (opérateur de fonction)
let maFonction2 = function () {
  return document.write("<p>Il y a beaucoup de vent</p>");
};

// Exécution de la function
maFonction2();

console.log(maBoite);

// Fonction fléchée
let hello = () => {
  document.write("Hello ! <br>");
};

const goodBye = () => {
  document.write("Good Bye ! <br>");
};

hello();
goodBye();

// Fonctions qui a besoin d'arguments
function direBonjour(prenom) {
  var message = document.write(
    "<p>Bonjour " + prenom + ". Comment vas-u ?</p>"
  );
  return message;
}

direBonjour("Rolland");

const direAuRevoir = (prenom) => {
  document.write("<p>Au revoir " + prenom + " . A bientôt.</p>");
};

direAuRevoir("Valéry Giscard d'Estaing");

/* Par convention nous déclarons toujours une fonction AVANT de l'éxécuter, cependant si nous déclarons une fonction APRES l'avoir
    éxécutée le code ne focntionnera que si la déclaration s'est faite de manière directe (sans le let ou le var our le const);
    */

function meteo(saison, temperature) {
  return document.write(
    "Nous sommes en " + saison + " et il fait " + temperature + " degré(s)"
  );
}

meteo("automne", 10);

// Exercice : dans un fonction exometeo faire en sorte que degré s'écrive avec un s au pluriel et sans s au singulier
// et penser aux articles ("au" printemps, "en" hiver).

const exometeo = (saison, temperature) => {
  let art = "en ";
  let term = " degré";
  if (saison === "printemps") {
    art = "au ";
  }
  if (temperature > 1 || temperature < -1) {
    term = " degrés";
  }
  //document.write("Nous sommes " , art , saison , " et il fait " , temperature , term , "."); concaténation avec virgule
  document.write(
    "Nous sommes " + art + saison + " et il fait " + temperature + term + "."
  );
};

exometeo("été", 25);

// ------------------------------------------------------------------------------------------------------------
// -- 13 -- Les tableaux
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les tableaux</h2>");

let fruits = ["Banane", "Orange", "Pomme", "Mango"];
console.log(fruits);

let monTableau = ["Emilie", "Magalie", "Eric", "José", 42, 789]; // Déclaration et affectation en même temps (version la plus utilisée)
document.write(monTableau); // affiche la totalité d'un tableau
document.write("<br>");
document.write(monTableau[0]); // affiche un élément en particulier : Emilie
document.write("<br>");
document.write(monTableau[2]); // affiche un élément en particulier : Eric

// Remplacement de José par Rafael
monTableau[3] = "Rafael";
document.write("<br>");
document.write(monTableau[3]);

console.log(monTableau);

console.log(monTableau.length);

let monSuperTableau = [
  "Winry Rockbell",
  "Alphonse Elric",
  "Edward Elric",
  "Roy Mustang",
  "Riza Hawkeye",
  "King Bradley",
  "Alex Louis Amstrong",
  "Van Hohenheim",
  126,
  568,
  true,
  false,
];

document.write("<br>");

let max = monSuperTableau.length; // nous stockons le nombre d'index dans une variable

for (let i = 0; i < max; i++) {
  document.write(monSuperTableau[i] + "-----");
}

// Autre manière de déclarer un tableau:
let monAutreTableau = Array("Edward", "Noemie", 745);
let encoreUnAUtreTableau = new Array("Pile", "Face");

document.write("<br>");

// Tableau multidimentionnel
let deuxDimensions = [
  ["fraises", "pommes", "bananes"],
  ["tomates", "carottes", "courgettes"],
];
document.write(deuxDimensions[0][2]); //affiche bananes
document.write("<br>");
let deuxDimensionsBis = [
  ["Chocolat", "Vanille", "Noisette", ["Crème", "Framboise"], false],
  ["Citron", "Caramel", "Nutella", 456, true],
];
document.write(deuxDimensionsBis[0][3][1]); // affiche Framboise

document.write("<br>");

// Comme le type Array (Tableau) est en réalité un objet et que chaque index est en fait une propriété,
// nous avons la possibilté d'utiliser la syntaxe des objet pour afficher le contenu du tableau ou le parcourir

let monDernierTableau = ["Batman", "Superman", "Wonder Woman"];

// On pourra utiliser la boucle FOR IN ou FOREACH

// La Boucle FOR IN (utilisée pour les objets)
// Boucle qui permet de réaliser du code sur chaque élément d'in objet qui seront discriminés par une propriété
// dans un tableau cette propriété est l'index
for (let index in monDernierTableau) {
  document.write(monDernierTableau[index] + ", <br>");
}

// La Boucle ForEach (spécifique au tableau)
// Boucle qui permet de réaliser du code sur chaque élément d'un tableau
monDernierTableau.forEach((element) => document.writeln(element));

// Il existe des tableaux où les index numériques sont remplacés par des mots, on les appelle des tableaux associatifs,
// ceux sont en fait des objets qu'on utilise comme des tableaux, dans ce cas certaines fonctionnalités ne marchent plus (ex : lenght);

// ------------------------------------------------------------------------------------------------------------
// -- 14 -- Les Objets
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Les Objets</h2>");

let monObjet = {}; // Création de la manière appelée OBJECT LITERAL NOTATION
monObjet.sonPrenom = "Tommy"; // remplissage de monObjet
// console.log(monObjet);
monObjet["sonNom"] = "Legend"; // autre manière de remplir monObjet
console.log(monObjet);

let monAutreObjet = new Object(); // autre manière de créer un objet appelée CONSTRUCTOR
monAutreObjet.hisFirstname = "Jason"; // remplissage
monAutreObjet.hisName = "Todd"; // remplissage
console.log(monAutreObjet);

document.write(monObjet.sonPrenom + "<br>"); // affiche Tommy
document.write(monObjet["sonNom"]); // affiche Legend

let songoku = {
  nom: "Son",
  prenom: "Goku",
  age: 45, // pas de point virgule (ni de virgule pour la dernière propriété)
};

// Exercice rajouter une propriété femme qui aura pour valeur "Chichi"
// afficher cette propriété.

// Remplissage
songoku.femme = "Chichi";
document.write(songoku.femme + "<br>"); // affiche Chichi

songoku.enfant = ["Gohan", "Goten"]; // la propriété enfant est de type Array (Tableau)
document.write(songoku.enfant[0] + "<br>"); // affiche Gohan

console.log(songoku);

let maVoiture = {
  // je créée et je remplie mon objet
  marque: "Audi", // propriété de type string
  modele: "RSQ8",
  couleur: "Rouge",
  changeDeCouleur: function (nouvelleCouleur) {
    // fonction de mon objet qui va permettre de changer de couleur
    return (this.couleur = nouvelleCouleur);
    // le mot clé this veut dire lui même (il fait donc référence à l'objet dans lequel on se trouve)
  },
  optionsDeSerie: ["climatisation", "autoradio", "park-assist", "cuir"], // propriété de type "array" (tableau)
  annee: 2018, // propriété de type number
  toitOuvrant: true, // propriété de type boolean
  infos: function () {
    // fonction
    let marqueFonction = this.marque,
      modeleFonction = this.modele,
      couleurFonction = this.couleur,
      optionsDeSerieFonction = this.optionsDeSerie,
      anneeFonction = this.annee,
      toitOuvrantFonction = this.toitOuvrant;

    if (toitOuvrantFonction === true) {
      toitOuvrantFonction = "Toit ouvrant installé";
    } else {
      toitOuvrantFonction = "Pas de toit Ouvrant";
    }

    document.write("Les informations de ma voiture sont : <br>");
    document.write(
      "Marque : " +
        marqueFonction +
        "<br>" +
        "Modele : " +
        modeleFonction +
        "<br>" +
        "Couleur : " +
        couleurFonction +
        "<br>" +
        "Année : " +
        anneeFonction +
        "<br>" +
        "Options de série : " +
        optionsDeSerieFonction +
        "<br>" +
        "Toit ouvrant : " +
        toitOuvrantFonction +
        "<br>"
    );
  },
  motorisation: {
    // propriété de type objet
    energie: "essence",
    puissance: "600 cv",
    hybridation: false,
  },
};

document.write(maVoiture.marque + "<br>"); // Nous retiendrons cette écrire pour l'accés à l'information d'un objet (et non maVoiture['marque'])

maVoiture.infos();

document.write(maVoiture.couleur + "<br>");

maVoiture.changeDeCouleur("Bleu"); // accés à une fonction de mon objet, qui me permet ici de changer la couleur de la voiture

document.write(maVoiture.couleur + "<br>");

maVoiture.infos();

document.write(maVoiture.motorisation.puissance + "<br>");

// La Boucle FOR IN
document.write("<strong>La boucle FOR IN</strong><br>");

for (let monElement in maVoiture) {
  // Syntaxe pour récupérer les noms des éléments (propriétés et méthodes) de notre objet
  document.write(monElement + "<br>");
}

document.write("<hr>");

for (let monElement in maVoiture) {
  // Syntaxe pour récupérer les valeurs des éléments de l'objet
  document.write(maVoiture[monElement] + "<br>");
}

// ------------------------------------------------------------------------------------------------------------
// -- 15 -- THIS
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>THIS</h2>");

// Les classes en JavaScript n'existe pas. Nous pouvons par contre créer des fonctions qui vont fabriquer des objets.
// Comme le ferait une classe en PHP. Une fonction qui fabrique des objets on l'appelle un constructeur.

function Animal(nom, espece, categorie, age) {
  // un constructeur a TOUJOURS sa première lettre en MAJUSCULE
  (this.nom = nom),
    (this.espece = espece),
    (this.categorie = categorie),
    (this.age = age),
    (this.changeAge = function (nouvelAge) {
      this.age = nouvelAge;
      return this.age;
    });
  this.celebre = {
    nom: "Flipper",
    prenom: "Machin",
    fct: function () {
      this.nom = "Flipper 2"; // this c'est référence à l'objet parent direct: ici celebre
    },
  };
}

let dauphin = new Animal("Flipper", "Dauphin", "Mammifère", 4); // Nous créeons un Dauphin avec notre constructeur
// Exercice : afficher toutes les valeurs des propriétés et changer l'age de dauphin.

document.write(dauphin.nom + "<br>");
document.write(dauphin.espece + "<br>");
document.write(dauphin.categorie + "<br>");
document.write(dauphin.age + "<br>");
dauphin.changeAge(17);
document.write(dauphin.age + "<br>");
dauphin.nom = "Flip";
document.write(dauphin.nom + "<br>");

// Conclusion : Le "this" réfère toujours à l'objet parent direct.

// ------------------------------------------------------------------------------------------------------------
// -- 16 -- PROTOTYPAGE
// ------------------------------------------------------------------------------------------------------------
document.write("<h2>Le prototypage</h2>");

/*
    Le prototypage consiste à ajouter une propriété ou une méthode à notre constructeur,
    ainsi tous les objets issus de ce constructeur se verront attribuer ce qu'on a assigné dans le prototype.

*/

function Voiture(marque) {
  // constructeur
  this.marque = marque;
}

let megane = new Voiture("Renault");
console.log(megane);
megane.demarrer = function () {
  return alert("Vroom !");
};
megane.demarrer(); // affiche Vroom !
console.log(megane);

let m6 = new Voiture("BMW");
console.log(m6);
console.log(m6.demarrer); // undefined car démarrer n'appartient qu'à megane
