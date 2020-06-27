var x = 4, y = '4';

x == y /* true: compara valores */
x === y /* false: compara valor y tipo */

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}

/* El mismo objeto q sacha 
misma posicion en memoria ram */
var persona1 = sacha

persona1.nombre = 'pepe'

/* otro objeto distinto de sacha */
var persona2 = {
  ...sacha
}

