document.addEventListener('DOMContentLoaded', function(){
    //Guarda en esta variable el contenido de la busqueda para interpolarlo despues.
    var inputValue = "";
    //Obtengo acceso al boton de confirmación.
    let btnSearch = document.getElementById('btnBuscar');
    //Escucho el evento click
    btnSearch.addEventListener('click', function(){
        //Obtengo el valor del input ingresado
        inputValue = document.getElementById('inputBuscar').value.toLowerCase();//Convierto el texto en minusculas para evitar errores
        console.log(inputValue);
    })
    
})
