function añadirContactos(){
    fetch("http://www.raydelto.org/agenda.php", {
        method: 'POST',
        body: JSON.stringify(contacto),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(contacto => console.log(contacto))
    alert("Guardaste el contacto");
}
function prueba(){
    alert("Si funciono");
}

function guardar(){
    var contactos = new Array;
}