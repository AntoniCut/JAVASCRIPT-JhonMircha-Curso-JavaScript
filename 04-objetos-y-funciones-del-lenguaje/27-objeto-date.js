//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /01-tipos-de-datos/  ---------------
//  ----------  /27-objeto-date.js -----------------
//  ------------------------------------------------


(function () {


    //  ****************************************************************************
    //  **********     Curso JavaScript: 27. Objeto Date - #jonmircha     ********** 
    //  ****************************************************************************

    console.clear();
    console.warn("**********     Curso JavaScript: 27. Objeto Date - #jonmircha     **********");
    console.log("\n");

    console.log(Date());

    let fecha = new Date();
    console.log('fecha', fecha);

    //día del mes
    console.log('dia del mes', fecha.getDate());

    //día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
    console.log('dia de la semana', fecha.getDay());

    //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
    console.log('\nfecha.getMonth() =>', fecha.getMonth());
    console.log('fecha.getFullYear() =>', fecha.getFullYear());
    console.log('fecha.getHours() =>', fecha.getHours());
    console.log('fecha.getMinutes() =>', fecha.getMinutes());
    console.log('fecha.getSeconds() =>', fecha.getSeconds());
    console.log('fecha.getMilliseconds() =>', fecha.getMilliseconds());
    console.log('fecha.toString() =>', fecha.toString());
    console.log('fecha.toDateString() =>', fecha.toDateString());
    console.log('fecha.toLocaleString() =>', fecha.toLocaleString());
    console.log('fecha.toLocaleDateString() =>', fecha.toLocaleDateString());
    console.log('fecha.toLocaleTimeString() =>', fecha.toLocaleTimeString());
    console.log('fecha.getTimezoneOffset() =>', fecha.getTimezoneOffset());
    console.log('fecha.getUTCDate() =>', fecha.getUTCDate());
    console.log('fecha.getUTCHours() =>', fecha.getUTCHours());
    console.log('fecha.getUTCFullYear()', fecha.getUTCFullYear());

    console.log('\nTiempo transcurrido en segundos de la fcha TimeStam 1-1-1970  -  Date.now() =>\n', Date.now());
    let cumpleJon = new Date(1984, 4, 23);
    console.log('\nlet cumpleJon = new Date(1984, 4, 23) =>', cumpleJon);



})();