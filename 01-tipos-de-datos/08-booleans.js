//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /08-booleans.js --------------------
//  ------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("----------------------------------------------");
console.warn("-----  08-booleans.js  --  cargado  ----------");
console.warn("----------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  --------------------------------
//  ----------  Booleans  ----------
//  --------------------------------

console.warn("**********  Booleans  **********");
console.log("\n");


let verdadero = true;
let falso = false;
console.log("verdadero: ", verdadero, "falso: ", falso);

let v = Boolean(true);
let f = Boolean(false);
console.log("\nlet v = Boolean(true); ", verdadero, "\nlet f = Boolean(false)", falso);

//console.log(verdadero, falso, v, f);
console.log("\ntypeof verdadero", typeof verdadero, "\ntypeof falso", typeof falso);

console.log("\nBoolean(0)", Boolean(0));
console.log("\nBoolean(-7)", Boolean(-7));
console.log('\nBoolean("")', Boolean(""));
console.log('\nBoolean(" ")', Boolean(" "));


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 8 - Booleans </h2>
                
                <pre class="main__content">

                    <code>

                        console.warn("**********  Booleans  **********");
                        
                        let verdadero = true;
                        let falso = false;
                        console.log("verdadero: ", verdadero, "falso: ", falso);

                        let v = Boolean(true);
                        let f = Boolean(false);
                        console.log("let v = Boolean(true); ", verdadero, "let f = Boolean(false)", falso);

                        //console.log(verdadero, falso, v, f);
                        console.log("typeof verdadero", typeof verdadero, "typeof falso", typeof falso);

                        console.log("Boolean(0)", Boolean(0));
                        console.log("Boolean(-7)", Boolean(-7));
                        console.log('Boolean("")', Boolean(""));
                        console.log('Boolean(" ")', Boolean(" "));
                                            
                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain();
