
function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  // console.log('Me han ejecutado')
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

/* Dentro del prototipo Persona, va a existir un atributo  
"saludar" que será una función, sin parametros */
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.medidas = function () {
  if (this.altura < 1.8) {
    console.log(`Soy bajo, mido ${this.altura}`)
  } else {
    console.log(`Soy alto, mido ${this.altura}`)
  }
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

/* se machaca el prototipo saludar heredado */
Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} soy desarrollador web"`)
}

// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.56)
// var arturo = new Desarrollador('Arturo', 'Martinez', 1.86)