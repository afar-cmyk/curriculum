import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import ContenedorExperiencia from './Experiencia/ContenedorExperiencia'
import TituloSeccion from './TituloSeccion'

const Experiencia = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  let envolturaExperiencia = {
    minWidth: 'fit-content',
    '& h3': {
      fontWeight: 700,
      fontSize: { xs: '1.08em', lg: '1.23em' },
      color: '#f2f2f2',
      m: 0
    }
  }

  const encabezado = {
    español: 'Experiencia Laboral',
    ingles: 'Work Experience'
  }

  return (
    <>
      <Box
        component='section'
        className='titulos experiencia'
        sx={{ ...envolturaExperiencia }}
      >
        <TituloSeccion titulo={encabezado[idiomaActual]} />
        <ContenedorExperiencia />
      </Box>
    </>
  )
}

export default Experiencia
