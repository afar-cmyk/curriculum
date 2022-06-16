import React from 'react'
import { Box } from '@mui/material'
import MiniaturaTarjeta from './MiniaturaTarjeta'
import InfoTarjeta from './InfoTarjeta'
import ColoresContext from '../../ColoresContext'

const TarjetaPortafolio = (props) => {
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const {
    bordes,
    bordesHover,
    tarjetaTitulo,
    tarjetaTituloHover,
    tarjetaParrafo,
    tarjetaParrafoHover
  } = esquemaTema[temaActual]

  const { imagen, titulo, categorias, enlaces } = props

  let estilosTarjeta = {
    height: '10em',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    border: `solid 1px ${bordes}`,
    borderRadius: '8px',
    marginRight: 0,
    '&:hover': { border: `solid 1px ${bordesHover}` },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      fontSize: '1.1em',
      color: tarjetaTitulo,
      mt: 0,
      mb: '0.2em',
      mx: 0
    },
    '&:hover h3': { color: tarjetaTituloHover },
    '& p': {
      fontSize: { xs: '16px', lg: '1.1em', xl: '1em' },
      color: tarjetaParrafo,
      width: 'fit-content',
      m: 0
    },
    '&:hover p': { color: tarjetaParrafoHover }
  }

  return (
    <Box component='div' sx={{ ...estilosTarjeta }}>
      <MiniaturaTarjeta imagen={imagen} titulo={titulo} />
      <InfoTarjeta
        titulo={titulo}
        listaCategorias={categorias}
        listaEnlaces={enlaces}
      />
    </Box>
  )
}

export default TarjetaPortafolio
