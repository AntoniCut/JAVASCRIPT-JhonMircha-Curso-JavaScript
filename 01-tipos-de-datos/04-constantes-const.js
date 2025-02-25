//  -----------------------------------------------
//  ----------  /javascript-jhon-mircha/  ---------
//  ----------  /01-tipos-de-datos/  --------------
//  ----------  /04-constantes-const.js  ----------
//  -----------------------------------------------


(function() {

        //  **********************************************************************************  
        //  **********     Curso JavaScript: 4. Constantes (const) - #jonmircha     **********
        //  **********************************************************************************


        //  **********  Variables con CONST  **********

        console.clear();
        console.warn("**********  CONST  **********");
        console.log("\n");


        const PI = 3.1416;
        console.log("constante PI: ", { PI });

        const objeto = {
            nombre: 'Antonio',
            edad: 48
        }

        const colores = ['blanco', 'negro', 'azul'];

        console.log("objeto: ", { objeto });
        console.log("colores: ", { colores });

        console.log("objeto.correo: ", objeto.correo = 'antonicut@gmail.com');

        console.log("colores[3]: ", colores[3] = 'anaranjado');
        console.log({ colores });

        console.log("colores[4]: ", colores.push('verdoso'));
        console.log({ colores });


})();