//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /09-undefined-null-nan.js ----------
//  ------------------------------------------------


(function () {


    //  *******************************************************************************
    //  **********  Curso JavaScript: 9. undefined, null & NaN - #jonmircha  **********
    //  *******************************************************************************

    console.clear();
    console.warn("**********  undefined, null, NaN  **********");
    console.log("\n");

    //  -----  undefined indica que no se ha inicializado una variable y que el valor está ausente  -----
    let indefinida;
    console.log("\nlet indefinida", indefinida);

    //  -----  null es un valor especial que indica la ausencia de un valor  -----
    let nulo = null;
    console.log("\nlet nulo = null", nulo);

    //  -----  NaN - Not a Number  -----
    let noEsUnNumero = "hola" * 3.7;
    console.log('\nlet noEsUnNumero = "hola" * 3.7', noEsUnNumero);

})();