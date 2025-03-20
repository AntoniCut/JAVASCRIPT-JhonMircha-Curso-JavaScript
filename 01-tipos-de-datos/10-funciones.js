//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /10-funciones.js -------------------
//  ------------------------------------------------


import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("-----------------------------------------------");
console.warn("-----  10-funciones.js  --  cargado  ----------");
console.warn("-----------------------------------------------");
console.log("\n");

//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();

//  ---------------------------------------------
//  ----------  undefined, null & NaN  ----------
//  ---------------------------------------------


console.clear();
console.warn("**********  Funciones  **********");
console.log("\n");


//  -----  Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. 
//         Opcionalmente, una función puede aceptar parámetros y devolver un valor.

//  -----  Las funciones en JavaScript son objetos, un tipo especial de objetos:

//  -----  Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, 
//         y pueden pasarse como argumentos y usarse como un valor de retorno.


let contador = 0;

//  -----  Declaración de función  ------
function estoEsUnaFuncion() {
    contador++;
    console.log("\nUno");
    console.log("Dos");
    console.log("Tres");
    console.log("Esto es una función ejecutada " + contador + " veces");
}

//  -----  Invocación de función  -----
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();


//  -----  Funciones que devuelven un valor  -----
function unaFuncionQueDevuelveValor() {
    console.log("\nUno");
    return 19;
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una Cadena de texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);


//  -----  Funciones que se le pasan argumentos  ----- 
function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`\nHola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Antonio", 7);
saludar();


//  -----  Funciones Declaradas  -----
funcionDeclarada();

function funcionDeclarada() {
    console.log("\nEsto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
}

funcionDeclarada();


//  -----  Funciones Expresadas  -----
//funcionExpresada();     //  Da Error xque se invoca antes de declararse.


//  -----  función Anónima  -----
const funcionExpresada = function () {
    console.log("\nEsto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
}



//  -----  Funciones Flecha  -----
const funcionFlecha = () => {
    console.log('\nEsto es una función flecha');
}

funcionFlecha();



//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = (nombre, edad) => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 10 - Funciones </h2>
                
                <pre class="main__content">

                    <code>

                        console.warn("**********  Funciones  **********");

                        let contador = 0;

                        //  -----  Declaración de función  ------
                        function estoEsUnaFuncion() {
                            contador++;
                            console.log("Uno");
                            console.log("Dos");
                            console.log("Tres");
                            console.log("Esto es una función ejecutada " + contador + " veces");
                        }

                        //  -----  Invocación de función  -----
                        estoEsUnaFuncion();
                        estoEsUnaFuncion();
                        estoEsUnaFuncion();
                        estoEsUnaFuncion();


                        //  -----  Funciones que devuelven un valor  -----
                        function unaFuncionQueDevuelveValor() {
                            console.log("Uno");
                            return 19;
                            console.log("Dos");
                            console.log("Tres");
                            return "La función ha retornado una Cadena de texto";
                        }

                        let valorDeFuncion = unaFuncionQueDevuelveValor();
                        console.log(valorDeFuncion);


                        //  -----  Funciones que se le pasan argumentos  ----- 
                        function saludar(nombre = "Desconocido", edad = 0) {
                            console.log('Hola mi nombre es ${nombre} y tengo ${edad} años.');
                        }

                        saludar("Antonio", 7);
                        saludar();


                        //  -----  Funciones Declaradas  -----
                        funcionDeclarada();

                        function funcionDeclarada() {
                            console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, 
                                         incluso antes de que la función sea declarada");
                        }

                        funcionDeclarada();


                        //  -----  Funciones Expresadas  -----
                        //funcionExpresada();     //  Da Error xque se invoca antes de declararse.


                        //  -----  función Anónima  -----
                        const funcionExpresada = function () {
                            console.log("Esto es una función expresada, es decir, una función que se le ha asignado 
                                         como valor a una variable, si invocamos esta función antes de su definición JS 
                                         nos dirá 'Cannot access 'funcionExpresada' before initialization'")
                        }



                        //  -----  Funciones Flecha  -----
                        const funcionFlecha = () => {
                            console.log('Esto es una función flecha');
                        }

                        funcionFlecha();
                       
                                            
                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain('Antonio', 7);
