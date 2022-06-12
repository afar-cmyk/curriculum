import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'
import placeholder from '../../../images/redes-logo.jpg'
import MiniaturaTarjeta from './MiniaturaTarjeta'

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

  let tarjetaInfo = {
    width: '100%',
    minHeight: '40%',
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    // '& h3': {
    //   fontSize: '1.3em'
    // }
  }

  let contenedorCategoria = {
    borderRadius: '0.3em',
    backgroundColor: '#333333',
    width: 'fit-content',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    border: `solid 1px ${bordes}`,
    fontSize: '0.8em'
  }

  let envolturaCategorias = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.8em',
    marginLeft: '1rem'
  }

  return (
    <Box component='div' sx={{ ...contenedor }}>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <h3>{'Curriculum & Portfolio'}</h3>
          <div style={{ ...envolturaCategorias }}>
            <div style={{ ...contenedorCategoria }}>Desarrollo</div>
            <div style={{ ...contenedorCategoria }}>Diseño</div>
          </div>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <h3>{'Rayo Neón'}</h3>
          <div style={{ ...envolturaCategorias }}>
            <div style={{ ...contenedorCategoria }}>Desarrollo</div>
            <div style={{ ...contenedorCategoria }}>Diseño</div>
          </div>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <h3>{'Bibliotech web'}</h3>
          <div style={{ ...envolturaCategorias }}>
            <div style={{ ...contenedorCategoria }}>Desarrollo</div>
            <div style={{ ...contenedorCategoria }}>Diseño</div>
          </div>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <MiniaturaTarjeta imagen={placeholder} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <h3>{'BTC 2 COP Bot'}</h3>
          <div style={{ ...envolturaCategorias }}>
            <div style={{ ...contenedorCategoria }}>Desarrollo</div>
            <div style={{ ...contenedorCategoria }}>Diseño</div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default ContenedorPortafolio
