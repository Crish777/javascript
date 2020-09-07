// Objeto con las propiedades del scroll
let psc = {
    posicionScroll: 0,
    cajaParallax: document.querySelector('#inicioParallax'),
    entradasParallax: document.querySelectorAll('#inicioParallax .entradas .post'),
    header: document.querySelector('header'),
    botonera: document.querySelectorAll('header nav a'),
    enlace: null,
    destinoScroll: 0,
    intervalo: null,
    padding: 0,
    nav: document.querySelector('header nav')
}
// Obejto con los métodos del scroll
let msc = {
    inicioScroll: function(){
        document.addEventListener('scroll', msc.efectoParallax);
        for (let i = 0; i < psc.botonera.length; i++) {
              psc.botonera[i].addEventListener('click', msc.desplazarVentana);
        }
    },
    efectoParallax: function(){
        psc.posicionScroll = window.pageYOffset;
        if(psc.posicionScroll > psc.header.offsetTop){
            psc.header.style.position = 'fixed';
            psc.header.style.zIndex = '10'
            psc.padding = 100;
            if(window.matchMedia('(max-width:992px)').matches){
                psc.padding = 157;
            }
        } else{
            psc.header.style.position = 'static';
        }
        for(let i = 0; i < psc.entradasParallax.length; i++){
            
            if(psc.posicionScroll >= psc.cajaParallax.offsetTop - 160){
                
                psc.entradasParallax[i].style.opacity = '1';
                psc.entradasParallax[0].style.transition = '.5s';
                psc.entradasParallax[1].style.transition = '1s';
                psc.entradasParallax[2].style.transition = '1.5s';
                psc.entradasParallax[3].style.transition = '2s';
                psc.entradasParallax[i].style.transform = 'scale(1)';
            } else {
                psc.entradasParallax[i].style.opacity = '0';
                psc.entradasParallax[i].style.transform = 'scale(1.2)';
                psc.cajaParallax.style.overflow = 'hidden';
            }
        }
    },
    desplazarVentana: function(id){
        id.preventDefault();
        psc.enlace = id.target.getAttribute('href');
        psc.destinoScroll = document.querySelector(psc.enlace).offsetTop - psc.padding;
        psc.intervalo = setInterval(function(){
            if(psc.posicionScroll < psc.destinoScroll){
                psc.posicionScroll +=100;
                if(psc.posicionScroll >= psc.destinoScroll){
                    psc.posicionScroll = psc.destinoScroll;
                    clearInterval(psc.intervalo);
                }
            } else {
                psc.posicionScroll -= 100;
                if(psc.posicionScroll <= psc.destinoScroll){
                    psc.posicionScroll = psc.destinoScroll;
                    clearInterval(psc.intervalo);
                }
            }
            window.scrollTo(0, psc.posicionScroll);
        },25)

    }
}
msc.inicioScroll();
