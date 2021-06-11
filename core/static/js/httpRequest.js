//PASO A PASO PARA OBTENER DATOS DE LOS VEHICULOS
// 0) API TULILIZADA: https://vpic.nhtsa.dot.gov/api/
// 1) OBTENER EL TIPO DE VEHICULO A LISTAR
// 2) OBTENER LA MARCA DEL VEHICULO A LISTAR
// 3) OBTENER EL MODELO DEL VEHICULO A LISTAR

// 1) OBTENER LISTADO DE TIPOS DE AUTO
function getTiposAuto(){
    return ["car", "truck", "bus"];
  }
  
  // 2) API PARA OBTENER LISTADO DE MARACAS DE AUTO
  function getMarcaAuto(tipo){
    console.error("INICIANDO API...");
  
    fetch("http://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/"+tipo+"?format=json", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.Results);
        return result.Results;
      })
      .catch(error => console.log('error', error));
    console.error("API EJECUTADA");
  }
  
  // 3) API PARA OBTENER LISTADO DE MODELOS DE AUTO
  function getModeloAuto(tipo, marca){
    console.error("INICIANDO API...");
  
    fetch("http://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/"+marca+"/vehicletype/"+tipo+"?format=json", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.Results);
        return result.Results;
      })
      .catch(error => console.log('error', error));
    console.error("API EJECUTADA");
  }
  
  /*DATOS PARA LA API
  Estructura JSON
  nombre, correo, telefono, encabezado, mensaje
  URL: https://us-central1-appbomberos-8.cloudfunctions.net/trabajoPrograDuocUC
  Tipo: POST -->
  Formato: JSON: {
      "nombre": "",
      "correo": "",
      "telefono": "",
      "encabezado": "",
      "mensaje": ""
  }*/
  
  const CONTACTO_MAIL_URL = "https://us-central1-appbomberos-8.cloudfunctions.net/trabajoPrograDuocUC";
  function sendEmail(){
    console.error("EJECUTANDO API...");
    
    //Obtener datos
    var nombreCont = $("#nombreCont").val();
    var correoCont = $("#correoCont").val();
    var telefonoCont = $("#telefonoCont").val();
    var asuntoCont = $("#asuntoCont").val();
    var mensajeCont = $("#mensajeCont").val();
  
    //Validar datos
    if (controladorValidacion(nombreCont, correoCont, telefonoCont, asuntoCont, mensajeCont)){
      //Validacion correcta
      postMail(nombreCont, correoCont, telefonoCont, asuntoCont, mensajeCont)
      limpiarFormCont();
    }else{
      console.log('Error en los datos');
    }
  }
  
  function postMail(nombreCont, correoCont, telefonoCont, asuntoCont, mensajeCont){
    //Configuración de los parámetros
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "nombre": nombreCont,
      "correo": correoCont,
      "telefono": telefonoCont,
      "encabezado": asuntoCont,
      "mensaje": mensajeCont
    });
    console.error("-POST CREADO");
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.error("-OPTIONS CREADO");
  
    fetch(CONTACTO_MAIL_URL, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        $(document).ready(function () {
          $('#formCont').html("<div id='message'></div>");
          $('#message').html("<h2>¡Solicitud de contacto enviada!</h2>")
            .append("<p>Te hemos enviado una copia a tu correo.</p>")
            .hide()
            .fadeIn(100, function() {
              $('#message')/*.append("<img id='checkmark' src='../img/check.png' />")*/;
            });
        });
      })
      .catch(error => {
        console.log('error', error);
        $(document).ready(function () {
          $('#formCont').html("<div id='message'></div>");
          $('#message').html("<h2>¡Upss!</h2>")
            .append("<p>Tenemos un error, favor intenta nuevamente más tarde.</p>")
            .hide()
            .fadeIn(100, function() {
              $('#message')/*.append("<img id='checkmark' src='../img/check.png' />")*/;
            });
        });
      });
    console.error("FUNCIÓN FINALIZADA");
  }
  
  