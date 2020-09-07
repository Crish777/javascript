// Objeto con las propiedades del formulario
let pf = {
    inputs: document.querySelectorAll('#inicioFormulario form input.validar'),
    valor: null,
    expresionRegular: null,
    validarUsuario: false,
    validarPassword: false,
    validarEmail: false,
    validarTerminos: null
}
// Objeto con los metodos del formulario
let mf = {
    inicioFormulario: function(){
        for (let i = 0; i < pf.inputs.length; i++) {
             pf.inputs[i].addEventListener('focus', mf.enFoco);
             pf.inputs[i].addEventListener('blur', mf.salirFoco);
             pf.inputs[i].addEventListener('change', mf.cambiarEntrada);
            
        }
    },
    enFoco: function(input){
        pf.valor = input.target.value;
        document.querySelector('[for="'+input.target.id+'"]').appendChild(document.createElement('DIV')).setAttribute('class', 'error');

        if(pf.valor == ''){
            document.querySelector('#'+input.target.id).style.background = 'rgba(255,255,0,.5)';
            document.querySelector('[for="'+input.target.id+'"]').appendChild(document.createElement('DIV')).setAttribute('class', 'obligatorio');
            document.querySelector('[for="'+input.target.id+'"] .obligatorio').innerHTML = '<span style="color:rgba(0,0,0,.5); font-size: 1rem;">*Campo obligatorio.</span>';
        } else{
            document.querySelector('#'+input.target.id).style.background = 'rgba(255,255,255)';
        }
    },
    salirFoco: function(input){
        document.querySelector('#'+input.target.id).style.background = 'rgba(255,255,255)';
        document.querySelector('[for="'+input.target.id+'"]').appendChild(document.createElement('DIV')).setAttribute('class', 'obligatorio');
            document.querySelector('[for="'+input.target.id+'"] .obligatorio').parentNode.removeChild(document.querySelector('[for="'+input.target.id+'"] .obligatorio'));
    },
    cambiarEntrada: function(input){
        pf.valor = input.target.value;

        if(pf.valor != ''){
            switch(input.target.id){
                case 'nombre':
                    if(pf.valor.length < 2 || pf.valor.length > 17){
                        document.querySelector('.error').innerHTML = '<span style="color:red; font-size="1rem">*Ingresa los datos según las indicaciones. '+input.target.placeholder+'</span>';
                        pf.validarUsuario =  false;
                    } else{
                        document.querySelector('.error').parentNode.removeChild(document.querySelector('.error'));
                        pf.validarUsuario =  true;
                    }
                    break;

                case 'password':
                    pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
                    if(!pf.expresionRegular.test(pf.valor)){
                        document.querySelector('.error').innerHTML = '<span style="color:red; font-size="1rem">*Ingresa los datos según las indicaciones. '+input.target.placeholder+'</span>';
                        pf.validarPassword =  false;
                    } else{
                        document.querySelector('.error').parentNode.removeChild(document.querySelector('.error'));
                        pf.validarPassword =  true;
                    }
                    break;

                case 'email':
                    pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if(!pf.expresionRegular.test(pf.valor)){
                        document.querySelector('.error').innerHTML = '<span style="color:red; font-size="1rem">*Ingresa los datos según las indicaciones. '+input.target.placeholder+'</span>';
                        pf.validarEmail =  false;
                    } else{
                        document.querySelector('.error').parentNode.removeChild(document.querySelector('.error'));
                        pf.validarEmail =  true;
                    }
                    break;  
            }
        } else{
            document.querySelector('.error').parentNode.removeChild(document.querySelector('.error'));
        }
    },
    validarFormulario: function(){
        pf.validarTerminos = document.querySelector('#terminos').checked;

        if(!pf.validarUsuario || !pf.validarPassword || !pf.validarEmail){
            document.querySelector('#labelEnviar').innerHTML = '<span style="color:red; font-size: 1.2rem;">*Algunos campos son incorrectos </span>';
            return false;
        } else if(!pf.validarTerminos){
            document.querySelector('#labelEnviar').innerHTML = '<span style="color:red; font-size: 1.2rem;">*Por favor, acepte los términos y condiciones </span>';
            return false;
        } else{
            return true;
        }
    }
}
mf.inicioFormulario();
