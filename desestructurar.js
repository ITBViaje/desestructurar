
//Desestructuración
//Extraemos los nombres de las propiedades de esta manera.
const persona = {
    nombre: 'Fede',
    edad: 25,
    clave: 'ABC123'
}
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

//La idea es no usar persona.
//Sino simplificar esta sintaxis. Funciona tanto para objetos como para arreglos.


const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

//La sintaxis es: const { nombre, edad, clave }

let array = ['Nico', 'Dante', 'Facu']

//const [primero, segundo, tercero] = array;

/*console.log(primero);
console.log(segundo);
console.log(tercero);*/

const newArray= array.filter( (e,i)=> i>0 )

console.log(newArray)

