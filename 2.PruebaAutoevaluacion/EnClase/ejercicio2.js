// Recuperamos los 3 botones
let inserta = document.getElementById("inserta")
let borra = document.getElementById("borra")
let modifica = document.getElementById("modifica")
// Recuperamos la tabla
let tabla = document.getElementById("datos")

// Insertar empleado

// Eliminar empleado

// Modificar empleado
modifica.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault()
    // Pedimos el DNI del empleado a modificar
    let dni = prompt("Introduce el dni del empleado que quiere modificar")
    // Recuperamos todas las filas de la tabla
    let filas = tabla.getElementsByTagName("tr")
    // Variable con la posición del empleado
    let pos = -1
    // Recorremos las filas buscando al empleado y si lo encontramos guardamos su posición
    // Indice = 1 para no mirar la cabecera
    let indice = 1;
    while (indice < filas.length) {
        // Cogemos la fila que está en la posición
        let fila = filas[indice]
        // Obtenemos todas las columnas de la fila
        let columnas = fila.getElementsByTagName("td")
        // Comprobamos si la segunda columna coincide con el dni introducido
        if (columnas[1].textContent == dni){    
            pos = indice
        }
        // Le sumamos 1 al indice
        indice++
    };
    // Si despues de recorrer todas las filas la posición es -1 es que no existe
    if(pos == -1){
        alert("El empleado introducido no existe")
    }
    else{
        console.log(filas)
        console.log(pos)
        let nombre = prompt("Introduce el nombre del empleado")
        let apellido = prompt("Introduce los apellidos del empleado")
        // Recuperamos la fila entera
        let fila = filas[pos]
        // Recuperamos las columnas de la fila
        let cols = fila.getElementsByTagName("td")
        // Recuperamos el nombre y apellidos antiguos
        let nombreViejo = cols[2]
        let apellidoViejo = cols[3]
        // Creamos los nodos nuevos y les añadimos el texto
        let nombreNuevo = document.createElement("td")
        nombreNuevo.appendChild(document.createTextNode(nombre))
        let apellidoNuevo = document.createElement("td")
        apellidoNuevo.appendChild(document.createTextNode(apellido))
        // En la fila cambiamos los nodos viejos por los nuevos
        fila.replaceChild(nombreNuevo, nombreViejo)
        fila.replaceChild(apellidoNuevo, apellidoViejo)
    }
})