const boton = document.getElementById('boton');
let lista = document.getElementById('usuarios');

boton.addEventListener('click', () => {
    let xhr;
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        let usuarios = JSON.parse(data.target.response);
        usuarios.forEach(usuario => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${usuario.id} - ${usuario.name}`));
            lista.appendChild(li);
        });
    })

    xhr.send();
})