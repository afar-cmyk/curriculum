import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import textoAcerca from './Acerca/textoAcerca'
import TituloSeccion from './TituloSeccion'

const Acerca = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  let contenedorAcerca = {
    mb: { xs: '27px', md: '30px', lg: '45px' },
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
    <Box
      component='section'
      className='titulos acerca'
      sx={{ ...contenedorAcerca }}
    >
      <TituloSeccion titulo={textoAcerca[idiomaActual]['encabezado']} />
      {textoAcerca[idiomaActual]['contenido']}
    </Box>
  )
}

export default Acerca
