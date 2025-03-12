//  -----------------------------------------------
//  ----------  /javascript-jhon-mircha/  ---------
//  ----------  /01-tipos-de-datos/  --------------
//  ----------  /04-constantes-const.js  ----------
//  -----------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("------------------------------------------------------");
console.warn("-----  04-constantes-const.js  --  cargado  ----------");
console.warn("------------------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  -------------------------------------------
//  ----------  Variables con CONST  ----------
//  -------------------------------------------

console.warn("**********  CONST  **********");
console.log("\n");


const PI = 3.1416;
console.log("constante PI: ", { PI });

const objeto = {
    nombre: 'Antonio',
    edad: 48
}

const colores = ['blanco', 'negro', 'azul'];

console.log("objeto: ", { objeto });
console.log("colores: ", { colores });

console.log("objeto.correo: ", objeto.correo = 'antonicut@gmail.com');

console.log("colores[3]: ", colores[3] = 'anaranjado');
console.log({ colores });

console.log("colores[4]: ", colores.push('verdoso'));
console.log({ colores });


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 4 - Constantes CONST </h2>
                
                <pre class="main__content">

                    //  -------------------------------------------
                    //  ----------  Variables con CONST  ----------
                    //  -------------------------------------------

                    console.warn("**********  CONST  **********");
                    
                    const PI = 3.1416;
                    console.log("constante PI: ", { PI });

                    const objeto = {
                        nombre: 'Antonio',
                        edad: 48
                    }

                    const colores = ['blanco', 'negro', 'azul'];

                    console.log("objeto: ", { objeto });
                    console.log("colores: ", { colores });

                    console.log("objeto.correo: ", objeto.correo = 'antonicut@gmail.com');

                    console.log("colores[3]: ", colores[3] = 'anaranjado');
                    console.log({ colores });

                    console.log("colores[4]: ", colores.push('verdoso'));
                    console.log({ colores });

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain(layoutMain);
