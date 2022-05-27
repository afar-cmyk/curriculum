import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'

const Acerca = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  let contenedorAcerca = {
    mb: { xs: '27px', md: '30px', lg: '45px' },
    '& h2': {
      color: '#bfbfbf',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    },
    '& p': {
      lineHeight: 'calc(1ex / 0.32)',
      width: { lg: '100%' },
      fontSize: { xs: '1.125em', lg: '1.2em' },
      m: 0
    },
    '& strong': {
      color: '#f2f2f2'
    }
  }
  return (
    <Box component='section' className='acerca' sx={{ ...contenedorAcerca }}>
      <h2>Sobre Mí</h2>
      <p>
        <strong>Diseñador UI/UX</strong>, <strong>editor de videos</strong> y
        <strong> fotógrafo</strong>, programador de software utilizando JAVA y
        Python, desarrollador web utilizando ReactJS y JavaScript, llevando un
        framework de trabajo ágil SCRUM.
      </p>
      <br />
      <p>
        Nivel de ingles intermedio, trabajo en equipo, proactivo, de rápido
        aprendizaje con las habilidades que puedan ser requeridas para llevar a
        cabo las tareas encomendadas.
      </p>
    </Box>
  )
}

export default Acerca
