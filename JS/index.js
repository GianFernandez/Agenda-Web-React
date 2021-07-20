function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(resultados){
        return resultados.json();
    }).then(function(resultados){
        
        var DatosJson = JSON.parse(JSON.stringify(resultados));
        $("#Table").append('<tr><td>Nombre</td>'+
         '<td>Apellido </td>' + 
         '<td>Telefono</td>');
    for (i = 0; i < DatosJson.length; i++){
     
     $("#Table").append('<tr>' + 
         '<td align="center" style="dislay: none;">' + DatosJson[i].nombre + '</td>'+
         '<td align="center" style="dislay: none;">' + DatosJson[i].apellido + '</td>'+
         '<td align="center" style="dislay: none;">' + DatosJson[i].telefono + '</td>'+'</tr>');
        }

    });
}