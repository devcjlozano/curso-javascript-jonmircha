/* console.log(window);
console.log(document);

const texto = "Hola, soy Carlos Javier Lozano da Madrid";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

/* console.log("************ Elementos del documento **************");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2> Hola mundo desde el DOM </h2>"); */
/* 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu")); */

/* Los tres primero selectores han sido sustituidos por el querySelector.
El querySelector va más lento que el getElementById ya que analiza si es o no una id*/
/* console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); */

// Data-Atributtes

/* console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete al canal de Jon Mirha y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

// DOM: ESTILOS y VARIABLES CSS

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style); */

// Variables CSS - Custom Properties CSS

/* const $html = document.documentElement;
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */

// DOM: Clases css

/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */

// DOM: Texto y html

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
  <p> 
    El modelo de Objetos del Documento(<b><i>DOM- Document Object Model</i></b>) es un API para
    documentos HTML y XML
  </p>
  <p>
   Este proveé una representación estructural del documento, permitiendo modificar su contenido y 
   presentación visual mediante código JS
  </p>
  <p>
    <mark> El DOM no es parte de la especificación del JavaScript, es una API para los navegadores. </mark>
  </p>
`;

// $whatIsDOM.innerText = text; // Creada para internet explorer, no es la standard
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */

// DOM Traversing: Recorriendo el DOM

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

// DOM: Creando Elementos y Fragmentos

/* const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");

const $cards = document.querySelector(".cards");
const $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// No es buena práctica crear los elmentos con innerHTML (No creas como tal un nodo html)
$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People" />
  <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");

// document.write no es buena práctica

document.write("<h3> Estaciones del año </h3> ");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
const $ul2 = document.createElement("ul");

document.write("<h3> Continentes del Mundo </h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(
  (el) =>
    ($ul2.innerHTML += `
   <li> ${el}</li>
`)
);

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const $ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3> Meses del año </h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

// DOM: Templates HTML

/* const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

const cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

// DOM: Modificando elementos (old style)

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figCaption>Any</figCaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);

document.body.appendChild($cloneCards); */

// DOM: Modificando elementos (cool style)

/*
  .insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

  Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(último hijo)
    afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figCaption></figCaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("afterbegin", $newCard);
/* $cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard); */

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard); */

/*************** DOM: Manejadores de eventos ********************/

function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("eventoSemantico");
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola mundo manejador de eventos semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo manejador de eventos múltiple");
  console.log(e.type);
  console.log(e.target);
  console.log(e);
});
