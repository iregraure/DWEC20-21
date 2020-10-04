let fecha, dia, mes, anio, hora, minuto, segundo;

const muestraCronometro = () => {
    setInterval(() => {
        // Obtnemos la fecha actual
        fecha = new Date();
        dia = fecha.getDate();
        mes = fecha.getMonth() + 1;
        anio = fecha.getFullYear();
        hora = fecha.getHours();
        minuto = fecha.getMinutes();
        segundo = fecha.getSeconds();
        let fechaActual = `Hoy es ${dia} - ${mes} - ${anio} y son las ${hora}:${minuto}:${segundo} horas`;
        // Creamos un nuevo elemento p
        let nuevoP = document.createElement("p");
        // Le añadimos el texto
        nuevoP.appendChild(document.createTextNode(fechaActual));
        // Le añadimos el id
        nuevoP.setAttribute('id', 'cronometro');
        // Obtenemos el viejo nodo
        let viejoP = document.getElementById("cronometro");
        // Reemplazamos el viejo con el nuevo
        viejoP.parentNode.replaceChild(nuevoP, viejoP);
    }, 1000);
}

muestraCronometro();