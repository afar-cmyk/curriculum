import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import ContenedorExperiencia from './Experiencia/ContenedorExperiencia'

const Experiencia = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  let envolturaExperiencia = {
    minWidth: 'fit-content',
    '& h2': {
      color: '#f2f2f2',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    },
    '& h3': {
      fontWeight: 700,
      fontSize: { xs: '1.08em', lg: '1.23em' },
      color: '#f2f2f2',
      m: 0
    }
  }
  return (
    <>
      <Box
        component='section'
        className='experiencia'
        sx={{ ...envolturaExperiencia }}
      >
        <h2>Experiencia Laboral</h2>
        <ContenedorExperiencia />
      </Box>
    </>
  )
}

export default Experiencia
