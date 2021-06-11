// Controlador de validación de los campos necesarios para el envío del mail vía API
function controladorValidacion(nombre, email, telefono, asunto, mensaje){
    console.log('iniciando validaciones');
    if (isEmail(email)){
        noError("errorEmailC")
        if (isTelefono(telefono)){
            noError("errorTelefonoC")
            if (nombre.length > 3){
                noError("errorNombreC");
                if(asunto.length > 3){
                    noError("errorAsuntoC")
                    if(mensaje.length > 5){
                        noError("errorMensajeC")
                        return true
                    }else{
                        mensajeError("errorMensajeC","Mensaje muy corto")
                        return false
                    }
                }else{
                    mensajeError("errorAsuntoC","Asunto muy corto")
                    return false
                }
            }else{
                mensajeError("errorNombreC", "Nombre no válido");
                return false
            }
        }else{
            mensajeError("errorTelefonoC", "Celular inválido");
            return false;
        }
    }else{
        console.log('correo inválido');
        mensajeError("errorEmailC", "Correo electrónico no válido");
        return false;
    }
}

function mensajeError(caja, mensaje) {
    $("#" + caja).html(mensaje)
    $("#" + caja).fadeIn()
}

function noError(caja) {
    $("#" + caja).fadeOut()
}

function isEmail(email){
    console.log('revisando correo');
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isTelefono(telefono) {
    console.log('revisando telefono');
    var regex = /^\d{6,10}$/;
    return regex.test(telefono);
}

function validaEmail(tipo){
    var aux = "#correo"+tipo;
    console.log('revisando mail');
    if (aux == "#correoReg"){
        if ($(aux).val().trim().length == 0) {
            mensajeError("errorEmail", "Ingresa un email")
            return false
        } else {
            if (!isEmail($(aux).val())) {
                mensajeError("errorEmail", "Correo electrónico no válido")
                return false
            } else {
                noError("errorEmail")
                return true
            }
        }
    }else{
        if (aux == "#correoLog"){
            if ($(aux).val().trim().length == 0) {
                mensajeError("errorEmailL", "Ingresa un email")
                return false
            } else {
                if (!isEmail($(aux).val())) {
                    mensajeError("errorEmailL", "Correo electrónico no válido")
                    return false
                } else {
                    noError("errorEmailL")
                    return true
                }
            }
        }else{
            if ($(aux).val().trim().length == 0) {
                mensajeError("errorEmailC", "Ingresa un email")
                return false
            } else {
                if (!isEmail($(aux).val())) {
                    mensajeError("errorEmailC", "Correo electrónico no válido")
                    return false
                } else {
                    noError("errorEmailC")
                    return true
                }
            }
        }
    }
}

function validaNombre(tipo){
    var aux = "#nombre"+tipo
    console.log('revisando nombre'+$(aux).val());
    if (aux == "#nombreReg"){
        if ($(aux).val().trim().length == 0) {
            mensajeError("errorNombre", "Ingresa tu nombre")
            return false
        } else {
            if ($(aux).val().trim().length <= 1){
                mensajeError("errorNombre", "Ingresa un nombre válido")
                return false
            }else{
                noError("errorNombre")
                return true
            }
        }
    }else{
        if ($(aux).val().trim().length == 0) {
            mensajeError("errorNombreC", "Ingresa tu nombre")
            return false
        } else {
            if ($(aux).val().trim().length <= 1){
                mensajeError("errorNombreC", "Ingresa un nombre válido")
                return false
            }else{
                noError("errorNombreC")
                return true
            }
        }
    } 
}

function validaPass(tipo){
    var aux = "#contra"+tipo;
    console.log('revisando password');
    if (aux == "#contraReg"){
        if ($(aux).val().trim().length <= 7) {
            mensajeError("errorPass", "Ingresa una contraseña de 8 caracteres")
            return false
        } else {
             noError("errorPass")
            return true
        }
    }else{
        if ($(aux).val().trim().length <= 7) {
            mensajeError("errorPassL", "Ingresa una contraseña de 8 caracteres")
            return false
        } else {
             noError("errorPassL")
            return true
        }
    }
}

function validaTelefono() {
    console.log('revisando telefono');
    if ($("#telefonoCont").val().trim().length != 0) {
        if (!isTelefono($("#telefonoCont").val())) {
            mensajeError("errorTelefonoC", "Teléfono no válido")
            return false
        } else {
            noError("errorTelefonoC")
            return true
        }
    } else {
        mensajeError("errorTelefonoC","Debe ingresar un celular de conatcto")
        return true
    }
}

function validaAsunto(){
    if ($("#asuntoCont").val().trim().length == 0){
        mensajeError("errorAsuntoC", "Debe ingresar el asunto del contacto")
        return false
    }else{
        if ($("#asuntoCont").val().trim().length < 5 ){
            mensajeError("errorAsuntoC", "Asunto muy corto");
            return false;
        }else{
            noError("errorAsuntoC");
            return true;
        }
    }
}

function validaMensaje(){
    if ($("#mensajeCont").val().trim().length == 0){
        mensajeError("errorMensajeC", "Debe ingresar un mensaje")
        return false
    }else{
        if ($("#mensajeCont").val().trim().length < 5 ){
            mensajeError("errorMensajeC", "Mensaje muy corto");
            return false;
        }else{
            noError("errorMensajeC");
            return true;
        }
    }
}

function limpiarForm(){
    document.getElementById("formReg").reset();
    document.getElementById("formLog").reset();
}

function limpiarFormCont(){
    document.getElementById("formCont").reset();
}

function limpiarFormAt(){
    document.getElementById("formAtencion").reset();

}

function validaTitulo(){
    if ($("#tituloAt").val().trim().length != 0){
        if($("#tituloAt").val().trim().length >= 5){
            noError("errorTitulo")
        }else{
            mensajeError("errorTitulo", "Título muy corto");
        }
    }else{
        mensajeError("errorTitulo", "Debe ingresar un título");
    }
}

function validaTipo(){
    if ($("#tipoAt").val().trim().length != 0){
        if($("#tipoAt").val().trim().length >= 5){
            noError("errorTipo")
        }else{
            mensajeError("errorTipo", "Típo muy corto");
        }
    }else{
        mensajeError("errorTitulo", "Debe ingresar un tipo");
    }
}

function validaDescripcion(){
    if ($("#descripcionAt").val().trim().length != 0){
        if($("#descripcionAt").val().trim().length >= 5){
            noError("errorDescripcion")
        }else{
            mensajeError("errorDescripcion", "Descripción muy corta");
        }
    }else{
        mensajeError("errorDescripcion", "Debe ingresar una descripción");
    }
}

// function validaFecha(){
    
// }

$(document).ready(function () {

    $(".invalid-feedback").hide()

    $("#correoReg").blur(function (){
        validaEmail("Reg")
    });

    $("#nombreReg").blur(function (){
        validaNombre("Reg")
    });
  
    $("#contraReg").blur(function (){
        validaPass("Reg")
    });

    $("#contraLog").blur(function (){
        validaPass("Log")
    });

    $("#correoLog").blur(function (){
        validaEmail("Log")
    });

    $("#nombreCont").blur(function(){
        validaNombre("Cont");
    });
    
    $("#correoCont").blur(function(){
        validaEmail("Cont");
    });

    $("#telefonoCont").blur(function(){
        validaTelefono("Cont");
    });

    $("#asuntoCont").blur(function(){
        console.log("asuntoo")
        validaAsunto();
    });

    $("#mensajeCont").blur(function(){
        validaMensaje();
    });

    $("#tituloAt").blur(function(){
        validaTitulo();
    });

    // $("#fechaAt").blur(function(){
    //     validaFecha();
    // });

    $("#descripcionAt").blur(function(){
        validaDescripcion();
    });

    $("#tipoAt").blur(function(){
        validaTipo();
    });

    //form atencion
    $("#formAtencion").submit(function(){
        if (!validaTipo() ||
            // !validaFecha() ||
            !validaDescripcion() ||
            !validaTitulo()
        ){
            event.preventDefault()
        }
    });

    // form reg
    $("#formReg").submit(function(){
        console.log('iniciando validaciones...')
        if (
            !validaNombre("Reg") ||
            !validaEmail("Reg") ||
            !validaPass("Reg")
        ) {
            event.preventDefault()
        }
    });

    //form login
    $("#formlog").submit(function(){
        console.log('iniciando validaciones...')
        if (
            !validaEmail("Log") ||
            !validaPass("Log")
        ) {
            event.preventDefault()
        }
    });


    //form contacto
    $("#formCont").submit(function(){
        var nombreCont = $("#nombreCont").val();
        var correoCont = $("#correoCont").val();
        var telefonoCont = $("#telefonoCont").val();
        var asuntoCont = $("#asuntoCont").val();
        var mensajeCont = $("#mensajeCont").val();
        sendEmail(nombreCont, correoCont, telefonoCont, asuntoCont, mensajeCont);
    });
});