//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /09-undefined-null-nan.js ----------
//  ------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("--------------------------------------------------------");
console.warn("-----  09-undefined-null-nan.js  --  cargado  ----------");
console.warn("--------------------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  ---------------------------------------------
//  ----------  undefined, null & NaN  ----------
//  ---------------------------------------------

console.warn("**********  undefined, null, NaN  **********");
console.log("\n");

//  -----  undefined indica que no se ha inicializado una variable y que el valor está ausente  -----
let indefinida;
console.log("\nlet indefinida", indefinida);

//  -----  null es un valor especial que indica la ausencia de un valor  -----
let nulo = null;
console.log("\nlet nulo = null", nulo);

//  -----  NaN - Not a Number  -----
let noEsUnNumero = "hola" * 3.7;
console.log('\nlet noEsUnNumero = "hola" * 3.7', noEsUnNumero);


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 9 - Undefined, Null, NaN </h2>
                
                <pre class="main__content">

                    <code>

                        console.warn("**********  undefined, null, NaN  **********");

                        //  -----  undefined indica que no se ha inicializado una variable y que el valor está ausente  -----
                        let indefinida;
                        console.log("let indefinida", indefinida);

                        //  -----  null es un valor especial que indica la ausencia de un valor  -----
                        let nulo = null;
                        console.log("let nulo = null", nulo);

                        //  -----  NaN - Not a Number  -----
                        let noEsUnNumero = "hola" * 3.7;
                        console.log('let noEsUnNumero = "hola" * 3.7', noEsUnNumero);
                                            
                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain();

