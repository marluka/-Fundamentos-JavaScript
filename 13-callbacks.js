/* Hacer request */
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { crossDomain: true }

/* callback: una función que se ejecutará en el futuro, 
y q $.get será el encargado de llamarla cuando termine el request*/

const onResponse = function(data){
  /* arguments: es una variable que tienen todas las funciones
  y nos da un array con todos los parámetros q recibe la función */
  // console.log(arguments)
  console.log(`Hola yo soy ${data.name}`)
}

$.get(lukeUrl, options, onResponse)