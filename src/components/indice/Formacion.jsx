import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import { español, ingles, encabezado } from './Formacion/formacionAcademica'
import TarjetaEstudios from './Formacion/TarjetaEstudios'

const Estudios = () => {
  const { colorPrincipal, estadoIdioma, idiomaActual } =
    React.useContext(ColoresContext)

  const formacionAcademica = estadoIdioma ? español : ingles

  let envolturaEstudios = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content',
    '& h2': {
      color: '#bfbfbf',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    }
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
        className='formacion'
        sx={{ ...envolturaEstudios }}
      >
        <h2>{encabezado[idiomaActual]}</h2>
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
