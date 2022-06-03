import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'

const TarjetaEstudios = (props) => {
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `solid 1px ${bordes}`,
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
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

  const { titulo, organizacion, fecha } = props
  return (
    <>
      <Box component='div' sx={{ ...contenedorTarjeta }}>
        <h3>{titulo}</h3>
        <p>{organizacion}</p>
        <p>{fecha}</p>
      </Box>
    </>
  )
}

export default TarjetaEstudios
