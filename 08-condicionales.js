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

imprimirProfesiones(sacha)


/* RETO: Escribir una función imprimirSiEsMayorDeEdad */

function imprimirSiEsMayorDeEdad(persona){

  console.log(`${persona.nombre} es:`)

  if (persona.edad >= 18) {
    console.log('mayor de edad')
  }else{
    console.log('menor de edad')
  }

}

imprimirSiEsMayorDeEdad(sacha)
