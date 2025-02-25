//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /26-objeto-console.js --------------
//  ------------------------------------------------


(function () {


    // *******************************************************************************
    // **********     Curso JavaScript: 26. Objeto console - #jonmircha     ********** 
    // *******************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 26. Objeto console - #jonmircha     **********");
    console.log("\n");

    console.log("console =>!", console);
    console.error("console.error => Esto es un error");
    console.warn("console.warn => Esto es un aviso");
    console.info("console.info => Esto es un mensje informativo");
    console.log("console.log => Un registro de lo que ha pasado en nuestra aplicación");


    let nombre = "Jon",
        apellido = "MirCha",
        edad = 35;

    console.log('\nnombre:', nombre);
    console.log('apellido:', apellido);
    console.log('edad:', edad);
    console.log('nombre:', nombre, ' apellido:', apellido, ' edad:', edad);
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
    //console.clear();

    console.log('window =>', window);
    console.log('document =>', document);
    console.dir(window);
    console.dir(document);

    //console.clear();

    console.group("\nCursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();

    console.groupCollapsed("\nCursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();

    //console.clear();
    console.log(console);
    console.table('\nconsole.table(Object.entries(console).sort())', Object.entries(console).sort());


    const numeros = [1, 2, 3, 4, 5],
        vocales = ["a", "e", "i", "o", "u"];

    console.table('\nnumeros', numeros);
    console.table('vocales', vocales);

    const perro = {
        nombre: "Boni",
        raza: "Boxer",
        color: "cafe"
    }
    console.table('perro', perro);

    //console.clear();

    console.log('\n\n');
    console.time('Cuanto tiempo tarda mi código');
    const arreglo = Array(1000000);

    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = i;
    }

    console.timeEnd('Cuanto tiempo tarda mi código');
    console.log(arreglo);

    //console.clear();

    console.log('\nconsole.count =>');
    for (let i = 0; i <= 100; i++) {
        console.count("código for");
        console.log(i);
    }

    //console.clear();

    let x = 3,
        y = 2,
        pruebaXY = "Se espera que X siempre sea menor que Y";

    console.assert(x < y, { x, y, pruebaXY });



})();