import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import TarjetaContacto from './Personal/TarjetaContacto'
import RedesSociales from './Personal/RedesSociales'
import textoPersonal from './Personal/textoPersonal'

const Contacto = () => {
  const { idiomaActual, titulosH2Base } = React.useContext(ColoresContext)

  let envolturaInformacion = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content',
    ...titulosH2Base,
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
        <h2>{textoPersonal[idiomaActual]['encabezado']}</h2>
        <Box component='div' sx={{ ...contenedorContacto }}>
          <TarjetaContacto
            titulo={textoPersonal[idiomaActual]['nombre']['titulo']}
            contenido={textoPersonal[idiomaActual]['nombre']['contenido']}
          />
          <TarjetaContacto
            titulo={textoPersonal[idiomaActual]['telefono']['titulo']}
            contenido={textoPersonal[idiomaActual]['telefono']['contenido']}
          />
          <TarjetaContacto
            titulo={textoPersonal[idiomaActual]['mail']['titulo']}
            contenido={textoPersonal[idiomaActual]['mail']['contenido']}
          />
          <TarjetaContacto
            titulo={textoPersonal[idiomaActual]['ubicacion']['titulo']}
            contenido={textoPersonal[idiomaActual]['ubicacion']['contenido']}
          />
        </Box>
        <span>
          <RedesSociales />
        </span>
      </Box>
    </>
  )
}

export default Contacto
