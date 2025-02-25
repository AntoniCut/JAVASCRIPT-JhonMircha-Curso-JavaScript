//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /03-variables-var-let.js  ----------
//  ------------------------------------------------


(function() {

        //  ******************************************************************************************
        //  **********     Curso JavaScript: 3. Variables: var 🥊VS🥊 let - #jonmircha     ********** 
        //  ******************************************************************************************

        console.clear();
        console.warn("**********  Variables VAR, LET y CONST  **********");
        console.log("\n");

        var hola = 'Hola Mundo';
        let hello = 'Hello Word';

        function miFuncion() {
            console.log('Mi Función');
        }

        console.log(miFuncion());
        console.log("Windows: ", window);
        console.log("Windows.hola: ", window.hola);
        console.log("Windows.hello: ", window.hello);


        //  **********  Variables con VAR  **********

        console.log("\n\n");
        console.warn("**********  VAR  **********");
        console.log("\n");


        var musica = 'Rock';
        console.log('Variable Musica con var antes del bloque: ', musica);

        //  -----  Esto es un Bloque  -----
        {
            var musica = 'Heavy';
            console.log(console.log('Variable Musica con var dentro del bloque: ', musica));
        }

        console.log(console.log('Variable Musica con var despues del bloque: ', musica));



        //  **********  Variables con LET  **********

        console.log("\n\n");
        console.warn("**********  LET  **********");
        console.log("\n");


        let musica2 = 'Rock';
        console.log('Variable Musica2 con let antes del bloque: ', musica2);

        //  -----  Esto es un Bloque  -----
        {
            let musica2 = 'Heavy';
            console.log('Variable Musica con let dentro del bloque: ', musica2);
        }

        console.log('Variable Musica con let despues del bloque: ', musica2);



})();