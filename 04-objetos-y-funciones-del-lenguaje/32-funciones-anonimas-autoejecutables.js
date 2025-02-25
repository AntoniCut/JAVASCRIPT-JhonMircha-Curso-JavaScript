//  ---------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -------------
//  ----------  /01-tipos-de-datos/  ------------------
//  ----------  /32-expresiones-regulares.js ----------
//  ---------------------------------------------------


(function () {


    //  ***************************************************************************************************
    //  **********     Curso JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha     ********** 
    //  ***************************************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha     **********");
    console.log("\n");


    //  ----------  Funciones Anónimas Autoejecutables  ----------

    //  -----  Sin Argumentos  -----
    (function () {
        console.log("Mi primer IIFE");
    })();

    //  -----  Con Argumentos  -----
    (function (d, w, c) {
        console.log("Mi segunda IIFE");
        console.log('d', d);
        console.log('w', w);
        c.log("Este es un console.log")
    })(document, window, console);


    //  ----------  Formas de escribir las funciones Anónimas Autoejecutables  ----------

    //  -----  Clásica  -----
    (function () {
        console.log('versión Clásica')
    })();

    //  -----  La Crockford (JavaScript The Good Parts)  -----
    ((function () {
        console.log('versión Crockford')
    })());

    //  -----  Unaria  -----
    +function () {
        console.log('versión Unaria')
    }();

    //  -----  Facebook  -----
    !function () {
        console.log('versión Facebook')
    }();


})();