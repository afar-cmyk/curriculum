import React from 'react'

// categorias: Desarrollo, Diseño, Edición de Video, Fotografia, Exposicion
// categories: Development, Design, Video editing, Photography, Exhibition

let esquemaTextos = {
  español: {
    encabezado: 'Portafolio',
    valores: [
      {
        id: 'curri-es',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'Curriculum & Portfolio',
        imagen: 'curriculum',
        categorias: ['Desarrollo', 'Diseño'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://andresfelipe.netlify.app/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/afar-cmyk/curriculum'
          }
        ],
        descripcion: [
          <React.Fragment key='es-desc-curri'>
            <p>
              Aplicación web progresiva que sirve como hoja de vida y portafolio
              personal.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
              <strong>Material UI</strong>, integrando la mayoria de estilos CSS
              dentro de JavaScript por medio de JSS, diseño del sitio y logo
              minimalistas.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'rayo-es',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'Rayo Neón',
        imagen: 'rayo',
        categorias: ['Desarrollo', 'Diseño'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://rayo-neon.netlify.app/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/afar-cmyk/Rayoneon'
          }
        ],
        descripcion: [
          <React.Fragment key='es-desc-rayo'>
            <p>
              Aplicación web progresiva que sirve portafolio de servicios y
              medio de contacto para la marca Rayo Neón.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
              <strong>Material UI</strong>, integrando la mayoria de estilos CSS
              dentro de JavaScript por medio de JSS, diseño del sitio resposivo,
              dando enfasis en los metodos de contacto, rediseño del logo
              minimalista.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'bibl-es',
        fecha: '2021',
        estado: 'Finalizado',
        titulo: 'Bibliotech web',
        imagen: 'bibliotech',
        categorias: ['Desarrollo', 'Diseño'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://www.bibliotech.biz/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/Bibliotech-DEV/Bibliotech-Web/'
          }
        ],
        descripcion: [
          <React.Fragment key='es-desc-bibl'>
            <p>
              Sitio web para tipo plantilla para una libreria ficticia llamada
              Bibliotech.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>VueJS</strong> y{' '}
              <strong>BootstrapVue</strong>, desarrollo del backend en NodeJS y
              Express, fue un trabajo en conjunto a cuatro compañeros, en donde
              ademas se utilizo la metodologia SCRUM para agregar
              caracteristicas nuevas.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'btc2-es',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'BTC 2 COP Bot',
        imagen: 'btc2cop',
        categorias: ['Desarrollo', 'Diseño'],
        enlaces: [
          {
            tipo: 'link',
            url: ''
          },
          {
            tipo: 'repo',
            url: ''
          }
        ],
        descripcion: [
          <React.Fragment key='es-desc-btc2'>
            <p>
              Bot que muestra el valor actual del Bitcoin en pesos colombianos y
              API en el sitio web que convierte el valor ingresado en BTC a
              pesos colombianos.
            </p>
            <p>
              Desarrollo del Bot utilizando <strong>NodeJS</strong> y{' '}
              <strong>Ngrook</strong>, webscrapping con{' '}
              <strong>Puppeteer</strong> para construir la API llamando los
              datos desde una fuente actualizada, desarrollo del sitio web con
              <strong>Nuxt3</strong> y <strong>Tailwind CSS</strong>.
            </p>
          </React.Fragment>
        ]
      }
    ]
  },
  ingles: {
    encabezado: 'Portfolio',
    valores: [
      {
        id: 'curri-en',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'Curriculum & Portfolio',
        imagen: 'curriculum',
        categorias: ['Development', 'Design'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://andresfelipe.netlify.app/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/afar-cmyk/curriculum'
          }
        ],
        descripcion: [
          <React.Fragment key='en-desc-curri'>
            <p>
              Aplicación web progresiva que sirve como hoja de vida y portafolio
              personal.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
              <strong>Material UI</strong>, integrando la mayoria de estilos CSS
              dentro de JavaScript por medio de JSS, diseño del sitio y logo
              minimalistas.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'rayo-en',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'Rayo Neón',
        imagen: 'rayo',
        categorias: ['Development', 'Design'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://rayo-neon.netlify.app/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/afar-cmyk/Rayoneon'
          }
        ],
        descripcion: [
          <React.Fragment key='en-desc-rayo'>
            <p>
              Aplicación web progresiva que sirve portafolio de servicios y
              medio de contacto para la marca Rayo Neón.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
              <strong>Material UI</strong>, integrando la mayoria de estilos CSS
              dentro de JavaScript por medio de JSS, diseño del sitio resposivo,
              dando enfasis en los metodos de contacto, rediseño del logo
              minimalista.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'bibl-en',
        fecha: '2021',
        estado: 'Finalizado',
        titulo: 'Bibliotech web',
        imagen: 'bibliotech',
        categorias: ['Development', 'Design'],
        enlaces: [
          {
            tipo: 'link',
            url: 'https://www.bibliotech.biz/'
          },
          {
            tipo: 'repo',
            url: 'https://github.com/Bibliotech-DEV/Bibliotech-Web/'
          }
        ],
        descripcion: [
          <React.Fragment key='en-desc-bibl'>
            <p>
              Sitio web para tipo plantilla para una libreria ficticia llamada
              Bibliotech.
            </p>
            <p>
              Desarrollo del sitio utilizando <strong>VueJS</strong> y{' '}
              <strong>BootstrapVue</strong>, desarrollo del backend en NodeJS y
              Express, fue un trabajo en conjunto a cuatro compañeros, en donde
              ademas se utilizo la metodologia SCRUM para agregar
              caracteristicas nuevas.
            </p>
          </React.Fragment>
        ]
      },
      {
        id: 'btc2-en',
        fecha: '2022',
        estado: 'Activo',
        titulo: 'BTC 2 COP Bot',
        imagen: 'btc2cop',
        categorias: ['Development', 'Design'],
        enlaces: [
          {
            tipo: 'link',
            url: ''
          },
          {
            tipo: 'repo',
            url: ''
          }
        ],
        descripcion: [
          <React.Fragment key='en-desc-btc2'>
            <p>
              Bot que muestra el valor actual del Bitcoin en pesos colombianos y
              API en el sitio web que convierte el valor ingresado en BTC a
              pesos colombianos.
            </p>
            <p>
              Desarrollo del Bot utilizando <strong>NodeJS</strong> y{' '}
              <strong>Ngrook</strong>, webscrapping con{' '}
              <strong>Puppeteer</strong> para construir la API llamando los
              datos desde una fuente actualizada, desarrollo del sitio web con
              <strong>Nuxt3</strong> y <strong>Tailwind CSS</strong>.
            </p>
          </React.Fragment>
        ]
      }
    ]
  }
}

export default esquemaTextos
