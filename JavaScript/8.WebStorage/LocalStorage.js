// Recuperamos el botón enviar
let guardar = document.getElementById("enviar");

// Añadimos un evento cuando se hace click en el boton enviar
guardar.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault()
        // Recuperamos los datos del formulario
    let user = document.getElementById("user").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    // Creamos el objeto que vamos a guardar
    let usuario = {
            name: name,
            age: age,
            gender: gender
        }
        // Añadimos los datos al storage
    localStorage.setItem(user, JSON.stringify(usuario));
    // Añadimos el usuario a la lista de usuarios
    let select = document.getElementById("usuarios");
    let opcion = document.createElement("option");
    opcion.id = user;
    opcion.appendChild(document.createTextNode(user));
    select.appendChild(opcion);
    // Borramos los datos del formulario
    formulario.reset();
    // Borramos el valor mostrado, si hay alguno
    document.getElementById('valor').textContent = "";
})

// Recuperamos el desplegable
let usuarios = document.getElementById("usuarios");
// Añadimos un evento cuando seleccionamos un valor del desplegable
usuarios.addEventListener('change', () => {
    // Mostramos el valor para la clave seleccionada
    let objeto = JSON.parse(localStorage.getItem(usuarios[usuarios.selectedIndex].textContent));
    document.getElementById("name").value = objeto.name;
    document.getElementById("age").value = objeto.age;
    document.getElementById("gender").value = objeto.gender;
})

// Recuperamos el botón para eliminar un dato del storage
let eliminar = document.getElementById("eliminar");
// Añadimos un evento para cuando hacemos click en el botón de eliminar
eliminar.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault();
    // Recuperamos la clave que queremos eliminar
    usuario = document.getElementById("usuarios").value;
    // Eliminamos la clave del storage
    localStorage.removeItem(usuario);
    // Eliminamos el valor que estábamos mostrando
    document.getElementById('valor').textContent = "";
    // Recuperamos la opción del desplegable que estaba seleccionada
    let opcion = document.getElementById(usuario);
    // Eliminamos la opción del desplegable
    opcion.parentNode.removeChild(opcion);
    // Borramos los datos del formulario
    formulario.reset();
})

// Recuperamos el botón para eliminar todos los datos almacenados
let eliminarTodo = document.getElementById("eliminarTodo");
// Añadimos un evento para cuando hacemos click en el botón
eliminarTodo.addEventListener('click', (e) => {
    // Evitamos el comportamiento por defecto
    e.preventDefault();
    // Eliminamos todos los datos
    localStorage.clear();
    // Creamos un nuevo elemento select
    let nuevoSelect = document.createElement("select");
    nuevoSelect.id = "usuarios";
    let nuevoOption = document.createElement("option");
    nuevoOption.value = "default";
    nuevoOption.innerHTML = "Selecciona un usuario";
    nuevoSelect.appendChild(nuevoOption);
    // Cambiamos el select antiguo por el nuevo
    let select = document.getElementById("usuarios");
    select.parentNode.replaceChild(nuevoSelect, select);
    // Borramos los datos del formulario
    formulario.reset();
})