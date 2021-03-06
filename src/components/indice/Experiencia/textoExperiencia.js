import React from 'react'

let esquemaTextos = {
  español: {
    encabezado: 'Experiencia Laboral',
    valores: [
      {
        id: 'norma-es',
        titulo: 'Grupo Editorial Norma',
        fecha: '2020',
        contenido: [
          <p>
            Emplantillado de proyectos digitales en la plataforma Netex
            LearningMaker, utilizando HTML y CSS para ajustar el contenido en
            base a los guiones provistos por el área de diseño.
          </p>,
          <p>
            Revisión y ajuste de las actividades para estudiantes en HTML,
            MATLAB y LaTeX.
          </p>
        ]
      },
      {
        id: 'magenta-es',
        titulo: 'Magenta Estudios',
        fecha: '2018',
        contenido: [
          <p>
            Postproducción de videos para la marca Beckett Simonon que serían
            utilizados para campañas publicitarias.
          </p>
        ]
      },
      {
        id: 'hac-es',
        titulo: 'HAC Promotor de Artistas',
        fecha: '2016',
        contenido: [
          <p>Actualización de la imagen corporativa.</p>,
          <p>Creación de piezas publicitarias para redes sociales.</p>,
          <p>
            Producción y postproducción de videos y fotografías para redes
            sociales.
          </p>,
          <p>
            Creación de informes sobre el sondeo diario de las canciones sonadas
            en la radio, utilizando datos recibidos en formato XML.
          </p>
        ]
      },
      {
        id: 'xfilms-es',
        titulo: 'XFilms S.A.S',
        fecha: '2015',
        contenido: [
          <p>
            Postproducción de videos para diferentes marcas, utilizando la suite
            de Adobe para editar, colorizar y componer los videos que luego
            serían utilizados en campañas publicitarias.
          </p>,
          <p>Transcodificación de material de video utilizando FFMPEG.</p>
        ]
      }
    ]
  },
  ingles: {
    encabezado: 'Work Experience',
    valores: [
      {
        id: 'norma-en',
        titulo: 'Grupo Editorial Norma',
        fecha: '2020',
        contenido: [
          <p>
            Design templates for digital projects in the Netex LearningMaker
            platform, using HTML and CSS to adjust the content based on the
            guidelines and scripts provided by the design area.
          </p>,
          <p>
            Review and tweaking of activities for students in HTML, MATLAB and
            LaTeX.
          </p>
        ]
      },
      {
        id: 'magenta-en',
        titulo: 'Magenta Estudios',
        fecha: '2018',
        contenido: [
          <p>
            Video Post-production for the Beckett Simonon brand, used on
            advertising campaigns.
          </p>
        ]
      },
      {
        id: 'hac-en',
        titulo: 'HAC Promotor de Artistas',
        fecha: '2016',
        contenido: [
          <p>Update of the old corporate image.</p>,
          <p>Design of advertising material for social media campaigns.</p>,
          <p>
            Production and post-production of videos and photographs for social
            media campaigns.
          </p>,
          <p>
            Development of daily reports for the songs played in radio stations,
            using the extracted XML data.
          </p>
        ]
      },
      {
        id: 'xfilms-en',
        titulo: 'XFilms S.A.S',
        fecha: '2015',
        contenido: [
          <p>
            Video Post-production for different brands, using the Adobe CC Suite
            to edit, colorize and compose the content, used on advertising
            campaigns.
          </p>,
          <p>Video transcoding using FFMPEG.</p>
        ]
      }
    ]
  }
}

export default esquemaTextos
