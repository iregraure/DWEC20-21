// Recuperamos los 3 botones
let inserta = document.getElementById("inserta")
let borra = document.getElementById("borra")
let modifica = document.getElementById("modifica")
// Recuperamos la tabla
let tabla = document.getElementById("datos")

// Insertar empleado
inserta.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault()
    // Pedimos el DNI del nuevo empleado
    let dni = prompt("Introduce el dni del empleado")
    // Obtenemos todas las filas de la tabla
    let filas = tabla.getElementsByTagName("tr")
    // Variable con la posición del empleado
    let pos = -1
    // Indice = 1 para no mirar la cabecera
    let indice = 1;
    // Recorremos las filas buscando al empleado y si lo encontramos guardamos su posición
    while (indice < filas.length) {
        // Cogemos la fila que está en la posición
        let fila = filas[indice]
        // Obtenemos todas las columnas de la fila
        let columnas = fila.getElementsByTagName("td")
        // Comprobamos si la segunda columna coincide con el dni introducido
        if (columnas[1].textContent == dni){   
            // Si el dni coincide guardamos su posición 
            pos = indice
        }
        // Le sumamos 1 al indice
        indice++
    };
    // Si despues de recorrer todas las filas la posición es distinta de -1 es que ya existe
    if(pos != -1){
        alert("Ya existe un empleado con ese DNI")
    }
    else{
        // Obtenemos el número de empleados
        let numEmpleados = filas.length
        // Obtenemos el último empleado registrado
        let ultimoEmpl = filas[numEmpleados-1]
        // Obtenemos el número del último empleado
        let numUltimoEmpleado = ultimoEmpl.getElementsByTagName("td")[0].textContent
        // Calculamos el número del nuevo empleado
        let numEmpl = parseInt(numUltimoEmpleado) + 1
        // Pedimos el nombre y los apellidos del empleado
        let nombre = prompt("Introduce el nombre del empleado")
        let apellido = prompt("Introduce los apellidos del empleado")
        // Creamos el nodo fila
        let filaNueva = document.createElement("tr")
        // Creamos los nodos de los datos y les añadimos los textos
        // Numero de empleado
        let numEmplNuevo = document.createElement("td")
        numEmplNuevo.appendChild(document.createTextNode(numEmpl))
        // DNI
        let dniNuevo = document.createElement("td")
        dniNuevo.appendChild(document.createTextNode(dni))
        // Nombre
        let nombreNuevo = document.createElement("td")
        nombreNuevo.appendChild(document.createTextNode(nombre))
        // Apellidos
        let apellidoNuevo = document.createElement("td")
        apellidoNuevo.appendChild(document.createTextNode(apellido))
        // A la fila le añadimos todos los nodos hijos
        filaNueva.appendChild(numEmplNuevo)
        filaNueva.appendChild(dniNuevo)
        filaNueva.appendChild(nombreNuevo)
        filaNueva.appendChild(apellidoNuevo)
        // Añadimos la fila nueva a la tabla
        tabla.appendChild(filaNueva)
        // Calculamos el número total de empleados
        let totalEmpleados = parseInt(filas.length - 1)
        // Creamos una nueva etiqueta caption
        let captionNueva = document.createElement("caption")
        // Creamos una etiqueta para poner el titulo en negrita
        let bold = document.createElement("b")
        // Añadimos el texto a la negrita
        bold.appendChild(document.createTextNode(`Número total de empleados: ${totalEmpleados}`))
        // Añadimos la negrita al caption
        captionNueva.appendChild(bold)
        // Obtenemos el nodo caption de la tabla
        let captionViejo = tabla.getElementsByTagName("caption")[0]
        // Sustituimos el viejo por el nuevo
        tabla.replaceChild(captionNueva, captionViejo)
    }
})
// Eliminar empleado
borra.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault()
    // Pedimos el DNI del empleado a borrar
    let dni = prompt("Introduce el dni del empleado que quieres eliminar")
    // Obtenemos todas las filas de la tabla
    let filas = tabla.getElementsByTagName("tr")
    // Variable con la posición del empleado
    let pos = -1
    // Indice = 1 para no mirar la cabecera
    let indice = 1;
    // Recorremos las filas buscando al empleado y si lo encontramos guardamos su posición
    while (indice < filas.length) {
        // Cogemos la fila que está en la posición
        let fila = filas[indice]
        // Obtenemos todas las columnas de la fila
        let columnas = fila.getElementsByTagName("td")
        // Comprobamos si la segunda columna coincide con el dni introducido
        if (columnas[1].textContent == dni){   
            // Si el dni coincide guardamos su posición 
            pos = indice
        }
        // Le sumamos 1 al indice
        indice++
    };
    // Si despues de recorrer todas las filas la posición es -1 es que no existe
    if(pos == -1){
        alert("El empleado no existe")
    }
    else{
        // Recuperamos la fila entera
        let fila = tabla.getElementsByTagName("tr")[pos]
        // Eliminamos la fila seleccionada
        fila.parentNode.removeChild(fila)
        // Calculamos el número total de empleados
        let totalEmpleados = parseInt(filas.length - 1)
        // Creamos una nueva etiqueta caption
        let captionNueva = document.createElement("caption")
        // Creamos una etiqueta para poner el titulo en negrita
        let bold = document.createElement("b")
        // Añadimos el texto a la negrita
        bold.appendChild(document.createTextNode(`Número total de empleados: ${totalEmpleados}`))
        // Añadimos la negrita al caption
        captionNueva.appendChild(bold)
        // Obtenemos el nodo caption de la tabla
        let captionViejo = tabla.getElementsByTagName("caption")[0]
        // Sustituimos el viejo por el nuevo
        tabla.replaceChild(captionNueva, captionViejo)
    }
})
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
    // Indice = 1 para no mirar la cabecera
    let indice = 1;
    // Recorremos las filas buscando al empleado y si lo encontramos guardamos su posición
    while (indice < filas.length) {
        // Cogemos la fila que está en la posición
        let fila = filas[indice]
        // Obtenemos todas las columnas de la fila
        let columnas = fila.getElementsByTagName("td")
        // Comprobamos si la segunda columna coincide con el dni introducido
        if (columnas[1].textContent == dni){   
            // Si el dni coincide guardamos su posición 
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
        // Pedimos los datos del empleado
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