import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import esquemaTextos from './Acerca/textoAcerca'
import TituloSeccion from './TituloSeccion'

const Acerca = () => {
  const { idiomaActual, temaActual, esquemaTema } =
    React.useContext(ColoresContext)

  const { textos, textosHover } = esquemaTema[temaActual]

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

  let contenedorAcerca = {
    mb: { xs: '27px', md: '30px', lg: '45px' },
    '& p': {
      lineHeight: 'calc(1ex / 0.32)',
      width: { lg: '100%' },
      fontSize: { xs: '1.125em', lg: '1.2em' },
      m: 0,
      color: textos
    },
    '&:hover p': {
      color: textosHover
    }
  }
  return (
    <Box
      component='section'
      className='titulos acerca'
      sx={{ ...contenedorAcerca }}
    >
      <TituloSeccion titulo={textoEncabezado} />
      {textoContenidos.map((datos) => {
        const { contenido } = datos
        return contenido
      })}
    </Box>
  )
}

export default Acerca
