// Objeto con las propiedades del mouse
let pm = {
        zona: document.querySelector('.efectoMouse'),
        figuras: document.querySelectorAll('.efectoMouse figure'),
        mouseX: null,
        mouseY: null,
        horizontal: true,
        vertical: true
    }
    // Objeto con los métodos del mouse
let mm = {
    inicioMouse: function() {
        pm.zona.addEventListener('mousemove', mm.efectoMouse);
        for (let i = 0; i < pm.figuras.length; i++) {
            pm.figuras[i].innerHTML = '<img src="../img/mouse/plano0' + i + '.png">';
            pm.figuras[i].style.zIndex = -i;
        };
        setTimeout(function() {
            pm.zona.style.height = pm.figuras[0].childNodes[0].height + 'px';
        }, 777);

    },
    efectoMouse: function(mouse) {
        pm.mouseX = mouse.offsetX;
        pm.mouseY = mouse.offsetY;
        for (let i = 0; i < pm.figuras.length; i++) {
            if (pm.horizontal) {
                pm.figuras[i].style.left = -pm.mouseX / (i * 100 + 50) + '%';
            }
            if (pm.vertical) {
                pm.figuras[i].style.top = pm.mouseY / (i * 100 + 50) + '%';
            }
            pm.figuras[i].style.opacity = 1;
        }

    }
}
mm.inicioMouse();