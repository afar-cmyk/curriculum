import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import esquemaTextos from './Formacion/textoFormacion'
import TarjetaFormacion from './Formacion/TarjetaFormacion'
import TituloSeccion from './TituloSeccion'

const Estudios = () => {
  const { idiomaActual } = React.useContext(ColoresContext)

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

  let envolturaEstudios = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content'
  }

  let contenedorEstudios = {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(316px, 1fr))'
    },
    gridGap: '20px',
    boxSizing: 'border-box'
  }
  return (
    <>
      <Box
        component='section'
        className='titulos formacion'
        sx={{ ...envolturaEstudios }}
      >
        <TituloSeccion titulo={textoEncabezado} />
        <Box component='div' sx={{ ...contenedorEstudios }}>
          {textoContenidos.map((datos) => {
            const { id, titulo, organizacion, fecha } = datos
            return (
              <TarjetaFormacion
                key={id}
                titulo={titulo}
                organizacion={organizacion}
                fecha={fecha}
              />
            )
          })}
        </Box>
      </Box>
    </>
  )
}

export default Estudios
