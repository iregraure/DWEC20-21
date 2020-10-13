const boton = document.getElementById('boton');
let lista = document.getElementById('usuarios');

boton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            res.forEach(usuario => {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(`${usuario.id} - ${usuario.name}`));
                lista.appendChild(li);
            });
        })
})