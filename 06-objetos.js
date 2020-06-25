var pepe = {
  nombre: 'Pepito',
  apellido: 'Perez',
  edad: 15
}

var jaime = {
  nombre: 'Jaimito',
  apellido: 'Contreras',
  edad: 28
}

/* 
Las últimas versiones de JavaScript nos permiten desglosar el 
objeto para acceder únicamente al atributo que nos interesa. 
Esto se consigue encerrando el nombre del atributo entre llaves { }.
*/
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre -> es lo mismo q la siguiente linea
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pepe)
imprimirNombreEnMayusculas(jaime)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })


/* RETO: crear una función que imprima: Hola me llamo ... y tengo ... años */

function imprimirNombreYedad(persona) {
  var { nombre } = persona
  var { edad } = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYedad(pepe)
imprimirNombreYedad(jaime)


/* CLASE 10 Parámetros como referencia o como valor 
 
Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.
Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función.
Se soluciona colocando tres puntos antes del nombre. Ej …persona.*/

// function cumpleaños(persona){
//   persona.edad += 1
// }

function cumpleaños(persona){
  return {
    ...persona,    /* ... crea una copia de persona */
    edad: persona.edad + 1
  }
}