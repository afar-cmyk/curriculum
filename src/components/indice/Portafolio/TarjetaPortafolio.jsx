import React from 'react'
import { Box } from '@mui/material'
import MiniaturaTarjeta from './Tarjetas/MiniaturaTarjeta'
import InfoTarjeta from './Tarjetas/InfoTarjeta'
import ColoresContext from '../ColoresContext'

const TarjetaPortafolio = (props) => {
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const {
    tarjetasBordes,
    tarjetasBordesHover,
    tarjetaTitulo,
    tarjetaTituloHover,
    tarjetaParrafo,
    tarjetaParrafoHover
  } = esquemaTema[temaActual]

  const { imagen, titulo, categorias, enlaces, onClick } = props

  let estilosTarjeta = {
    height: '10em',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    border: `solid 1px ${tarjetasBordes}`,
    borderRadius: '8px',
    marginRight: 0,
    cursor: 'pointer',
    '&:hover': { border: `solid 1px ${tarjetasBordesHover}` },
    '& h3': {
      width: 'fit-content',
      fontFamily: 'NeusaNext',
      fontWeight: 500,
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
    '&:hover p': { color: tarjetaParrafoHover },
    '& .miniatura-tarjeta': {
      opacity: '0.85'
    },
    '&:hover .miniatura-tarjeta': {
      opacity: '1'
    }
  }

  return (
    <>
      <Box component='div' onClick={onClick} sx={{ ...estilosTarjeta }}>
        <MiniaturaTarjeta imagen={imagen} titulo={titulo} />
        <InfoTarjeta
          titulo={titulo}
          listaCategorias={categorias}
          listaEnlaces={enlaces}
        />
      </Box>
    </>
  )
}

export default TarjetaPortafolio
