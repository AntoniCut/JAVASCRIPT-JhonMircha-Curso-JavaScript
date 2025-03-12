//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /assets/js/layout.js  --------------
//  ------------------------------------------------


export const layout = () => {


    console.log("\n");
    console.warn("-----------------------------------------");
    console.warn("-----  layout.js  --  cargado  ----------");
    console.warn("-----------------------------------------");
    console.log("\n");


    const layout = document.querySelector('.layout');

    layout.innerHTML = `
    
        <!--  -----  Header  -----  -->
        <header class="layout__header">
            <h1 class="layout__title"> Curso de JavaScript de Jhon Mircha </h1>
        </header>


        <!-- -----  Menú para ir a la Home  ----- -->
        <nav class="layout__navbar-go-to-home" id="goToHome">

            <ul class="navbar__list">

                <li class="navbar__item">
                    <a href="#" class="navbar__title" data-script="../../main.js"> Go to Home </a>
                </li>

            </ul>
        
        </nav>
        

        <!-- -----  Menú de Fundamentos del Curso JavaScript desde Cero  ----- -->
        <nav class="layout__navbar">

            <h2> Fundamentos de JavaScript desde Cero </h2>

            <ul class="navbar__list">

                <li class="navbar__item">
                    <a class="navbar__title"> 1 - Tipos de Datos </a>
                    <ul class="navbar-submenu__list">
                        <li class="navbar-submenu__item"> 
                            <a href="#" data-script="./01-tipos-de-datos/03-variables-var-let.js"> 3 - Variables: var y let </a> 
                        </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./01-tipos-de-datos/04-constantes-const.js"> 4 - Constantes: const </a>
                        </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./01-tipos-de-datos/05-cadenas-de-text-string.js"> 5 - Cadenas de Texto:
                                string </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./01-tipos-de-datos/06-template-string.js"> 6 - Template String </a> </li>
                        <li class="navbar-submenu__item"> <a href="#" data-script="./01-tipos-de-datos/07-number.js"> 7
                                - Numeros: Numbers </a> </li>
                        <li class="navbar-submenu__item"> <a href="#" data-script="./01-tipos-de-datos/08-booleans.js">
                                8 - Booleanos: booleans </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./01-tipos-de-datos/09-undefined-null-nan.js"> 9 - undefined, null, NaN
                            </a> </li>
                        <li class="navbar-submenu__item"> <a href="#" data-script="./01-tipos-de-datos/10-funciones.js">
                                10 - Funciones </a> </li>
                        <li class="navbar-submenu__item"> <a href="#" data-script="./01-tipos-de-datos/11-arrays.js"> 11
                                - Arrays (Arreglos) </a> </li>
                        <li class="navbar-submenu__item"> <a href="#" data-script="./01-tipos-de-datos/12-objetos.js">
                                12 - Objetos </a> </li>
                    </ul>
                </li>

                <li class="navbar__item">
                    <a class="navbar__title"> 2 - Estructuras de Control </a>
                    <ul class="navbar-submenu__list">

                    </ul>
                </li>

                <li class="navbar__item">
                    <a class="navbar__title"> 3 - Programación Orientada a Objetos </a>
                    <ul class="navbar-submenu__list">

                    </ul>
                </li>

                <li class="navbar__item">
                    <a class="navbar__title"> 4 - Objetos y Funciones del Lenguaje </a>
                    <ul class="navbar-submenu__list">
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/26-objeto-console.js"> 26 - Objeto
                                Console </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/27-objeto-date.js"> 27 - Objeto Date
                            </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/28-objeto-math.js"> 28 - Objeto Math
                            </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/29-operador-de-cortocircuito.js"> 29
                                - Operador de Cortocircuito </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/30-alert-confirm-prompt.js"> 30 -
                                Ventanas: Alert, Confirm y Prompt </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/31-expresiones-regulares.js"> 31 -
                                Expresiones Regulares </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/32-funciones-anonimas-autoejecutables.js">
                                32 - Funciones Anónimas Autoejecutables </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./04-objetos-y-funciones-del-lenguaje/modulos-javascript/js/modulos.js"> 33
                                - Módulos - Import y Export </a> </li>
                        <!-- <li class="navbar-submenu__item"> <a href="./04-objetos-y-funciones-del-lenguaje/modulos-javascript/modulos.html" target="_blank"> 33 - Módulos - Import y Export </a> </li> -->
                    </ul>
                </li>

                <li class="navbar__item">
                    <a class="navbar__title"> 5 - Ejercicios Lógica de Programación </a>
                    <ul class="navbar-submenu__list">
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./05-ejercicios-logica-de-programacion/01-ejercicio-1.js"> 1 - Ejercicio 1
                            </a> </li>
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./05-ejercicios-logica-de-programacion/02-ejercicio-2.js"> 2 - Ejercicio 2
                            </a> </li>
                    </ul>
                </li>


            </ul>

        </nav>


        <!-- -----  Menú de Fundamentos del Curso JavaScript desde Cero  ----- -->
        <nav class="layout__navbar">

            <h2> Asincronia, Nuevos Tipos, This y JSON </h2>

            <ul class="navbar__list">

                <li class="navbar__item">
                    <a class="navbar__title"> 6 - Programación Asíncrona </a>
                    <ul class="navbar-submenu__list">
                        <li class="navbar-submenu__item"> <a href="#"
                                data-script="./01-tipos-de-datos/03-variables-var-let.js"> 3 - Variables: var y let </a>
                        </li>

                    </ul>
                </li>

            </ul>

        </nav>

        <main class="layout__main">

        </main>
    
    `;

}
