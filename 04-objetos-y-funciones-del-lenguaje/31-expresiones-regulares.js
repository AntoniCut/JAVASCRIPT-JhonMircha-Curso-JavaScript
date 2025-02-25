//  ---------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -------------
//  ----------  /01-tipos-de-datos/  ------------------
//  ----------  /31-expresiones-regulares.js ----------
//  ---------------------------------------------------


(function () {


    //  **************************************************************************************
    //  **********     Curso JavaScript: 31. Expresiones Regulares - #jonmircha     ********** 
    //  **************************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 31. Expresiones Regulares - #jonmircha     **********");
    console.log("\n");

    //  ----------  Expresiones Regulares  ----------
    //  - Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
    //  - https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
    //  - https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
        
    let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";
    console.log('cadena =>', cadena);

    let expReg = new RegExp("lorem", "ig");
    console.log('expReg =>', expReg);
    console.log('expReg.test(cadena) =>', expReg.test(cadena));
    console.log('expReg.exec(cadena) =>', expReg.exec(cadena));

    let expReg2 = /lorem{1,}/ig;
    console.log('expReg2 =>', expReg);
    console.log('expReg2.test(cadena) =>', expReg2.test(cadena));
    console.log('expReg2.exec(cadena) =>', expReg2.exec(cadena));


})();