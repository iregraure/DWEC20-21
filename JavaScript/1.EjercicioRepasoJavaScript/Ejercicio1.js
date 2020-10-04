// Obtenemos el botón y el formulario
let boton = document.getElementById("aplicar")
let formulario = document.getElementById("form")

boton.addEventListener('click', function(e){
    // Evitamos los comportamientos por defecto
    e.preventDefault()
    // Obtenemos los datos del formulario
    let posicion = formulario.posicion.value
    let equipo = formulario.equipo.value
    let puntos = formulario.puntos.value
    // Recuperamos la tabla
    let tabla = document.getElementById("tabla")
    // Obtenemos la fila que queremos modificar
    let filaVieja = tabla.getElementsByTagName("tr")[posicion]
    // Obtenemos la columna del equipo
    let equipoViejo = filaVieja.getElementsByTagName("td")[1]
    // Creamos el nuevo nodo para la columna del equipo y le añadimos el texto
    let equipoNuevo = document.createElement("td")
    equipoNuevo.appendChild(document.createTextNode(equipo))
    // Obtenemos la columna de los puntos
    let puntosViejo = filaVieja.getElementsByTagName("td")[2]
    // Creamos el nuevo nodo para la columna delos puntos y le añadimos el texto
    let puntosNuevo = document.createElement("td")
    puntosNuevo.appendChild(document.createTextNode(puntos))
    // Modificamos la columna equipo de la fila
    filaVieja.replaceChild(equipoNuevo, equipoViejo)
    // Modificamos la columna puntos de la fila
    filaVieja.replaceChild(puntosNuevo, puntosViejo)
})