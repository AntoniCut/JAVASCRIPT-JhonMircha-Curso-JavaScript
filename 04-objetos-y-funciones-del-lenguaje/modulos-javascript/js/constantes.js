//  -------------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -----------------------
//  ----------  /04-objetos-y-funciones-del-lenguaje/  ----------
//  ----------  /constantes.js ----------------------------------
//  -------------------------------------------------------------


console.clear();
console.warn("**********  constantes.js  **********");
console.log("\n");


export const PI = Math.PI;
export let usuario = "Jon";

const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");


export default function saludarFunction() {
    console.log("Hola Módulos +ES6");
}


export class SaludarClass {
    constructor() {
        console.log("Hola Clases +ES6");
    }
}
