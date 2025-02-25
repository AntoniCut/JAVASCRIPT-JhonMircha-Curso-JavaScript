//  --------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ------------
//  ----------  /01-tipos-de-datos/  -----------------
//  ----------  /30-alert-confirm-prompt.js ----------
//  --------------------------------------------------


(function () {


    //  ****************************************************************************************
    //  **********     Curso JavaScript: 30. Alert, Confirm y Prompt - #jonmircha     ********** 
    //  ****************************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 30. Alert, Confirm y Prompt - #jonmircha     **********");
    console.log("\n");

    console.log('window =>', window);
    alert("Hola esto es una alerta");
    confirm("Hola esto es una confirmación");
    prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

    let alerta = alert("Hola esto es una alerta"),
        confirmacion = confirm("Hola esto es una confirmación"),
        aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

    console.log('alerta', alerta);
    console.log('confirmacion', confirmacion);
    console.log('aviso', aviso);


})();