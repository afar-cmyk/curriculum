import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import ContenedorExperiencia from './Experiencia/ContenedorExperiencia'

const Experiencia = () => {
  const { idiomaActual, titulosH2Base } = React.useContext(ColoresContext)

  let envolturaExperiencia = {
    minWidth: 'fit-content',
    ...titulosH2Base,
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
        className='experiencia'
        sx={{ ...envolturaExperiencia }}
      >
        <h2>{encabezado[idiomaActual]}</h2>
        <ContenedorExperiencia />
      </Box>
    </>
  )
}

export default Experiencia
