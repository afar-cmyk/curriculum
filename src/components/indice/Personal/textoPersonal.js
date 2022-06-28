const nombre = 'Andrés Felipe Álvarez Ramírez'
const telefono = '(+57) 319 388 0900'
const email = 'andres.felipealvarez03@gmail.com'
const ubicacion = 'Pereira, Colombia'

let esquemaTextos = {
  español: {
    encabezado: 'Información Personal',
    valores: [
      {
        titulo: 'Nombre Completo',
        contenido: nombre
      },
      {
        titulo: 'Teléfono',
        contenido: telefono
      },
      {
        titulo: 'Correo Electrónico',
        contenido: email
      },
      {
        titulo: 'Ubicación',
        contenido: ubicacion
      }
    ]
  },
  ingles: {
    encabezado: 'Personal Info',
    valores: [
      {
        titulo: 'Full Name',
        contenido: nombre
      },
      {
        titulo: 'Phone Number',
        contenido: telefono
      },
      {
        titulo: 'E-Mail',
        contenido: email
      },
      {
        titulo: 'Location',
        contenido: ubicacion
      }
    ]
  }
}

export default esquemaTextos
