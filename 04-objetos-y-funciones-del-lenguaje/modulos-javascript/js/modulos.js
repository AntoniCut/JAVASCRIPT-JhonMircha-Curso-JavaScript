//  -------------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -----------------------
//  ----------  /04-objetos-y-funciones-del-lenguaje/  ----------
//  ----------  /modulos.js -------------------------------------
//  -------------------------------------------------------------


console.clear();
console.warn("**********  modulos.js  **********");
console.log("\n");


import saludarFunction, { SaludarClass, PI, usuario } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";
import { aritmetica as calculos } from "./aritmetica.js";



console.log(PI, usuario);
console.log('aritmetica.sumar(3, 4) =>', aritmetica.sumar(3, 4));
console.log('aritmetica.restar(3, 4) =>', aritmetica.restar(3, 4));
console.log('calculos.sumar(3, 4) =>', calculos.sumar(3, 4));
console.log('calculos.restar(3, 4) =>', calculos.restar(3, 4));

saludarFunction();

let saludo = new SaludarClass();
saludo;





