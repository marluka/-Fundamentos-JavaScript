var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

/* function aumentarDePeso(persona){
  return persona.peso += INCREMENTO_PESO
} */
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

/* aumentarDePeso: Esta constante es equivalente a la función anterior.
 => sin {} implicitamente retorna la sentencia que le sigue */

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    adelgazar(sacha)
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)



/* ------------ CLASE 16: Loops while ------------ */

const comeMucho = () => Math.random() < 0.3 
const realizaDeporte = () => Math.random() < 0.4  

const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META) {
  // debugger
  if (comeMucho()) {
    aumentarDePeso(sacha)
  }
  if (realizaDeporte()) {
    adelgazar(sacha)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`)


/* ------------ CLASE 16: Estructuras repetitivas: do-while ------------ */

var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve())

if (contador === 1) {
  console.log(`Fui a ver si llovía ${contador} vez`)
} else {
  console.log(`Fui a ver si llovía ${contador} veces`)
}