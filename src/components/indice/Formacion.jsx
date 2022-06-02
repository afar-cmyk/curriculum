import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import { español, ingles, encabezado } from './Formacion/formacionAcademica'
import TarjetaEstudios from './Formacion/TarjetaEstudios'
import TituloSeccion from './TituloSeccion'

const Estudios = () => {
  const { estadoIdioma, idiomaActual } = React.useContext(ColoresContext)

  const formacionAcademica = estadoIdioma ? español : ingles

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
        <TituloSeccion titulo={encabezado[idiomaActual]} />
        <Box component='div' sx={{ ...contenedorEstudios }}>
          {formacionAcademica.map((datos) => {
            const { id, titulo, organizacion, fecha } = datos
            return (
              <TarjetaEstudios
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
