//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /08-booleans.js --------------------
//  ------------------------------------------------


(function () {


        //  ******************************************************************
        //  **********  Curso JavaScript: 8. Booleans - #jonmircha  **********
        //  ******************************************************************

        console.clear();
        console.warn("**********  Booleans  **********");
        console.log("\n");


        let verdadero = true;
        let falso = false;
        console.log("verdadero: ", verdadero, "falso: ", falso);

        let v = Boolean(true);
        let f = Boolean(false);
        console.log("\nlet v = Boolean(true); ", verdadero, "\nlet f = Boolean(false)", falso);

        //console.log(verdadero, falso, v, f);
        console.log("\ntypeof verdadero", typeof verdadero, "\ntypeof falso", typeof falso);

        console.log("\nBoolean(0)", Boolean(0));
        console.log("\nBoolean(-7)", Boolean(-7));
        console.log('\nBoolean("")', Boolean(""));
        console.log('\nBoolean(" ")', Boolean(" "));

})();