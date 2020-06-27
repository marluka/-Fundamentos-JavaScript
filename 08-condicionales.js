var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}


function imprimirProfesiones(persona){

  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }

}

// imprimirProfesiones(sacha)


/* RETO: Escribir una función imprimirSiEsMayorDeEdad */

// function imprimirSiEsMayorDeEdad(persona){

//   console.log(`${persona.nombre} es:`)

//   if (persona.edad >= 18) {
//     console.log('mayor de edad')
//   }else{
//     console.log('menor de edad')
//   }

// }

// imprimirSiEsMayorDeEdad(sacha)


/* CLASE 13: Funciones que retornan valores */

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {

  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }

}

// imprimirSiEsMayorDeEdad(juan)


/* CLASE 14: Arrow functions */

/* funcion anonima */
var esMayorDeEdad2 = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

// console.log (esMayorDeEdad2(sacha))

/* Arrow function: equivalente a la anterior
se puede omitir la palabra reservada function y las llaves */

// const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD

// desestructurando el objeto persona
const esMayorDeEdad3 = ({edad}) => edad >= MAYORIA_DE_EDAD

function permitirAcceso(persona){
  if (!esMayorDeEdad3(persona)) {
    console.log('ACCESO DENEGADO')
  }
}

// permitirAcceso(sacha)
// permitirAcceso(juan)


/* RETO: Escribir una función esMenorDeEdad como arrow function 
que devuelva la negación de esMayorDeEdad */

const esMenorDeEdad = (persona) => ! esMayorDeEdad3(persona)



