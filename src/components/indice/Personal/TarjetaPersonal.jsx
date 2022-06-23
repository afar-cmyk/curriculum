import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'

const TarjetaContacto = (props) => {
  const { titulo, contenido } = props

  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const {
    bordes,
    bordesHover,
    tarjetaTitulo,
    tarjetaTituloHover,
    tarjetaParrafo,
    tarjetaParrafoHover
  } = esquemaTema[temaActual]

  let contenedorTarjeta = {
    gap: { xs: '0.2em', sm: '0.3em' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `solid 1px ${bordes}`,
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
    '&:hover': { border: `solid 1px ${bordesHover}` },
    '&:hover h3': { color: tarjetaTituloHover },
    '&:hover p': { color: tarjetaParrafoHover },
    '& h3': {
      height: { xs: '15px' },
      width: 'fit-content',
      fontWeight: 700,
      lineHeight: '20px',
      fontSize: { xs: '15px', sm: '1.05em', xl: '1.13em' },
      color: tarjetaTitulo,
      m: 0
    },
    '& p': {
      lineHeight: '20px',
      width: 'fit-content',
      color: tarjetaParrafo,
      m: 0,
      fontSize: { xs: '15px', lg: '1.1em', xl: '1.1em' },
      height: { xs: '16px', lg: '1.1em', xl: '1.1em' }
    }
  }

  return (
    <Box component='div' sx={{ ...contenedorTarjeta }}>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
    </Box>
  )
}

export default TarjetaContacto
