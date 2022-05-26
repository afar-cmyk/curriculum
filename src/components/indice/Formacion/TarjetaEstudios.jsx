import React from 'react'
import { Box } from '@mui/material'

const TarjetaEstudios = (props) => {
  let contenedorTarjeta = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px #11c3db26',
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
    '&:hover': { border: 'solid 1px #11c3db96' },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      lineHeight: 'calc(0.9ex / 0.32)',
      fontSize: { xs: '1em', sm: '1.05em', xl: '1em' },
      color: '#f2f2f2',
      m: 0
    },
    '& p': {
      width: 'fit-content',
      m: 0,
      fontSize: { xs: '16px', lg: '1.1em', xl: '1em' }
    }
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
