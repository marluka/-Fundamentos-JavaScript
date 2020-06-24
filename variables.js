/* CLASE 3: Variables */

var nombre = "Marly", apellido = "Mejia"
var edad = 34

edad = '34 años'

console.log('Hola soy ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75


/* CLASE 04: Variables: Strings */

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

/* Interpolación de texto: ${código js} */
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

/* obtener un substring */
var str = nombre.substr(1, 2)