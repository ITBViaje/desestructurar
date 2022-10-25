//En el caso de objetos o sea que retorne un objeto hay que poner
//entre paréntesis después del return o flecha.
const getUser = () =>({
    id:"12345",
    username: "Lucas"
})

console.log(getUser());

//En los valores primitivos no ponemos los paréntesis, por ejemplo, si queremos
//imprimir por consola "Hola mundo"

const user = getUser();
console.log(user);

//Ejercicio

function getUsuarioActivo(nombre){
    return {
        id:'ABC123',
        username: nombre
    }
}

const usuarioActivo = (nombre) => (
    {
        id:'ABC123',
        username:(nombre)
    })
const usuarioUser = usuarioActivo('Lucas');
console.log(usuarioUser);