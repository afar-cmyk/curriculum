import React from 'react'
import { Box } from '@mui/material'
import foto from '../../images/foto.jpg'
import logo from '../../images/logo.svg'
import ColoresContext from './ColoresContext'

const Encabezado = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  const [estadoImagen, setEstadoImagen] = React.useState(true)
  const [imagenActual, setImagenActual] = React.useState(logo)
  const [animacionActual, setAnimacionActual] = React.useState('pulso')

  const estadoLogo = () => {
    setImagenActual(logo)
    setAnimacionActual('pulso')
  }

  const estadoFoto = () => {
    setImagenActual(foto)
    setAnimacionActual('unset')
  }

  React.useEffect(() => {
    estadoImagen ? estadoLogo() : estadoFoto()
  }, [estadoImagen])

  let contenedorTitulo = {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      fontSize: { xs: 'calc(1rem + 3.58vw)', lg: 'calc(1rem + 2.8vw)' },
      textAlignLast: { xs: 'center', sm: 'unset' },
      mt: 0,
      mb: 0,
      color: '#f2f2f2',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px'
    },
    '& sub': {
      fontSize: 'calc(0.8rem + 1vw)',
      fontFamily: 'Assistant',
      fontWeight: 300,
      alignSelf: 'center'
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
    '& img': {
      borderRadius: '50%',
      width: { xs: 'calc(110px + 10vw)', lg: 'calc(110px + 8vw)' },
      cursor: 'pointer',
      animationName: animacionActual
    }
  }

  return (
    <Box component='header' className='titulo' sx={{ ...envolturaTitulos }}>
      <Box
        component='img'
        alt='foto de perfil'
        src={imagenActual}
        onClick={() => setEstadoImagen(!estadoImagen)}
        onKeyDown={() => setEstadoImagen(!estadoImagen)}
      />
      <Box component='div' sx={{ ...contenedorTitulo }}>
        <h1>Andrés Felipe Alvarez</h1>
        <sub>Tecnólogo en Producción de Multimedia</sub>
      </Box>
    </Box>
  )
}

export default Encabezado
