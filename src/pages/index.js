import React from 'react'
import '../styles/global.css'
import { Box } from '@mui/material'
import { ColoresProvider } from '../components/indice/ColoresContext'
import Encabezado from '../components/indice/Encabezado'
import Acerca from '../components/indice/Acerca'
import Estudios from '../components/indice/Estudios'
import HabilidadesTecnicas from '../components/indice/HabilidadesTecnicas'
import Experiencia from '../components/indice/Experiencia'

export default function index() {
  return (
    <>
      <Box component='main' sx={{ ...contenedorPrincipal }}>
        <ColoresProvider>
          <Encabezado />

          <article>
            <Acerca />
            <Estudios />
            <HabilidadesTecnicas />
            <Experiencia />
          </article>
        </ColoresProvider>
      </Box>
    </>
  )
}

let contenedorPrincipal = {
  backgroundColor: '#0d0d0d',
  py: { xs: '37.5px', md: '107.5px', lg: '75px' },
  px: { xs: '60px', md: '215px', lg: '20vw', xl: '30vw' },
  minHeight: '100vh',
  minWidth: 'fit-content',
  boxSizing: 'border-box',
  blockSize: 'auto'
}
