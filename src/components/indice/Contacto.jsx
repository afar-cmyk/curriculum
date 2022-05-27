import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import TarjetaContacto from './Contacto/TarjetaContacto'
import RedesSociales from './Contacto/RedesSociales'

const Contacto = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  let envolturaInformacion = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content',
    '& h2': {
      color: '#bfbfbf',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    },
    '& span h3': {
      fontWeight: 700,
      fontSize: { xs: '1.125em', lg: '1.2em' },
      color: '#f2f2f2',
      m: 0
    },
    '& span p': {
      m: 0,
      fontSize: { xs: '1.125em', lg: '1.2em' }
    }
  }

  let contenedorContacto = {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(316px, 1fr))'
    },
    gridGap: '15px',
    boxSizing: 'border-box'
  }

  return (
    <>
      <Box
        component='section'
        className='contacto'
        sx={{ ...envolturaInformacion }}
      >
        <h2>Información Personal</h2>
        <Box component='div' sx={{ ...contenedorContacto }}>
          <TarjetaContacto
            titulo='Nombre Completo'
            contenido='Andrés Felipe Álvarez Ramírez'
          />
          <TarjetaContacto titulo='Telefono' contenido='(+57) 3193880900' />
          <TarjetaContacto
            titulo='E-Mail'
            contenido='andres.felipealvarez03@gmail.com'
          />
          <TarjetaContacto titulo='Ubicación' contenido='Pereira, Colombia' />
        </Box>
        <span>
          <RedesSociales />
        </span>
      </Box>
    </>
  )
}

export default Contacto
