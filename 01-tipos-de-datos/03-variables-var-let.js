//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /03-variables-var-let.js  ----------
//  ------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("-------------------------------------------------------");
console.warn("-----  03-variables-var-let.js  --  cargado  ----------");
console.warn("-------------------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  -----------------------------------------
//  ----------  Variables con VAR  ----------
//  -----------------------------------------

console.log("\n\n");
console.warn("**********  VAR  **********");
console.log("\n");

var hola = 'Hola Mundo';
let hello = 'Hello Word';

function miFuncion() {
    console.log('Mi Función');
}

console.log(miFuncion());
console.log("Windows: ", window);
console.log("Windows.hola: ", window.hola);
console.log("Windows.hello: ", window.hello);


var musica = 'Rock';
console.log('Variable Musica con var antes del bloque: ', musica);


//  -----  Esto es un Bloque  -----
{
    var musica = 'Heavy';
    console.log(console.log('Variable Musica con var dentro del bloque: ', musica));
}

console.log(console.log('Variable Musica con var despues del bloque: ', musica));



//  -----------------------------------------
//  ----------  Variables con LET  ----------
//  -----------------------------------------

console.log("\n\n");
console.warn("**********  LET  **********");
console.log("\n");


let musica2 = 'Rock';
console.log('Variable Musica2 con let antes del bloque: ', musica2);

//  -----  Esto es un Bloque  -----
{
    let musica2 = 'Heavy';
    console.log('Variable Musica con let dentro del bloque: ', musica2);
}

console.log('Variable Musica con let despues del bloque: ', musica2);




//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 3 - Variables VAR y LET </h2>
                
                <pre class="main__content">
                
                    //  -----------------------------------------
                    //  ----------  Variables con VAR  ----------
                    //  -----------------------------------------

                    var hola = 'Hola Mundo';
                    let hello = 'Hello Word';

                    function miFuncion() {
                        console.log('Mi Función');
                    }

                    console.log(miFuncion());
                    console.log("Windows: ", window);
                    console.log("Windows.hola: ", window.hola);
                    console.log("Windows.hello: ", window.hello);

                    var musica = 'Rock';
                    console.log('Variable Musica con var antes del bloque: ', musica);

                    //  -----  Esto es un Bloque  -----
                    {
                        var musica = 'Heavy';
                        console.log(console.log('Variable Musica con var dentro del bloque: ', musica));
                    }

                    console.log(console.log('Variable Musica con var despues del bloque: ', musica));


                    //  -----------------------------------------
                    //  ----------  Variables con LET  ----------
                    //  -----------------------------------------

                    let musica2 = 'Rock';
                    console.log('Variable Musica2 con let antes del bloque: ', musica2);

                    //  -----  Esto es un Bloque  -----
                    {
                        let musica2 = 'Heavy';
                        console.log('Variable Musica con let dentro del bloque: ', musica2);
                    }

                    console.log('Variable Musica con let despues del bloque: ', musica2);

                </pre>
                      
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain(layoutMain);
