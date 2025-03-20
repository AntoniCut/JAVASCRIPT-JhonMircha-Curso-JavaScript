//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /12-objetos.js ---------------------
//  ------------------------------------------------



import { updateLayout } from "../assets/js/update-layout.js";

console.clear();
console.warn("---------------------------------------------");
console.warn("-----  12-objetos.js  --  cargado  ----------");
console.warn("---------------------------------------------");
console.log("\n");

//  -----  referencias al HTML  -----
const layoutMain = document.querySelector('.layout__main');

//  -----  actualizamos la layout  -----
updateLayout();


//  -------------------------------
//  ----------  Objetos  ----------
//  -------------------------------

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


//  ----------------------------------------------
//  ----------  Renderizado en el HTML  ----------
//  ----------------------------------------------
const renderLayoutMain = () => {

    if (layoutMain) {

        layoutMain.innerHTML += `
                
                <h2 class="main__header"> 12 - Objetos </h2>
                
                <pre class="main__content">

                    <code>

                        console.warn("**********  Objetos  **********");
                    
                        {

                            const a = [];
                            console.log("const a = []", a);

                            const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
                            console.log('const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]]', b);

                            console.log("b.length", b.length);

                            console.log("b[2]", b[2]);
                            console.log("b[0]", b[0]);
                            console.log("b[3]", b[3]);
                            console.log("b[3][2]", b[3][2]);
                            console.log("b[3][3][2]", b[3][3][0]);

                            const c = Array.of("X", "Y", "Z", 9, 8, 7);
                            console.log('const c = Array.of("X", "Y", "Z", 9, 8, 7)', c);

                            const d = Array(100).fill(false);
                            console.log("const d = Array(100).fill(false)", d);

                            const e = new Array();
                            console.log("const e = new Array()", e);

                            const f = new Array(1, 2, 3, true, false);
                            console.log("const f = new Array(1, 2, 3, true, false)", f);

                            const colores = ["Rojo", "Verde", "Azul"];
                            console.log('const colores = ["Rojo", "Verde", "Azul"]', colores);

                            colores.push("Negro");
                            console.log('colores.push("Negro")', colores);

                            colores.pop();
                            console.log("colores.pop()", colores);

                            console.log("colores.forEach");
                            colores.forEach(function (el, index) {
                                console.log('<li id="index"> + el + </li>');
                            });

                        }
                                           
                    </code>

                </pre>
                
            `;

    } else
        console.error("Error: No se encontró el elemento .layout__main en el DOM.");
}

renderLayoutMain();



