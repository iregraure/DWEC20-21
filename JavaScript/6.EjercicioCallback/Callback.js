// Crea una función que solicite el usuario y recibirá por parámetro el id y una función de
// callback. Localizará al usuario sin necesidad de
// hacer ningún bucle y pintará por pantalla el nombre del usuario. Si el usuario no existe
// se ejecutará el callback indicando que “Not exist
// a user with id XXX”. Si existe se ejecutará el callback sin error y devolvemos el usuario

let usuarios = [
    {
        id: 1,
        name: 'Irene'
    }, 
    {
        id: 2,
        name: 'Timo'
    }, 
    {
        id: 3,
        name: 'Gloria'
    }];

const getUser = (id, callback) => {
    let user = usuarios.find(user => user.id == id);
    if(!user){
        callback(`No existe ningún usuario con el id ${id}`);
    }
    else{
        callback(null, user);
    }
}

let idUsuario = prompt("Introduce el id del usuario que quieres mostrar")

getUser(idUsuario, (error, usuario) => {
    let div = document.getElementById("resultado");
    let p = document.createElement("p");
    if (error){
        p.appendChild(document.createTextNode(error));
    }
    else {
        p.appendChild(document.createTextNode(`El nombre del usuario con id ${idUsuario} es ${usuario.name}`));
    }
    div.appendChild(p);
})