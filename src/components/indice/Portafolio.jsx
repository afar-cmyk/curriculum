import React from 'react'
import { Box } from '@mui/material'
import TituloSeccion from './TituloSeccion'
import ColoresContext from './ColoresContext'
import esquemaTextos from './Portafolio/textoPortafolio'

const Portafolio = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  const { encabezado: textoEncabezado } = esquemaTextos[idiomaActual]

  let envolturaPortafolio = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'fit-content',
    mb: { xs: '42px', md: '48px', lg: '45px' }
  }

  return (
    <>
      <Box
        component='section'
        className='titulos portafolio'
        sx={{ ...envolturaPortafolio }}
      >
        <TituloSeccion titulo={textoEncabezado} />
        Coming Soon...
      </Box>
    </>
  )
}

export default Portafolio
