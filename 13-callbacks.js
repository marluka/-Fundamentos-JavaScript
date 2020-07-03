/* Hacer request */
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

const onResponse = function(data){
  console.log(`Hola, yo soy ${data.name}`)
}

function obtenerPersonaje(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, options, onResponse)
}

/* Debido al asincrinosmo de js no sabemos en que orden nos van a llegar las respuestas */
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)