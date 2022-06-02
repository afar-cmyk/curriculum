import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import TarjetaPersonal from './Personal/TarjetaPersonal'
import RedesSociales from './Personal/RedesSociales'
import esquemaTextos from './Personal/textoPersonal'
import TituloSeccion from './TituloSeccion'

const Contacto = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

  let envolturaInformacion = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content'
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
        className='titulos personal'
        sx={{ ...envolturaInformacion }}
      >
        <TituloSeccion titulo={textoEncabezado} />
        <Box component='div' sx={{ ...contenedorContacto }}>
          {textoContenidos.map((datos) => {
            const { titulo, contenido } = datos
            return (
              <TarjetaPersonal
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
