import saludar, {Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js")

console.log(PI, usuario)
console.log(calculos.sumar(3, 4))

saludar();
const saludo = new Saludar();
saludo