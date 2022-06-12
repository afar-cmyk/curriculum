import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'
import placeholder from '../../../images/redes-logo.jpg'
import MiniaturaTarjeta from './MiniaturaTarjeta'
import InfoTarjeta from './InfoTarjeta'

const ContenedorPortafolio = () => {
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const {
    bordes,
    bordesHover,
    tarjetaTitulo,
    tarjetaTituloHover,
    tarjetaParrafo,
    tarjetaParrafoHover
  } = esquemaTema[temaActual]

  let contenedor = {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(316px, 1fr))'
    },
    gridGap: '20px',
    boxSizing: 'border-box'
  }

  let tarjeta = {
    height: '10em',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    // alignItems: 'center',
    border: `solid 1px ${bordes}`,
    borderRadius: '8px',
    // p: '12px',
    marginRight: 0,
    cursor: 'pointer',
    '&:hover': { border: `solid 1px ${bordesHover}` },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      // lineHeight: 'calc(1ex / 0.42);',
      fontSize: '1.1em',
      color: tarjetaTitulo,
      mt: 0,
      mb: '0.2em',
      ml: '1rem',
      mr: 0
    },
    '&:hover h3': { color: tarjetaTituloHover },
    '& p': {
      fontSize: { xs: '16px', lg: '1.1em', xl: '1em' },
      color: tarjetaParrafo,
      width: 'fit-content',
      my: 0,
      ml: '1rem',
      mr: 0
    },
    '&:hover p': { color: tarjetaParrafoHover }
  }

  let categoriaPrueba = ['Hola', 'Mundo']

  return (
    <Box component='div' sx={{ ...contenedor }}>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <InfoTarjeta
          titulo={'Curriculum & Portfolio'}
          listaCategorias={categoriaPrueba}
        />
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <InfoTarjeta titulo={'Rayo Neón'} listaCategorias={categoriaPrueba} />
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <InfoTarjeta
          titulo={'Bibliotech web'}
          listaCategorias={categoriaPrueba}
        />
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <InfoTarjeta
          titulo={'BTC 2 COP Bot'}
          listaCategorias={categoriaPrueba}
        />
      </Box>
    </Box>
  )
}

export default ContenedorPortafolio
