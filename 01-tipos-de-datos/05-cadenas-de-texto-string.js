//  ------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------------
//  ----------  /01-tipos-de-datos/  ---------------------
//  ----------  /05-cadenas-de-texto-string.js  ----------
//  ------------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("-------------------------------------------------------------");
console.warn("-----  05-cadenas-de-texto-string.js  --  cargado  ----------");
console.warn("-------------------------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');


//  -----  actualizamos la layout  -----
updateLayout();


//  -------------------------------------------------
//  ----------  Cadenas de Texto - String  ----------
//  -------------------------------------------------

console.warn("**********  String  **********");
console.log("\n");

//  -----  Propiedades  -----
let nombre = "Antonio";
let apellido = "Cutillas";
let saludo = new String("Hola Mundo!!!");
console.log({
    nombre,
    longitud: nombre.length,
    apellido,
    longitud: apellido.length,
    saludo,
    longitud: saludo.length
});

console.log(
    nombre,
    nombre.length,
    apellido,
    apellido.length,
    saludo,
    saludo.length
);

console.log("Minusculas: ",
    nombre.toLowerCase(),
    apellido.toLowerCase(),
    saludo.toLowerCase()
);

console.log("Mayusculas: ",
    nombre.toUpperCase(),
    apellido.toUpperCase(),
    saludo.toUpperCase()
);

let lorem = "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae eveniet suscipit velit explicabo repellat esse, a quaerat, gni ipsam iure     error dolorem alias tempore quod, consectetur saepe blanditiis pariatur          ."


console.log("Lorem: ", lorem);
console.log("Lorem Incluye amet: ", lorem.includes('amet'));    //  si la palabra esta incluido en el string. 
console.log("Metodo trim() para lorem: ", lorem.trim());        //  quita los espacios en blanco.
console.log("Metodo split() para lorem: ", lorem.split(" "));   //  separa el string por espacios en blanco.


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 5 - Cadenas de Texto - String </h2>
                
                <pre class="main__content">

                    //  -------------------------------------------------
                    //  ----------  Cadenas de Texto - String  ----------
                    //  -------------------------------------------------

                    console.warn("**********  String  **********");
                    
                    //  -----  Propiedades  -----
                    let nombre = "Antonio";
                    let apellido = "Cutillas";
                    let saludo = new String("Hola Mundo!!!");
                    console.log({
                        nombre,
                        longitud: nombre.length,
                        apellido,
                        longitud: apellido.length,
                        saludo,
                        longitud: saludo.length
                    });

                    console.log(
                        nombre,
                        nombre.length,
                        apellido,
                        apellido.length,
                        saludo,
                        saludo.length
                    );

                    console.log("Minusculas: ",
                        nombre.toLowerCase(),
                        apellido.toLowerCase(),
                        saludo.toLowerCase()
                    );

                    console.log("Mayusculas: ",
                        nombre.toUpperCase(),
                        apellido.toUpperCase(),
                        saludo.toUpperCase()
                    );

                    let lorem = "          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Ducimus vitae eveniet suscipit velit explicabo repellat esse, a quaerat, gni ipsam iure     
                                 error dolorem alias tempore quod, consectetur saepe blanditiis pariatur          ."


                    console.log("Lorem: ", lorem);
                    console.log("Lorem Incluye amet: ", lorem.includes('amet'));    //  si la palabra esta incluido en el string. 
                    console.log("Metodo trim() para lorem: ", lorem.trim());        //  quita los espacios en blanco.
                    console.log("Metodo split() para lorem: ", lorem.split(" "));   //  separa el string por espacios en blanco.

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain(layoutMain);


