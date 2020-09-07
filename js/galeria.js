// Objeto con las propiedades de la galeria
let pg = {
    imagenes: document.querySelectorAll('#galeria .img img'),
    ruta: null,
    body: document.querySelector('body'),
    lightbox: null,
    modal: null,
    retroceder: null,
    avanzar: null,
    animacion: 'arriba',
    item: 0
}
// Objeto con los métodos de la galeria
let mg = {
    inicioGaleria: function(){
        for(let i = 0; i < pg.imagenes.length; i++){
            pg.imagenes[i].addEventListener('click', mg.capturarRuta);
        }
    },
    capturarRuta: function(ruta){
        pg.ruta = ruta.target;
        pg.item = ruta.target.getAttribute('item');
        mg.lightbox(pg.ruta);
    },
    lightbox: function(ruta){
        pg.body.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox');
        pg.lightbox = document.querySelector('#lightbox');

        pg.lightbox.style.backgroundColor = 'rgba(0,0,0,.5)';
        pg.lightbox.style.width = '100%';  
        pg.lightbox.style.height = '100%';
        pg.lightbox.style.position = 'fixed';
        pg.lightbox.style.zIndex = '100';
        pg.lightbox.style.top = '0';
        pg.lightbox.style.left = '0';
        pg.lightbox.style.display = 'flex';
        pg.lightbox.style.alignItems = 'center';
        pg.lightbox.style.justifyContent = 'center';

        pg.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        pg.modal = document.querySelector('#modal');

        pg.modal.innerHTML = ruta.outerHTML + '<div>x</div>';
        if(window.matchMedia('(min-width: 768px)').matches){
            pg.modal.style.width = '70%'
        }else{
            pg.modal.style.width = '97%'
        }
        if(pg.animacion == 'arriba'){
            pg.modal.style.marginBottom = '77rem';
            pg.modal.style.opacity = '0';
            setTimeout(function(){
                pg.modal.style.marginBottom = '0';
            pg.modal.style.opacity = '1';
            pg.modal.style.transition = '.7s';
            }, 7)
        }
        pg.modal.style.position = 'relative';
        pg.modal.childNodes[0].style.width = '100%';
        pg.modal.childNodes[0].style.border = '.7rem solid #fff';
        pg.modal.childNodes[0].style.borderRadius = '7%';
        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.top = '0%';
        pg.modal.childNodes[1].style.right = '0%';
        pg.modal.childNodes[1].style.padding = '1rem';
        pg.modal.childNodes[1].style.backgroundColor = '#ddd';
        pg.modal.childNodes[1].style.border = '.5rem solid #fff';
        pg.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pg.modal.childNodes[1].style.fontSize = '1.4rem';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        
        pg.modal.childNodes[1].addEventListener('click', mg.removerLightbox);

        pg.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'retroceder');
        pg.retroceder = document.querySelector('#retroceder');
        pg.retroceder.innerHTML = '<div><i class="fas fa-chevron-circle-left"></i></div>';
        pg.lightbox.childNodes[1].style.position = 'absolute';
        pg.lightbox.childNodes[1].style.top = '45%';
        pg.lightbox.childNodes[1].style.left = '1%';
        pg.lightbox.childNodes[1].style.fontSize = '4rem';
        pg.lightbox.childNodes[1].style.opacity = '.5';
        pg.lightbox.childNodes[1].style.color = 'white';
        pg.lightbox.childNodes[1].style.cursor = 'pointer';

        pg.lightbox.childNodes[1].addEventListener('click', mg.retrocederGaleria);

        pg.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'avanzar');
        pg.avanzar = document.querySelector('#avanzar');
        pg.avanzar.innerHTML = '<div><i class="fas fa-chevron-circle-right"></i></div>';
        pg.lightbox.childNodes[2].style.position = 'absolute';
        pg.lightbox.childNodes[2].style.top = '45%';
        pg.lightbox.childNodes[2].style.right = '2%';
        pg.lightbox.childNodes[2].style.fontSize = '4rem';
        pg.lightbox.childNodes[2].style.opacity = '.5';
        pg.lightbox.childNodes[2].style.color = 'white';
        pg.lightbox.childNodes[2].style.cursor = 'pointer';

        pg.lightbox.childNodes[2].addEventListener('click', mg.avanzarGaleria);

    },
    removerLightbox: function(){
        pg.lightbox.parentNode.removeChild(pg.lightbox);
    },
    retrocederGaleria: function(){
        if(pg.item == 0){
            pg.item = pg.imagenes.length-1;
        } else{
            pg.item--;
        }
        pg.modal.innerHTML = pg.imagenes[pg.item].outerHTML + '<div>x</div>';
        if(window.matchMedia('(min-width: 768px)').matches){
            pg.modal.style.width = '70%'
        }else{
            pg.modal.style.width = '97%'
        }
        if(pg.animacion == 'arriba'){
            pg.modal.style.marginBottom = '77rem';
            pg.modal.style.opacity = '0';
            setTimeout(function(){
                pg.modal.style.marginBottom = '0';
            pg.modal.style.opacity = '1';
            pg.modal.style.transition = '.7s';
            }, 7)
        }
        pg.modal.style.position = 'relative';
        pg.modal.childNodes[0].style.width = '100%';
        pg.modal.childNodes[0].style.border = '.7rem solid #fff';
        pg.modal.childNodes[0].style.borderRadius = '7%';
        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.top = '0%';
        pg.modal.childNodes[1].style.right = '0%';
        pg.modal.childNodes[1].style.padding = '1rem';
        pg.modal.childNodes[1].style.backgroundColor = '#ddd';
        pg.modal.childNodes[1].style.border = '.5rem solid #fff';
        pg.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pg.modal.childNodes[1].style.fontSize = '1.4rem';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        
        pg.modal.childNodes[1].addEventListener('click', mg.removerLightbox);
    },
    avanzarGaleria: function(){
        if(pg.item == pg.imagenes.length-1){
            pg.item = 0 ;
        } else{
            pg.item++;
        }
        pg.modal.innerHTML = pg.imagenes[pg.item].outerHTML + '<div>x</div>';
        if(window.matchMedia('(min-width: 768px)').matches){
            pg.modal.style.width = '70%'
        }else{
            pg.modal.style.width = '97%'
        }
        if(pg.animacion == 'arriba'){
            pg.modal.style.marginBottom = '77rem';
            pg.modal.style.opacity = '0';
            setTimeout(function(){
                pg.modal.style.marginBottom = '0';
            pg.modal.style.opacity = '1';
            pg.modal.style.transition = '.7s';
            }, 7)
        }
        pg.modal.style.position = 'relative';
        pg.modal.childNodes[0].style.width = '100%';
        pg.modal.childNodes[0].style.border = '.7rem solid #fff';
        pg.modal.childNodes[0].style.borderRadius = '7%';
        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.top = '0%';
        pg.modal.childNodes[1].style.right = '0%';
        pg.modal.childNodes[1].style.padding = '1rem';
        pg.modal.childNodes[1].style.backgroundColor = '#ddd';
        pg.modal.childNodes[1].style.border = '.5rem solid #fff';
        pg.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pg.modal.childNodes[1].style.fontSize = '1.4rem';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        
        pg.modal.childNodes[1].addEventListener('click', mg.removerLightbox);
    }
}
mg.inicioGaleria();