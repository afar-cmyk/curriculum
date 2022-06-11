import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'

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
    height: '12em',
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
      lineHeight: 'calc(0.9ex / 0.32)',
      fontSize: { xs: '1em', sm: '1.05em', xl: '1em' },
      color: tarjetaTitulo,
      m: 0
    },
    '&:hover h3': { color: tarjetaTituloHover },
    '& p': {
      color: tarjetaParrafo,
      width: 'fit-content',
      m: 0,
      fontSize: { xs: '16px', lg: '1.1em', xl: '1em' }
    },
    '&:hover p': { color: tarjetaParrafoHover }
  }

  let tarjetaImagen = {
    width: '100%',
    minHeight: '60%',
    backgroundColor: '#6a6a6a',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
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
  }

  return (
    <Box component='div' sx={{ ...contenedor }}>
      <Box component='div' sx={{ ...tarjeta }}>
        <div className='imagen' style={{ ...tarjetaImagen }} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <p style={{ marginLeft: '1em' }}>{'Curriculum & Portfolio'}</p>
          <p style={{ marginLeft: '1em' }}>
            {'Desarrollo'}, {'Diseño'}
          </p>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <div className='imagen' style={{ ...tarjetaImagen }} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <p style={{ marginLeft: '1em' }}>{'Rayo Neón'}</p>
          <p style={{ marginLeft: '1em' }}>
            {'Desarrollo'}, {'Diseño'}
          </p>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <div className='imagen' style={{ ...tarjetaImagen }} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <p style={{ marginLeft: '1em' }}>{'Bibliotech web'}</p>
          <p style={{ marginLeft: '1em' }}>
            {'Desarrollo'}, {'Diseño'}
          </p>
        </div>
      </Box>
      <Box component='div' sx={{ ...tarjeta }}>
        <div className='imagen' style={{ ...tarjetaImagen }} />
        <div className='info' style={{ ...tarjetaInfo }}>
          <p style={{ marginLeft: '1em' }}>{'BTC2COP Bot'}</p>
          <p style={{ marginLeft: '1em' }}>
            {'Desarrollo'}, {'Diseño'}
          </p>
        </div>
      </Box>
    </Box>
  )
}

export default ContenedorPortafolio
