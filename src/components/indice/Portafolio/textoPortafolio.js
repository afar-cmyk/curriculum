import React from 'react'
import placeholder from '../../../images/redes-logo.jpg'

// Categorias: Desarrollo, Diseño, Edición de Video, Fotografia, Exposicion
// categories: Development, Design, Video editing, Photography, Exhibition

let esquemaTextos = {
  español: {
    encabezado: 'Portafolio',
    valores: [
      {
        titulo: 'Curriculum & Portfolio',
        contenido: {
          imagen: placeholder,
          categoria: ['Desarrollo', 'Diseño'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://andresfelipe.netlify.app/',
          repositorio: 'https://github.com/afar-cmyk/curriculum',
          descripcion: [
            <React.Fragment key='es-desc-curri'>
              <p>
                Aplicación web progresiva que sirve como hoja de vida y
                portafolio personal.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
                <strong>Material UI</strong>, integrando la mayoria de estilos
                CSS dentro de JavaScript por medio de JSS, diseño del sitio y
                logo minimalistas.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'Rayo Neón',
        contenido: {
          imagen: placeholder,
          categoria: ['Desarrollo', 'Diseño'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='es-desc-rayo'>
              <p>
                Aplicación web progresiva que sirve portafolio de servicios y
                medio de contacto para la marca Rayo Neón.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
                <strong>Material UI</strong>, integrando la mayoria de estilos
                CSS dentro de JavaScript por medio de JSS, diseño del sitio
                resposivo, dando enfasis en los metodos de contacto, rediseño
                del logo minimalista.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'Bibliotech web',
        contenido: {
          imagen: placeholder,
          categoria: ['Desarrollo', 'Diseño'],
          estado: 'Finalizado',
          fecha: '2021',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='es-desc-bibl'>
              <p>
                Sitio web para tipo plantilla para una libreria ficticia llamada
                Bibliotech.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>VueJS</strong> y{' '}
                <strong>BootstrapVue</strong>, desarrollo del backend en NodeJS
                y Express, fue un trabajo en conjunto a cuatro compañeros, en
                donde ademas se utilizo la metodologia SCRUM para agregar
                caracteristicas nuevas.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'BTC2COP Bot',
        contenido: {
          imagen: placeholder,
          categoria: ['Desarrollo', 'Diseño'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='es-desc-btc2'>
              <p>
                Bot que muestra el valor actual del Bitcoin en pesos colombianos
                y API en el sitio web que convierte el valor ingresado en BTC a
                pesos colombianos.
              </p>
              <br />
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
          categoria: ['Development', 'Design'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://andresfelipe.netlify.app/',
          repositorio: 'https://github.com/afar-cmyk/curriculum',
          descripcion: [
            <React.Fragment key='en-desc-curri'>
              <p>
                Aplicación web progresiva que sirve como hoja de vida y
                portafolio personal.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
                <strong>Material UI</strong>, integrando la mayoria de estilos
                CSS dentro de JavaScript por medio de JSS, diseño del sitio y
                logo minimalistas.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'Rayo Neón',
        contenido: {
          imagen: placeholder,
          categoria: ['Development', 'Design'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='en-desc-rayo'>
              <p>
                Aplicación web progresiva que sirve portafolio de servicios y
                medio de contacto para la marca Rayo Neón.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>GatsbyJS</strong> y{' '}
                <strong>Material UI</strong>, integrando la mayoria de estilos
                CSS dentro de JavaScript por medio de JSS, diseño del sitio
                resposivo, dando enfasis en los metodos de contacto, rediseño
                del logo minimalista.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'Bibliotech web',
        contenido: {
          imagen: placeholder,
          categoria: ['Development', 'Design'],
          estado: 'Finalizado',
          fecha: '2021',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='en-desc-bibl'>
              <p>
                Sitio web para tipo plantilla para una libreria ficticia llamada
                Bibliotech.
              </p>
              <br />
              <p>
                Desarrollo del sitio utilizando <strong>VueJS</strong> y{' '}
                <strong>BootstrapVue</strong>, desarrollo del backend en NodeJS
                y Express, fue un trabajo en conjunto a cuatro compañeros, en
                donde ademas se utilizo la metodologia SCRUM para agregar
                caracteristicas nuevas.
              </p>
            </React.Fragment>
          ]
        }
      },
      {
        titulo: 'BTC2COP Bot',
        contenido: {
          imagen: placeholder,
          categoria: ['Development', 'Design'],
          estado: 'Activo',
          fecha: '2022',
          url: 'https://url.com/',
          repositorio: 'https://url.com/',
          descripcion: [
            <React.Fragment key='en-desc-btc2'>
              <p>
                Bot que muestra el valor actual del Bitcoin en pesos colombianos
                y API en el sitio web que convierte el valor ingresado en BTC a
                pesos colombianos.
              </p>
              <br />
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
      }
    ]
  }
}

export default esquemaTextos