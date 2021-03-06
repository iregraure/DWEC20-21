let caja = document.getElementById("box");

// Ejercicio 1
caja.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    caja.classList.replace('box', 'sobre');
})

caja.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    caja.classList.replace('sobre', 'box');
})

caja.addEventListener('mousedown', (e) => {
    e.preventDefault();
    console.log("Has pulsado la caja");
})

caja.addEventListener('mouseup', (e) => {
    e.preventDefault();
    console.log("Has soltado el botón izquierdo dentro de la caja");
})

// Ejercicio 2
let texto = document.getElementById("texto");

texto.addEventListener('keydown', (e) => {
    let letra = e.key;
    console.log(`Has pulsado la tecla ${letra}`);
})

texto.addEventListener('keyup', (e) => {
    console.log("Has soltado una tecla");
})

// Ejercicio 3
let boton = document.getElementById("boton");

boton.addEventListener('click', (e) => {
    e.preventDefault();
    muestraEntradaPorTeclado()
})

const muestraEntradaPorTeclado = () => {
    let textoForm = document.getElementById("textoForm");
    textoForm.addEventListener('keyup', (e) => {
        console.log(e.key);
    })
}

// Ejercicio 4
let galeria = document.getElementById("gallery");

galeria.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.className.match('gallery_item')){
        e.target.classList.replace('gallery_item', 'gallery_click');
    }
    else{
        e.target.classList.replace('gallery_click', 'gallery_item');
    }
})