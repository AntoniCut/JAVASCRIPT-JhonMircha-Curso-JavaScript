//  ------------------------------------------------
//  ----------  /javascript-jhon-mircha/  ----------
//  ----------  /main.js  --------------------------
//  ------------------------------------------------


import { layout } from "./assets/js/layout.js";


document.addEventListener("DOMContentLoaded", () => {
    

    //  ----------  Al inicar cargamos la layout principal  -----
    console.warn("DOM completamente cargado");
    layout();


    const navBars = document.querySelectorAll('.layout__navbar');
    const goToHome = document.querySelector('#goToHome');


    goToHome.style.display = 'none';

    
    document.addEventListener('click', async (event) => {
        
        //  -----  Delegación de eventos: Verifica si el clic fue en un enlace con data-script  -----
        const enlace = event.target.closest('a[data-script]');
        
        //  -----  Si no es un enlace con data-script, ignorar  -----
        if (!enlace) return; 

        event.preventDefault();

        //console.log('¡Botón clickeado!');

        //  -----  obtenemos la ruta del script del enlace que hemos cliqueado  -----
        const scriptSrc = enlace.getAttribute('data-script');

        //  -----  al clicar en go to home, volvemos a renderizar la layout  -----
        if (scriptSrc === '../../main.js') {
             layout();
             return;
        }


        //  ----------------------------------------------------------------------------------------
        //  ----------  Renderizado de el contenido de cada script o ejercicio del curso  ----------
        //  ----------------------------------------------------------------------------------------

        const layoutMain = document.querySelector('.layout__main');
        layoutMain.style.display = 'none';

        //  -----  ocultamos los menus y mostramos el menu de ir a la layout  -----
        navBars.forEach(navbar => navbar.style.display = 'none');
        goToHome.style.display = 'flex';

        // 🚀 **Eliminar scripts dinámicos previos**
        document.querySelectorAll('script[data-dynamic]').forEach(script => {
            console.log(`🔄 Eliminando script anterior: ${script.src}`);
            script.remove();
        });

        //  -----  Evitar caché y recargar script  -----
        const newScript = document.createElement('script');
        newScript.src = `${scriptSrc}?v=${new Date().getTime()}`;
        newScript.type = "module";
        newScript.async = true;
        newScript.setAttribute('data-dynamic', 'true');

        //  -----  Script cargado correctamente  -----
        newScript.onload = () => {
            console.log(`✅ Script ${scriptSrc} cargado correctamente.`);
            layoutMain.style.display = 'flex';
        };

        //  -----  Error al cargar el script  -----
        newScript.onerror = () => console.error(`❌ Error al cargar el script ${scriptSrc}.`);

        //  -----  Añadimos el script al body  -----
        document.body.appendChild(newScript);

    });

});
