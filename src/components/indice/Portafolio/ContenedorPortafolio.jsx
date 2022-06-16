import React from 'react'
import { Box } from '@mui/material'
import TarjetaPortafolio from './Tarjetas/TarjetaPortafolio'

const ContenedorPortafolio = (props) => {
  const valoresPortafolio = props.valores

  let contenedor = {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(316px, 1fr))'
    },
    gridGap: '20px',
    boxSizing: 'border-box'
  }

  return (
    <Box component='div' sx={{ ...contenedor }}>
      {valoresPortafolio.map((datos) => {
        const { id, titulo, imagen, categorias, enlaces } = datos
        return (
          <TarjetaPortafolio
            key={id}
            titulo={titulo}
            imagen={imagen}
            categorias={categorias}
            enlaces={enlaces}
          />
        )
      })}
    </Box>
  )
}

export default ContenedorPortafolio
