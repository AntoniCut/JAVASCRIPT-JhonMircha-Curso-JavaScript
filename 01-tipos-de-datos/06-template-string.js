//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /06-template-string.js  ------------
//  ------------------------------------------------


(function () {


    /*  ********************************************************************************  */
    /*  **********     Curso JavaScript: 6. Template Strings - #jonmircha     **********  */
    /*  ********************************************************************************  */

    console.clear();
    console.warn("**********  Template String  **********");
    console.log("\n");


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

        let ul1 = "<ul> <li> Primavera</li> <li>Verano</li> <li>Otoño</li> <li>Invierno</li> </ul>";
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

        let ul3 = ` <ul> <li>Primavera</li> <li>Verano</li> <li>Otoño</li> <li>Invierno</li> </ul> `;
        console.log("ul3 - template string: ", ul3);


        let ul4 = "<ul>";
        ul4 += "<li> Primavera</li>";
        ul4 += "<li>Verano</li>";
        ul4 += "<li>Otoño</li>";
        ul4 += "<li>Invierno</li>";
        ul4 += "</ul>";

        console.log("ul4", ul3);

    }



})();