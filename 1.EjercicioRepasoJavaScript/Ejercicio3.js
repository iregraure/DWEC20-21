// Creamos el array con las provincias
let provincias = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"]

// Obtenemos el botón
let ordena = document.getElementById("ordena")

// Escribimos la etiqueta de apertura de table y fila
document.write('<table border = "1"><tr>')
// Recorremos los elementos ordenados
provincias.forEach(element => {
    // Abrimos la columna
    document.write('<td>')
    // Añadimos el elemento
    document.write(element)
    // Cerramos la columna
    document.write('</td>')
});
// Cuando hemos terminado de añadir todas las filas cerramos la columna y la tabla
document.write('</tr></table')

// Añadimos el evento para el botón
ordena.addEventListener('click', function(e){
    // Ordenamos las provincias
    provincias.sort()
    // Escribimos la etiqueta de apertura de table
    document.write('<table border = "1">')
    // Recorremos los elementos ordenados
    provincias.forEach(element => {
        // Abrimos la fila y la columna
        document.write('<tr><td>')
        // Añadimos el elemento
        document.write(element)
        // Cerramos la columna y la fila
        document.write('</td></tr>')
    });
    // Cuando hemos terminado de añadir todas las filas cerramos la tabla
    document.write('</table>')
})