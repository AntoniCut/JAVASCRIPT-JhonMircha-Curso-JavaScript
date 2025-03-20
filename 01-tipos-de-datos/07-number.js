//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /07-numbers.js  --------------------
//  ------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("---------------------------------------------");
console.warn("-----  07-numbers.js  --  cargado  ----------");
console.warn("---------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  -------------------------------
//  ----------  Numbers  ----------
//  -------------------------------

console.warn("**********  Números  **********");
console.log("\n");


let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d);
console.log("c.toFixed(1): ", c.toFixed(1));
console.log("c.toFixed(5): ", c.toFixed(5));
console.log("parseInt(c): ", parseInt(c));
console.log("parseFloat(c):", parseFloat(c));
console.log("typeof c, typeof d:", typeof c, typeof d);
console.log("a + b:", a + b);
console.log("c + parseInt(d):", c + parseInt(d));
console.log("c + parseFloat(d):", c + parseFloat(d));
console.log("c + Number.parseInt(d):", c + Number.parseInt(d));
console.log("c + Number.parseFloat(d):", c + Number.parseFloat(d));


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 7 - Numbers </h2>
                
                <pre class="main__content">

                    <code>

                        console.warn("**********  Números  **********");
                        
                        let a = 2;
                        let b = new Number(1);
                        let c = 7.19;
                        let d = "5.6";

                        console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d);
                        console.log("c.toFixed(1): ", c.toFixed(1));
                        console.log("c.toFixed(5): ", c.toFixed(5));
                        console.log("parseInt(c): ", parseInt(c));
                        console.log("parseFloat(c):", parseFloat(c));
                        console.log("typeof c, typeof d:", typeof c, typeof d);
                        console.log("a + b:", a + b);
                        console.log("c + parseInt(d):", c + parseInt(d));
                        console.log("c + parseFloat(d):", c + parseFloat(d));
                        console.log("c + Number.parseInt(d):", c + Number.parseInt(d));
                        console.log("c + Number.parseFloat(d):", c + Number.parseFloat(d));
                    
                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain();
