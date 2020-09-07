// Objeto con las propiedades del Slide
let ps = {
    seleccion: document.querySelectorAll('.slider .seleccion i'),
    item: 0,
    cajaSlide: document.querySelector('.slider ul'),
    imgSlide: document.querySelectorAll('.slider ul li'),
    animacion: 'fade',
    cambio: null,
    retroceder: document.querySelector('.slider .retroceder'),
    avanzar: document.querySelector('.slider .avanzar'),
    formatearLoop: false,
    velocidadSlide: 3000
}
// Objeto con los métodos del Slide
let ms = {
    inicioSlide: function(){
        for(let i = 0; i < ps.seleccion.length; i++){
            ps.seleccion[i].addEventListener('click', ms.capturarItem);
        }
        ps.retroceder.addEventListener('click', ms.retroceder);
        ps.avanzar.addEventListener('click', ms.avanzar);
        ms.intervalo();
        ps.cajaSlide.style.width = (ps.seleccion.length * 100) + '%';
    },
    capturarItem: function(item){
        ps.item = item.target.getAttribute('item') - 1;
        ms.moverSlide(ps.item);
    },
    retroceder: function(){
        ps.formatearLoop = false;
        if(ps.item == 0){
            ps.item = ps.seleccion.length -1;
        } else{
            ps.item--
        }
        ms.moverSlide(ps.item);
    },
    avanzar: function(){
        ps.formatearLoop = false;
        if(ps.item == ps.seleccion.length -1){
            ps.item = 0;
        } else{
            ps.item++;
        }
        ms.moverSlide(ps.item);
    },
    moverSlide: function(item){
        ps.formatearLoop = false;
        
        for(let i = 0; i < ps.seleccion.length; i++){
            ps.seleccion[i].style.opacity = '.5';
        }
        ps.seleccion[item].style.opacity = '1';
        if(item == 3){
            for(let i = 0; i < ps.seleccion.length; i++){
                ps.seleccion[i].style.color = 'black';
                ps.seleccion[i].style.transition = '1s';
            }
        }else{
            for(let i = 0; i < ps.seleccion.length; i++){
                ps.seleccion[i].style.color = 'white';
            }
        };
        if(ps.animacion == 'slide'){
            ps.cajaSlide.style.left = -item *100 + '%';
            ps.cajaSlide.style.transition = '1s';
        };
        if(ps.animacion == 'fade'){
            for(let i = 0; i < ps.imgSlide.length; i++){
                ps.imgSlide[i].style.opacity = '0';
            }
            setTimeout(function(){
                ps.imgSlide[item].style.opacity = '1';
                ps.imgSlide[item].style.transition = '.50s';
            },50)
            ps.cajaSlide.style.left = -item *100 + '%';
        };
    },
    intervalo: function(){setInterval(function(){
            if(!ps.formatearLoop){
                ps.formatearLoop = true;
            }else{
                ms.avanzar();
            }
        },ps.velocidadSlide)
    }
}
ms.inicioSlide();