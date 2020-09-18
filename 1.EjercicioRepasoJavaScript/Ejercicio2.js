// Obtenemos los botones y el formulario
let form = document.getElementById("formulario")
let aniadir = document.getElementById("aniade")
let borrar = document.getElementById("borra")

// Añadimos el evento para el boton de añadir
aniadir.addEventListener('click', function(e){
    // Evitamos el comportamiento por defecto
    e.preventDefault()
    //Obtenemos los datos del formulario
    let elemento = form.elemento.value
    let posicion = form.posicion.value
    if(posicion == ""){
        alert("Debe introducir una posición")
    }
    else{
        // Obtenemos la lista completa
        let lista = document.getElementById("lista")
        // Creamos el nodo que tenemos que añadir
        let nuevoElemento = document.createElement("li")
        nuevoElemento.appendChild(document.createTextNode(elemento))
        // Obtenemos todos los elementos li de la lista
        let elementos = lista.getElementsByTagName("li")
        // Si la posición introducida es mayor que el número de elementos de la lista se añade el nuevo elemento al final
        if(posicion > elementos.length){
            lista.appendChild(nuevoElemento)
        }
        // Si no, se busca el elemento que está en la posición introducida y añadimos el nuevo elemento delante
        else{
            // Obtenemos todos los elementos li de la lista
            let elementoPos = elementos[posicion-1]
            // Añadimos el elemento delante del que acabamos de obtener
            lista.insertBefore(nuevoElemento, elementoPos)
        }
    }
})

// Añadimos el evento para el botón de borrar
borrar.addEventListener('click', function(e){
    // Evitamos el comportamiento por defecto
    e.preventDefault()
    // Obtenemos la posición del formulario
    let posicion = form.posicion.value
    // Recuperamos la lista de elementos
    let lista = document.getElementById("lista")
    let elementos = lista.getElementsByTagName("li")
    // Si la posición introducida es mayor que los elementos que tiene la lista mostramos una alerta
    if(posicion > elementos.length){
        alert("No hay tantos elementos en la lista")
    }
    // Si no, eliminamos el elemento
    else{
        // Recuperamos el elemento que está en la posición introducida
        let elemento = elementos[posicion-1]
        // Eliminamos el elemento recuperado
        lista.removeChild(elemento)
    }
})