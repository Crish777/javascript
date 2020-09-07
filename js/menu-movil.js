// Objeto con las propiedades del MenuMobile
let pmm = {
    menuMobile: document.querySelector('.menuMobile'),
    barraMenu : document.querySelector('header nav'),
    escondido: true,
    botonera: document.querySelectorAll('header nav a')

}
// Objeto con los métodos del MenuMobile
let mmm = {
    inicioMenuMobile: function(){
        pmm.menuMobile.addEventListener('click', mmm.mostrarBotones);
        for (let i = 0; i < pmm.botonera.length; i++) {
            pmm.botonera[i].addEventListener('click', mmm.esconderNav);
            
        }
    },
    mostrarBotones: function(){
        if(pmm.escondido){
            pmm.barraMenu.className = 'col-lg-8 col-md-8 col-sm-12 col-xs-12';
            pmm.barraMenu.style.zIndex = '20';
            pmm.escondido = false;
        } else {
            pmm.barraMenu.className = 'col-lg-8 col-md-8 col-sm-12 col-xs-0';
            pmm.escondido = true;
        }
    },
    esconderNav: function(){
        pmm.barraMenu.className = 'col-lg-8 col-md-8 col-sm-12 col-xs-0';
            pmm.escondido = true;
    }
}
mmm.inicioMenuMobile();