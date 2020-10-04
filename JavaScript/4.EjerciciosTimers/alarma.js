// Creamos las variables necesarias para mostrar la hora actual
let fecha, hora, minuto, segundo;

// Creamos una función que calcula la hora actual
const calculaHora = () => {
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    let fechaActual = `${hora}:${minuto}:${segundo}`;
    return fechaActual;
}

// Creamos una función que nos muestre la hora actual y se actualice automáticamente
const muestraCronometro = () => {
    setInterval(() => {
        // Obtnemos la fecha actual
        let fechaActual = calculaHora();
        // Creamos un nuevo elemento p
        let nuevoP = document.createElement("p");
        // Le añadimos el texto
        nuevoP.appendChild(document.createTextNode(fechaActual));
        // Le añadimos el id
        nuevoP.setAttribute('id', 'horaActual');
        // Obtenemos el viejo nodo
        let viejoP = document.getElementById("horaActual");
        // Reemplazamos el viejo con el nuevo
        viejoP.parentNode.replaceChild(nuevoP, viejoP);
    }, 1000);
}

// Creamos una función que suma 2 minutos a la hora actual
const calculaHoraAlarma = () => {
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes() + 2;
    segundo = fecha.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
}

// Mostramos la hora actual
muestraCronometro();

// Recuperamos el botón para añadir una alarma
let boton = document.getElementById("setAlarma");
let horaAlarma, horaIntroducida
// Le añadimos el evento al botón
boton.addEventListener('click', () => {
    // Cuando el usuario hace click en el botón muestra un prompt pidiendo la hora de la alarma
    horaIntroducida = prompt("Introduce la hora de la alarma (hh:mm)");
    horaAlarma=`${horaIntroducida}:0`;
    setInterval(() => {
        // Calculamos la hora actual
        let horaActual = calculaHora();
        // Si las horas son iguales
        if(horaActual == horaAlarma){
            let continuar = prompt("¿Quiere descansar un poco más?")
            if(continuar == 'Yes' || continuar == 'yes'){
                horaAlarma = calculaHoraAlarma();
            }
        }
    }, 1000);
});