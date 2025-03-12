//  ---------------------------------------------------
//  ----------  /javascript-jhon-mircha/  -------------
//  ----------  /assets/js/update-layout.js  ----------
//  ---------------------------------------------------


console.clear();
console.warn("------------------------------------------------");
console.warn("-----  update-layout.js  --  cargado  ----------");
console.warn("------------------------------------------------");
console.log("\n");


export const updateLayout = () => {

    //  -----  referencias al HTML  -----
    const layoutMain = document.querySelector('.layout__main');
    const goToHome = document.querySelector('#goToHome');
    const navBars = document.querySelectorAll('.layout__navbar');

    //  -----  Ocultat menus y mostrar el menu de ir a la layout principal  -----
    navBars.forEach(navbar => navbar.style.display = 'none');
    goToHome.style.display = 'flex';
    layoutMain.style.display = 'none';

}

