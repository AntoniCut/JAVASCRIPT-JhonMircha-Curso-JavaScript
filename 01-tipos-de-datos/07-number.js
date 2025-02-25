//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /07-numbers.js  --------------------
//  ------------------------------------------------


(function () {


        //  ****************************************************************************
        //  **********  Curso JavaScript: 7. Números (Numbers) - #jonmircha  ***********
        //  ****************************************************************************

        console.clear();
        console.warn("**********  Números  **********");
        console.log("\n");


        let a = 2;
        let b = new Number(1);
        let c = 7.19;
        let d = "5.6";

        console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d);
        console.log("c.toFixed(1): ", c.toFixed(1));
        console.log("c.toFixed(5): ", c.toFixed(5));
        console.log("parseInt(c): ", parseInt(c));
        console.log("parseFloat(c):", parseFloat(c));
        console.log("typeof c, typeof d:", typeof c, typeof d);
        console.log("a + b:", a + b);
        console.log("c + parseInt(d):", c + parseInt(d));
        console.log("c + parseFloat(d):", c + parseFloat(d));
        console.log("c + Number.parseInt(d):", c + Number.parseInt(d));
        console.log("c + Number.parseFloat(d):", c + Number.parseFloat(d));

})();