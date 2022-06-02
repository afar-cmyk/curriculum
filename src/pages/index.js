import React from 'react'
import '../styles/global.css'
import { Box } from '@mui/material'
import { ColoresProvider } from '../components/indice/ColoresContext'
import Encabezado from '../components/indice/Encabezado'
import Personal from '../components/indice/Personal'
import Acerca from '../components/indice/Acerca'
import Formacion from '../components/indice/Formacion'
import Habilidades from '../components/indice/Habilidades'
import Experiencia from '../components/indice/Experiencia'
import NavBar from '../components/indice/NavBar'

export default function index() {
  return (
    <>
      <ColoresProvider>
        <NavBar />
        <Box component='main' sx={{ ...contenedorPrincipal }}>
          <Encabezado />
          <article>
            <Personal />
            <Acerca />
            <Formacion />
            <Habilidades />
            <Experiencia />
          </article>
        </Box>
      </ColoresProvider>
    </>
  )
}

let contenedorPrincipal = {
  backgroundColor: '#0d0d0d',
  py: { xs: '37.5px', md: '107.5px', lg: '75px' },
  px: { xs: '6vw', md: '215px', lg: '20vw', xl: '30vw' },
  minHeight: '100vh',
  boxSizing: 'border-box',
  blockSize: 'auto'
}
