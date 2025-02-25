//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /11-arrays.js ----------------------
//  ------------------------------------------------


(function () {


    //  ****************************************************************************
    //  **********  Curso JavaScript: 11. Arreglos (Arrays) - #jonmircha  **********
    //  ****************************************************************************

    console.clear();
    console.warn("**********  Arreglos o Arrays  **********");
    console.log("\n");

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

        console.log("\ncolores.forEach");
        colores.forEach(function (el, index) {
            console.log(`<li id="${index}">${el}</li>`);
        });

    }



})();