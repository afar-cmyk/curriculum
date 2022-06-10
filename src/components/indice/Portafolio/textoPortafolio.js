import React from 'react'
import placeholder from '../../../images/redes-logo.jpg'

// Categoria: Desarrollo, Diseño, Video, Fotografia, Exposicion

let esquemaTextos = {
  español: {
    encabezado: 'Portafolio',
    valores: [
      {
        titulo: 'Curriculum & Portfolio',
        contenido: {
          imagen: placeholder,
          categorias: ['Desarrollo', 'Diseño'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://andresfelipe.netlify.app/',
          descripcion: [
            <React.Fragment key='acercaEspañol'>
              <p>
                Desarrollo y Diseño del sitio utilizando{' '}
                <strong>GatsbyJS</strong> y <strong>MaterialUI 5</strong>,
                integrando la mayoria de estilos CSS dentro de JavaScript por
                medio de JSS, diseño del sitio y logo minimalistas.
              </p>
            </React.Fragment>
          ]
        }
      }
    ]
  },
  ingles: {
    encabezado: 'Portfolio',
    valores: [
      {
        titulo: 'Curriculum & Portfolio',
        contenido: {
          imagen: placeholder,
          categorias: ['Desarrollo', 'Diseño'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://andresfelipe.netlify.app/',
          descripcion: [
            <React.Fragment key='acercaEspañol'>
              <p>
                Desarrollo y Diseño del sitio utilizando{' '}
                <strong>GatsbyJS</strong> y <strong>MaterialUI 5</strong>,
                integrando la mayoria de estilos CSS dentro de JavaScript por
                medio de JSS, diseño del sitio y logo minimalistas.
              </p>
            </React.Fragment>
          ]
        }
      }
    ]
  }
}

export default esquemaTextos
