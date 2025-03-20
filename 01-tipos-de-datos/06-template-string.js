//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /06-template-string.js  ------------
//  ------------------------------------------------


import { layout } from "../assets/js/layout.js";
import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("-----------------------------------------------------");
console.warn("-----  06-template-string.js  --  cargado  ----------");
console.warn("-----------------------------------------------------");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');


//  -----  actualizamos la layout  -----
updateLayout();


//  -------------------------------------------------
//  ----------  Cadenas de Texto - String  ----------
//  -------------------------------------------------

console.warn("**********  Template String  **********");
console.log("\n");

let nombre = "Antonio";
let apellido = "Cutillas";


{
    let nombre = "Antonio";
    let apellido = "Cutillas";

    //  -----  Concatenación de Variables  -----
    let saludo2 = "Hola mi nombre es " + nombre + " " + apellido + ".";
    console.log(saludo2);

    //  -----  Interpolción de variables  -----
    //  -----  Template String  -----
    let saludo3 = `Hola mi nombre es ${nombre} ${apellido}.`;
    console.log(saludo3);

    let ul1 = "<ul> <li> Primavera </li> <li> Verano </li> <li> Otoño </li> <li> Invierno </li> </ul>";
    console.log("ul1: ", ul1);

    let ul2 = `
                 <ul>
                     <li>Primavera</li>
                     <li>Verano</li>
                     <li>Otoño</li>
                     <li>Invierno</li>
                 </ul>
            `;
    console.log("ul2 - template string: ", ul2);

    let ul3 = ` <ul> <li> Primavera </li> <li> Verano </li> <li> Otoño </li> <li> Invierno </li> </ul> `;
    console.log("ul3 - template string: ", ul3);


    let ul4 = "<ul>";
    ul4 += "<li> Primavera</li>";
    ul4 += "<li>Verano</li>";
    ul4 += "<li>Otoño</li>";
    ul4 += "<li>Invierno</li>";
    ul4 += "</ul>";

    console.log("ul4", ul3);

}



//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------


const renderLayoutMain = (nombre, apellido) => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 6 - Template String </h2>
                
                <pre class="main__content">

                    <code>
                    
                        console.warn("**********  Template String  **********");

                        {
                            let nombre = "Antonio";
                            let apellido = "Cutillas";

                            //  -----  Concatenación de Variables  -----
                            let saludo2 = "Hola mi nombre es " + nombre + " " + apellido + ".";
                            console.log(saludo2);

                            //  -----  Interpolción de variables  -----
                            //  -----  Template String  -----
                            let saludo3 = 'Hola mi nombre es ${nombre} ${apellido}.';
                            console.log(saludo3);

                            let ul1 = "
                                <ul> 
                                    <li> Primavera </li> 
                                    <li> Verano </li> 
                                    <li> Otoño </li> 
                                    <li> Invierno </li> 
                                </ul>";
                            console.log("ul1: ", ul1);

                            let ul2 = '
                                        <ul>
                                            <li> Primavera </li>
                                            <li> Verano </li>
                                            <li> Otoño </li>
                                            <li> Invierno </li>
                                        </ul>
                                    ';
                            console.log("ul2 - template string: ", ul2);

                            let ul3 = ' 
                                <ul> 
                                    <li> Primavera </li> 
                                    <li> Verano </li> 
                                    <li> Otoño </li> 
                                    <li> Invierno </li> 
                                </ul> ';
                            console.log("ul3 - template string: ", ul3);


                            let ul4 = "<ul>";
                            ul4 += "<li> Primavera</li>";
                            ul4 += "<li>Verano</li>";
                            ul4 += "<li>Otoño</li>";
                            ul4 += "<li>Invierno</li>";
                            ul4 += "</ul>";

                            console.log("ul4", ul3);

                        }

                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}


renderLayoutMain(nombre, apellido);
