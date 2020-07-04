/* Hacer request */
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, options, function(data){
    console.log(`Hola, yo soy ${data.name}`)
    if (callback) {
      callback()
    }
  })
}
/* para ganrantizar el orden de las respuestas 
utilizamos callbacks*/

obtenerPersonaje(1, function(){
  obtenerPersonaje(2, function(){
    obtenerPersonaje(3, function(){
      obtenerPersonaje(4,function(){
        obtenerPersonaje(5,function(){
          obtenerPersonaje(6)
        })
      })
    })
  })
})

