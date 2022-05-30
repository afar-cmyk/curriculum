const nombre = 'Andrés Felipe Álvarez Ramírez'
const telefono = '(+57) 319 388 0900'
const email = 'andres.felipealvarez03@gmail.com'
const ubicacion = 'Pereira, Colombia'

const textoEncabezado = {
  español: {
    encabezado: 'Información Personal',
    nombre: {
      titulo: 'Nombre Completo',
      contenido: nombre
    },
    telefono: {
      titulo: 'Teléfono',
      contenido: telefono
    },
    mail: {
      titulo: 'E-Mail',
      contenido: email
    },
    ubicacion: {
      titulo: 'Ubicación',
      contenido: ubicacion
    }
  },
  ingles: {
    encabezado: 'Personal Info',
    nombre: {
      titulo: 'Full Name',
      contenido: nombre
    },
    telefono: {
      titulo: 'Phone Number',
      contenido: telefono
    },
    mail: {
      titulo: 'E-Mail',
      contenido: email
    },
    ubicacion: {
      titulo: 'Location',
      contenido: ubicacion
    }
  }
}

export default textoEncabezado
