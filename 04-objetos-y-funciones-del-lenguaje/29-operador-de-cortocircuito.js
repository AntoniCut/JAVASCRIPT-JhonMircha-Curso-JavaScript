//  -------------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -----------------
//  ----------  /01-tipos-de-datos/  ----------------------
//  ----------  /29-operador-de-cortocircuito.js ----------
//  -------------------------------------------------------


(function () {


    //  ******************************************************************************************
    //  **********     Curso JavaScript: 29. Operador de cortocircuito - #jonmircha     ********** 
    //  ******************************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha     **********");
    console.log("\n");

    //  ----------  Operador de Cortocircuito  ----------
    
    //  -  Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.
    //  -  Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto.
         

    function saludar(nombre) {
       nombre = nombre || "Desconocido";
       console.log(`Hola ${nombre}`);
     }
 
     saludar("Jon");
     saludar();
 
     console.log('\n')
     console.log("cadena" || "Valor de la derecha");
     console.log(19 || "Valor de la derecha");
     console.log(true || "Valor de la derecha");
     console.log([] || "Valor de la derecha");
     console.log({} || "Valor de la derecha");
     console.log(false || "Valor de la derecha");
     console.log(null || "Valor de la derecha");
     console.log(undefined || "Valor de la derecha");
     console.log("" || "Valor de la derecha");
     console.log(-2 || "Valor de la derecha");
     console.log(0 || "Valor de la derecha");
 
     console.log(false && "Valor de la derecha");
     console.log(null && "Valor de la derecha");
     console.log(undefined && "Valor de la derecha");
     console.log("" && "Valor de la derecha");
     console.log(-2 && "Valor de la derecha");
     console.log(0 && "Valor de la derecha");
 
     console.log("cadena" && "Valor de la derecha");
     console.log(19 && "Valor de la derecha");
     console.log(true && "Valor de la derecha");
     console.log([] && "Valor de la derecha");
     console.log({} && "Valor de la derecha"); 
     
     
})();