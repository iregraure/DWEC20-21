const inicializar = () => {
    // Creamos el array vacio
    let array = []
    // Creamos el indice del array
    let indice = 0;
    // Como tenemos que pedir 5 normbres utilizamos un bucle
    while (indice < 5) {
        let existe = false
        // Pedimos un nombre
        let nombre = prompt("Introduce un nombre")
        // Comprobamos si el array ya contiene el nombre
        // Para ello recorremos el array
        array.forEach(element => {
            // Para cada elemento comprobamos si es igual que el nombre
            if (element == nombre){
                // Si encontramos una coincidencia cambiamos el valor de existe
                existe = true
            }
        });
        if(existe == false){
            // Si el nombre no existe lo añadimos al array
            array[indice] = nombre
            // Aumentamos 1 al indice
            indice++
        }
        else{
            alert("El nombre ya existe, debe introducir otro nombre")
        }
    }
    // Ordenamos el array para que nos muestre las letras en orden
    array.sort()
    // Variable con el resultado a mostrar
    let resul = ""
    // Recorremos el array
    array.forEach(element => {
        // Variable auxiliar para no modificar el array original
        // Guardamos en la variable el nombre en mayúsculas
        let palabra = element.toUpperCase()
        // Nos quedamos solo con la primera letra
        palabra = palabra.charAt(0)
        //Añadimos la letra al resultado
        resul = resul + palabra
    });
    console.log(resul)
}