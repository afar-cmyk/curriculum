import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import TarjetaContacto from './Personal/TarjetaContacto'
import RedesSociales from './Personal/RedesSociales'
import esquemaTextos from './Personal/textoPersonal'

const Contacto = () => {
  const { idiomaActual, titulosH2Base } = React.useContext(ColoresContext)

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

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
        <h2>{textoEncabezado}</h2>
        <Box component='div' sx={{ ...contenedorContacto }}>
          {textoContenidos.map((datos) => {
            const { titulo, contenido } = datos
            return (
              <TarjetaContacto
                key={`info-${titulo}`}
                titulo={titulo}
                contenido={contenido}
              />
            )
          })}
        </Box>
        <span>
          <RedesSociales />
        </span>
      </Box>
    </>
  )
}

export default Contacto
