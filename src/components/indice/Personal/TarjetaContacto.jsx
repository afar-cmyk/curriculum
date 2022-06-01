import React from 'react'
import { Box } from '@mui/material'

const TarjetaContacto = (props) => {
  const { titulo, contenido } = props

  let contenedorTarjeta = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px #11c3db26',
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
    '&:hover': { border: 'solid 1px #11c3db96' },
    '&:hover h3': { color: '#f2f2f2' },
    '&:hover p': { color: '#d4d4d4' },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      lineHeight: 'calc(0.9ex / 0.32)',
      fontSize: { xs: '1em', sm: '1.05em', xl: '1.13em' },
      color: '#d9d9d9',
      m: 0
    },
    '& p': {
      width: 'fit-content',
      color: '#bfbfbf',
      m: 0,
      fontSize: { xs: '16px', lg: '1.1em', xl: '1.1em' }
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
