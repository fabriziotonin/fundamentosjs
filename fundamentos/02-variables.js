// Const existe en el ambito bloque 
const nombre = "Pablo Marino";

//variables no pueden ser re-definidas
// const nombre = "sam"

//nombre = "salomon" // a las constantes no se les puede asignar otro valor

// ==============================
// Let existe en el ambito bloque 
let valorDado = 5;
valorDado = 4; //no hace falta poner let nuevamente
// ==============================
// var extiste en el ambito globarl
var num = 2;


// ==============================

if (true) {

  let valorDado = 7; //no es el mismo valorDado porque este lo estoy inicializando en otro

  var num = 10
  const nombre = "Marco"

  //scope o ambito
  console.log(valorDado + "Este es el let");
  console.log(num + "Este es la variable");
  console.log(nombre + "Esta es la constante");
}

console.log(num); // var si sobreescribe el valor

console.log(valorDado); //let no sobreescribe el valor

console.log(nombre);
