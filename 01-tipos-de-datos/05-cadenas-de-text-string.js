//  ------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------------
//  ----------  /01-tipos-de-datos/  ---------------------
//  ----------  /05-cadenas-de-texto-string.js  ----------
//  ------------------------------------------------------


(function () {


    //  ******************************************************************************************
    //  **********     Curso JavaScript: 5. Cadenas de Texto (Strings) - #jonmircha     **********
    //  ******************************************************************************************

    //  **********  Cadenas de Texto / String  **********

    console.clear();
    console.warn("**********  String  **********");
    console.log("\n");

    //  -----  Propiedades  -----
    let nombre = "Antonio";
    let apellido = "Cutillas";
    let saludo = new String("Hola Mundo!!!");
    console.log({
        nombre,
        longitud: nombre.length,
        apellido,
        longitud: apellido.length,
        saludo,
        longitud: saludo.length
    });

    console.log(
        nombre,
        nombre.length,
        apellido,
        apellido.length,
        saludo,
        saludo.length
    );

    console.log("Minusculas: ",
        nombre.toLowerCase(),
        apellido.toLowerCase(),
        saludo.toLowerCase()
    );

    console.log("Mayusculas: ",
        nombre.toUpperCase(),
        apellido.toUpperCase(),
        saludo.toUpperCase()
    );

    let lorem = "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae eveniet suscipit velit explicabo repellat esse, a quaerat, gni ipsam iure     error dolorem alias tempore quod, consectetur saepe blanditiis pariatur          ."


    console.log("Lorem: ", lorem);
    console.log("Lorem Incluye amet: ", lorem.includes('amet'));    //  si la palabra esta incluido en el string. 
    console.log("Metodo trim() para lorem: ", lorem.trim());        //  quita los espacios en blanco.
    console.log("Metodo split() para lorem: ", lorem.split(" "));   //  separa el string por espacios en blanco.


})();