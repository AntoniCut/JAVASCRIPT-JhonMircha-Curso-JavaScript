//  *****************************************************
//  **********  /10-reactividad/Components.js  **********
//  *****************************************************


//  **********  Libreria parecida a la de VUE js  **********


//  -----  Función Autoinvocada  -----
const Component = (function () {

    //  -----  Creamos el Constructor del Componente  -----
    const Constructor = function (options) {
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }


    //  -----  Agregamos los metodos al prototipo del constructor del componente  -----

    //  Render UI
    Constructor.prototype.render = function () {

        const $el = document.querySelector(this.el);
        $el.innerHTML = this.template(this.data);
        console.log("Estado Local: ", this.data);
    };


    //  Actualizar el State de forma reactiva
    Constructor.prototype.setState = function (obj) {

        for (let key in obj) if (this.data.hasOwnProperty(key)) this.data[key] = obj[key];
        this.render();

    };


    //  Obtenemos una Copia Inmutable del State
    Constructor.prototype.getState = function () {
        
        return JSON.parse(JSON.stringify(this.data));

    };

    return Constructor;


})();