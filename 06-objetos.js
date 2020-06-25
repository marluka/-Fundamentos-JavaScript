var marly = {
  nombre: 'Marly',
  apellido: 'Mejia',
  edad: 34
}

var javi = {
  nombre: 'Javier',
  apellido: 'Coy',
  edad: 43
}

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(marly)
imprimirNombreEnMayusculas(javi)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })