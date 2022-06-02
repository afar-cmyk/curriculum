import React from 'react'

let esquemaTextos = {
  español: {
    encabezado: 'Acerca de mí',
    valores: [
      {
        contenido: [
          <React.Fragment key='acercaEspañol'>
            <p>
              <strong>Diseñador UI/UX</strong>,{' '}
              <strong>editor de videos</strong> y<strong> fotógrafo</strong>,
              programador de software utilizando JAVA y Python, desarrollador
              web utilizando ReactJS y JavaScript bajo el entorno de trabajo
              ágil SCRUM.
            </p>
            <br />
            <p>
              Nivel de inglés intermedio, trabajo en equipo, proactivo, de
              rápido aprendizaje con las habilidades que puedan ser requeridas
              para llevar a cabo las tareas encomendadas.
            </p>
          </React.Fragment>
        ]
      }
    ]
  },
  ingles: {
    encabezado: 'About Me',
    valores: [
      {
        contenido: [
          <React.Fragment key='acercaIngles'>
            <p>
              <strong>UI/UX designer</strong>, <strong>video editor</strong> and
              <strong> photographer</strong>, software developer using JAVA and
              Python, web developer using ReactJS and JavaScript under the agile
              development framework SCRUM.
            </p>
            <br />
            <p>
              Intermediate English level, team player, proactive, fast learner
              with the required skills to carry out the given tasks.
            </p>
          </React.Fragment>
        ]
      }
    ]
  }
}

export default esquemaTextos
