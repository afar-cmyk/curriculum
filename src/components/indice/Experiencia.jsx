import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import ContenedorExperiencia from './Experiencia/ContenedorExperiencia'
import TituloSeccion from './TituloSeccion'
import esquemaTextos from './Experiencia/textoExperiencia'

const Experiencia = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

  let envolturaExperiencia = {
    minWidth: 'fit-content',
    mb: { xs: '42px', md: '48px', lg: '45px' },
    '& h3': {
      fontWeight: 700,
      fontSize: { xs: '1.08em', lg: '1.23em' },
      color: '#f2f2f2',
      m: 0
    }
  }

  return (
    <>
      <Box
        component='section'
        className='titulos experiencia'
        sx={{ ...envolturaExperiencia }}
      >
        <TituloSeccion titulo={textoEncabezado} />
        <ContenedorExperiencia valores={textoContenidos} />
      </Box>
    </>
  )
}

export default Experiencia
