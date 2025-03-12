//  --------------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ------------------------
//  ----------  /05-ejercicios-logica-de-programacion/  ----------
//  ----------  /01-ejercicio-1.js -------------------------------
//  --------------------------------------------------------------


//  1 -  Programa una función que cuente el número de caracteres de una cadena de texto, 
//       pe. miFunción("Hola Mundo") devolverá 10 


console.clear();
console.warn("**********  ejercicio 1 de Lógica de Programación JavaScript  **********");
console.log("\n");


//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  variables  -----
const mainHeader = '1 -  Programa una función que cuente el número de caracteres de una cadena de texto, por ejemplo. miFunción("Hola Mundo") devolverá 10';

let mainLabelFunction = '';
let mainResultFunction = '';

let mainLabelArrow = '';
let mainResultArrow = '';

//  -----  Introducir datos  -----
let cadena = prompt('Introduce una cadena de texto:');


//  -------------------------------------------------------
//  ----------  Utilizando funciones declaradas  ----------
//  -------------------------------------------------------

contarCaracteresFunction( cadena );

function contarCaracteresFunction( cadena = "" ) {

    if(!cadena) {
        
        console.log('\n');
        console.warn('Resultado con function');
        console.warn('No ingresaste ninguna cadena');
                
        mainLabelFunction = 'Resultado con function';
        mainResultFunction = 'No Ingresasre ninguna cadena';

    } else {
        
        console.log('\n');
        console.warn('Resultado con Function');
        console.info(`La cadena: ${cadena} tiene ${cadena.length} caracteres`);
        
        mainLabelFunction = 'Resultado con function';
        mainResultFunction = `La cadena: ${cadena} tiene ${cadena.length} caracteres`;
    }

}

//  ------------------------------------------------------------------------
//  ----------  Utilizando funciones expresadas (arrow function)  ----------
//  ------------------------------------------------------------------------

const contarCaracteresArrow = ( cadena = "" ) => !cadena ? error() : info(cadena)
                    

const error = () => {
    console.log('\n');
    console.warn('Resultado con función expresada');
    console.warn('No ingresaste ninguna cadena');
    mainLabelArrow = 'Resultado con funcion expresada';
    mainResultArrow = 'No Ingresasre ninguna cadena';
}

const info = ( cadena ) => {
    console.log('\n');
    console.warn('Resultado con función expresada');
    console.info(`La cadena: ${cadena} tiene ${cadena.length} caracteres `);
    mainLabelArrow = 'Resultado con funcion expresada';
    mainResultArrow = `La cadena: ${cadena} tiene ${cadena.length} caracteres`;

}

contarCaracteresArrow( cadena );


//  ---------------------------------------------
//  ----------  Renderizado en el DOM  ----------
//  ---------------------------------------------

const renderLayoutMain = ( layoutMain ) => {

    if (layoutMain) {

        layoutMain.innerHTML = `
    
            <h2 class="main__header"> ${mainHeader} </h2>
        
            <div class="main__content">
            
                <section class="main__container-result">
                    <label class="main__label"> ${mainLabelFunction} </label>
                    <div class="main__result"> ${mainResultFunction} caracteres </div>
                </section>

                <section class="main__container-result">
                    <label class="main__label"> ${mainLabelArrow} </label>
                    <div class="main__result"> ${mainResultArrow} caracteres </div>
                </section>
                
            </div>
         
    `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain(layoutMain);

