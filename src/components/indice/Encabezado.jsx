import React from 'react'
import { Box } from '@mui/material'
import ImagenLogo from './Encabezado/ImagenLogo'
import ColoresContext from './ColoresContext'
import textoEncabezado from './Encabezado/textoEncabezado'

const Encabezado = () => {
  const { idiomaActual, temaActual, esquemaTema } =
    React.useContext(ColoresContext)

  const { nombre, nombreSub, nombreHover, underline, underlineHover } =
    esquemaTema[temaActual]

  const { titulo, subtitulo } = textoEncabezado[idiomaActual]

  let contenedorTitulo = {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      fontSize: {
        xs: 'calc(1rem + 4.65vw)',
        sm: 'calc(1rem + 3.58vw)',
        lg: 'calc(1rem + 2.8vw)'
      },
      textAlignLast: { xs: 'center', sm: 'unset' },
      mt: 0,
      mb: 0,
      color: nombre,
      textDecoration: `underline ${underline}`,
      textUnderlineOffset: '2px'
    },
    '& sub': {
      fontSize: { xs: 'calc(0.85rem + 1vw)', sm: 'calc(0.8rem + 1vw)' },
      fontFamily: 'Assistant',
      fontWeight: 300,
      alignSelf: 'center',
      color: nombreSub
    }
  }

  let envolturaTitulos = {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    mb: { xs: '45px', md: '75px', lg: '75px' },
    '&:hover h1': {
      color: nombreHover,
      textDecoration: `underline ${underlineHover}`
    }
  }

  return (
    <Box
      component='header'
      className='titulos nombre'
      sx={{ ...envolturaTitulos }}
    >
      <ImagenLogo />
      <Box component='div' sx={{ ...contenedorTitulo }}>
        <h1>{titulo}</h1>
        <sub>{subtitulo}</sub>
      </Box>
    </Box>
  )
}

export default Encabezado
