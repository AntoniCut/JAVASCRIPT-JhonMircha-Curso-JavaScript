//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /12-objetos.js ---------------------
//  ------------------------------------------------


(function () {


    //  ******************************************************************
    //  **********  Curso JavaScript: 12. Objetos - #jonmircha  **********
    //  ******************************************************************

    console.clear();
    console.warn("**********  Objetos  **********");
    console.log("\n");

    {
        let a = new String("Hola");
        console.log('let a = new String("Hola")', a)

        const b = {};
        console.log("const b = {}", b);

        const c = new Object();
        console.log("const c = new Object()", c);


        //  -----  Dentro de un objeto a las variables se le van a llamar atributos/propiedades  ----- 
        //  -----  Y a las funciones se les llama métodos  -----

        const jon = {
            nombre: "Antonio",
            apellido: "Cutillas",
            edad: 49,
            pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
            soltero: false,
            contacto: {
                email: "antonicut@gmail.com",
                twitter: "@antonyCut",
                movil: "5215512345678"
            },
            saludar: function () {
                console.log(`Hola :)`)
            },
            decirMiNombre: function () {
                console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`)
            }
        }

        console.log("jon", jon);
        console.log('jon["nombre"]', jon["nombre"]);
        console.log('jon["apellido"]', jon["apellido"]);
        console.log('jon.nombre', jon.nombre);
        console.log('jon.apellido', jon.apellido);
        console.log('jon.edad', jon.edad);
        console.log('jon.soltero', jon.soltero);
        console.log('jon.pasatiempos', jon.pasatiempos);
        console.log('jon.pasatiemos[1]', jon.pasatiempos[1]);
        console.log('jon.contacto', jon.contacto);
        console.log('jon.contacto.twitter', jon.contacto.twitter);

        console.log("\njon.saludar()");
        jon.saludar();

        console.log("\njon.decirMiNombre()");
        jon.decirMiNombre();

        console.log("\nObject.keys(jon)", Object.keys(jon));
        console.log("\nObject.values(jon)", Object.values(jon));
        console.log('\njon.hasOwnProperty("nombre")', jon.hasOwnProperty("nombre"));
        console.log('\njon.hasOwnProperty("nacimiento")', jon.hasOwnProperty("nacimiento"));

    }



})();