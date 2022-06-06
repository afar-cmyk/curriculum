import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'
import LogoSVG from './LogoSVG'
import foto from '../../../images/foto.jpg'

const ImagenLogo = () => {
  const [estadoImagen, setEstadoImagen] = React.useState(true)

  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { fondo, logo } = esquemaTema[temaActual]

  return (
    <Box
      className='contenedor-logo-foto'
      component='button'
      type='button'
      aria-label='Logo y Foto'
      onClick={() => setEstadoImagen(!estadoImagen)}
      onKeyDown={() => setEstadoImagen(!estadoImagen)}
      sx={{
        backgroundImage: estadoImagen ? 'unset' : `url(${foto})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '50%',
        backgroundColor: fondo,
        padding: 'calc(20px + 0.5vw)',
        animationName: estadoImagen ? 'pulso' : 'unset',
        cursor: 'pointer',
        borderWidth: 0
      }}
    >
      <LogoSVG
        className='logo-svg'
        sx={{
          color: estadoImagen ? logo : 'transparent',
          fontSize: 'calc(110px + 4.5vw)',
          position: 'relative',
          bottom: '0.5vw'
        }}
      />
    </Box>
  )
}

export default ImagenLogo
