import React from 'react'
import { Box } from '@mui/material'
import TituloSeccion from './TituloSeccion'

const Portafolio = () => {
  let envolturaPortafolio = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'fit-content',
    mb: { xs: '42px', md: '48px', lg: '45px' }
  }
  return (
    <>
      <Box
        component='section'
        className='titulos portafolio'
        sx={{ ...envolturaPortafolio }}
      >
        <TituloSeccion titulo={'Portafolio'} />
        Coming Soon...
      </Box>
    </>
  )
}

export default Portafolio
