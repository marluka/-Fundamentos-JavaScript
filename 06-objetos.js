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