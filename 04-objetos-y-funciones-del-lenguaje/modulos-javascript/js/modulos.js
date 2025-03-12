//  -------------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -----------------------
//  ----------  /04-objetos-y-funciones-del-lenguaje/  ----------
//  ----------  /modulos.js -------------------------------------
//  -------------------------------------------------------------


import saludarFunction, { SaludarClass, PI, usuario } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";
import { aritmetica as calculos } from "./aritmetica.js";


(function () {


    console.clear();
    console.warn("**********  modulos.js  **********");
    console.log("\n");

    const layoutMain = document.querySelector('.layout__main');

    const renderLayoutMain = ( selector ) => {

        if (layoutMain) {

            layoutMain.innerHTML = `
        
                <h2 class="main__header"> Modulos - Import y Export </h2>
            
                <div class="main__content">
                
                    <section class="main__container-result">
                        <label class="main__label"> aritmetica.sumar(3, 4) => </label>
                        <div class="main__result"> ${aritmetica.sumar(3, 4)} </div>
                    </section>
    
                    <section class="main__container-result">
                        <label class="main__label"> aritmetica.restar(3, 4) => </label>
                        <div class="main__result"> ${aritmetica.restar(3, 4)} </div>
                    </section>
    
                    <section class="main__container-result">
                        <label class="main__label"> calculos.sumar(3, 4) => </label>
                        <div class="main__result"> ${calculos.sumar(3, 4)} </div>
                    </section>
    
                    <section class="main__container-result">
                        <label class="main__label"> calculos.restar(3, 4) => </label>
                        <div class="main__result"> ${calculos.restar(3, 4)} </div>
                    </section>
    
                </div>
             
        `;
    
        } else
            console.error("Error: No se encontró el elemento .layout__main en el DOM.");
    }

    renderLayoutMain(layoutMain);

    
    console.log(PI, usuario);
    console.log('aritmetica.sumar(3, 4) =>', aritmetica.sumar(3, 4));
    console.log('aritmetica.restar(3, 4) =>', aritmetica.restar(3, 4));
    console.log('calculos.sumar(3, 4) =>', calculos.sumar(3, 4));
    console.log('calculos.restar(3, 4) =>', calculos.restar(3, 4));

    saludarFunction();

    let saludo = new SaludarClass();
    saludo;

})();

