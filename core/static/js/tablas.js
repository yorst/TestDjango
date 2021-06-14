// //Controlador tabla trabajador
// function generarTablaTrabajador(){
//     console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
//     //Obtener el número de trabajadores
//     var nTrabajadores = 10;
//     //Obtener la instancia de la tabla donde se incertaran los datos
//     var contenderoTabla = document.getElementById("contenedorTablaTrabajadores")

//     //Iniciar el contenedor vacio
//     contenderoTabla.innerHTML = ""
    
//     //Variable que irá almacenando los valores para la tabla
//     var tabla = "<table>";

//     //Crear tabla según la cantidad de filas
//     for (var i=0; i< nTrabajadores; i++){
//         tabla += "<tr>";

//         //Tiene que haber un <td> por cada columna creada
//         //Columna 1: Imagen 
//         tabla += "<td>";
//         tabla += "<a href='/detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
//         tabla += "</td>";

//         //Columna 2: Nombre Trabajador 
//         tabla += "<td>";
//         tabla += "Carlos Padget L.";
//         tabla += "</td>";

//         //Columna 3: Descripción
//         tabla += "<td>";
//         tabla += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu non egestas dapibus. Nunc dolor leo, imperdiet in dapibus sodales, vehicula vitae sem. Nullam eleifend sed nisi feugiat tincidunt. Maecenas a neque sit amet elit ornare varius et quis turpis. Nunc sagittis, dolor et euismod tincidunt, erat ligula lacinia.";
//         tabla += "</td>";

//         //Columna 4: Fecha
//         tabla += "<td>";
//         tabla += "15/11/1888";
//         tabla += "</td>";

//         tabla += "</tr>";
//     }
//     //Cerrar el almacenado de los valores para completar la tabla
//     tabla += "</table>";

//     //Asignar 'tabla' al contenedor
//     contenderoTabla.innerHTML = tabla;

//     console.log("PROCESO FINALIZADO")
// }

// window.onload = generarTablaTrabajador();


//Controlador tabla trabajador
function generarTablaTrabajador(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 10;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorTablaTrabajadores")

    //Iniciar el contenedor vacio
    contenderoTabla.innerHTML = ""
    
    //Variable que irá almacenando los valores para la tabla
    var tabla = "<table>";

    //Crear tabla según la cantidad de filas
    for (var i=0; i< nTrabajadores; i++){
        tabla += "<tr>";

        //Tiene que haber un <td> por cada columna creada
        //Columna 1: Imagen 
        tabla += "<td>";
        tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
        tabla += "</td>";

        //Columna 2: Nombre Trabajador 
        tabla += "<td>";
        tabla += "Carlos Padget L.";
        tabla += "</td>";

        //Columna 3: Descripción
        tabla += "<td>";
        tabla += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu non egestas dapibus. Nunc dolor leo, imperdiet in dapibus sodales, vehicula vitae sem. Nullam eleifend sed nisi feugiat tincidunt. Maecenas a neque sit amet elit ornare varius et quis turpis. Nunc sagittis, dolor et euismod tincidunt, erat ligula lacinia.";
        tabla += "</td>";

        //Columna 4: Fecha
        tabla += "<td>";
        tabla += "15/11/1888";
        tabla += "</td>";

        tabla += "</tr>";
    }
    //Cerrar el almacenado de los valores para completar la tabla
    tabla += "</table>";

    //Asignar 'tabla' al contenedor
    contenderoTabla.innerHTML = tabla;

    console.log("PROCESO FINALIZADO")
}
//Carga los datos automáticamente al iniciar la vista
window.onload = generarTablaTrabajador();




//Controlador listas desplegables del formulario de atención
// 0) función que crea la estructura del select
// 1) función para llenar los tipos de auto
// 2) función para llenar las marcas de auto
// 3) función para llenar los modelos de auto

// (1)
function setTiposAutos(){
    console.log("INICIANDO API AUTOS...");

    //Obtener los tipos
    let tipos = ["car", "truck", "bus"];
    
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoSelect = document.getElementById("selectTiposAuto")
    //Variable que irá almacenando los valores para el select
    var option = "<option selected value=''> Elige un tipo</option>";

    //Crear el select según la cantidad de filas
    for (var i=0; i< tipos.length; i++){
        option += "<option value='"+tipos[i]+"'>"+tipos[i]+"</option>";
    }

    //Asignar 'option' al contenedor
    contenderoSelect.innerHTML = option;

    //Obtener cuando el select tenga un cambio
    const selectElement = document.getElementById("selectTiposAuto")
    selectElement.addEventListener('change', (event) => {
        console.log(`Seleccionaste el tipo: ${event.target.value}`);
        setMarcasAutos(event.target.value);
    });
}
//Carga los datos automáticamente al iniciar la vista
window.onload = setTiposAutos();

// (2)
function setMarcasAutos(tipo){
    getMarcaAuto(tipo)
    .then(result => {
        console.log("información marcas recibida...");

        //Obtener la instancia de la tabla donde se incertaran los datos
        var contenderoSelect = document.getElementById("selectMarcaAuto")
        //Variable que irá almacenando los valores para el select
        var option = "<option selected value=''> Elige una opción </option>";

        //Crear el select según la cantidad de filas asignando los modelos
        for (var i=0; i< result.Results.length; i++){
            option += "<option value='"+result.Results[i].MakeId+"'>"+result.Results[i].MakeName.substr(0, 13)+"</option>";
        }

        //Asignar 'option' al contenedor
        contenderoSelect.innerHTML = option;
    })
      .catch(error => console.log('error', error));

    
    //Obtener cuando el select tenga un cambio
    const selectElement = document.getElementById("selectMarcaAuto")
    selectElement.addEventListener('change', (event) => {
        console.log(`Seleccionaste el modelo: ${event.target.value}`);
        setModelosAutos(event.target.value);
    });
}

// (3)
function setModelosAutos(marca){
    getModeloAuto(marca)
    .then(result => {
        console.log("información modelos recibida...")

        //Obtener la instancia de la tabla donde se incertaran los datos
        var contenderoSelect = document.getElementById("selectModeloAuto")
        //Variable que irá almacenando los valores para el select
        var option = "<option selected value=''> Elige una opción </option>";

        //Crear el select según la cantidad de filas asignando los modelos
        for (var i=0; i< result.Results.length; i++){
            option += "<option value='"+result.Results[i].Make_ID+"'>"+result.Results[i].Model_Name.substr(0, 13)+"</option>";
        }

        //Asignar 'option' al contenedor
        contenderoSelect.innerHTML = option;
    })
      .catch(error => console.log('error', error));
}