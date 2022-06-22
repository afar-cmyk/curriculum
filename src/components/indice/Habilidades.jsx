import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'
import TituloSeccion from './TituloSeccion'
import esquemaTextos from './Habilidades/textoHabilidades'
import BarrasHabilidades from './Habilidades/BarrasHabilidades'

const HabilidadesTecnicas = () => {
  const { idiomaActual, temaActual, esquemaTema } =
    React.useContext(ColoresContext)

  const { textosBold } = esquemaTema[temaActual]

  const { encabezado: textoEncabezado, valores: textoContenidos } =
    esquemaTextos[idiomaActual]

  let seccionHabilidades = {
    display: 'flex',
    flexDirection: 'column',
    width: { lg: '100%' },
    mb: { xs: '42px', md: '48px', lg: '45px' }
  }

  let envolturaHabilidades = {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }

  let contenedorHabilidades = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    fontSize: { xs: '16px', lg: '1.2em' },
    fontFamily: 'Anaheim',
    fontWeight: 300,
    color: textosBold,
    marginBottom: '6px',
    width: '47%',
    height: 'fit-content'
  }

  return (
    <>
      <Box
        component='section'
        className='titulos habilidades'
        sx={{ ...seccionHabilidades }}
      >
        <TituloSeccion titulo={textoEncabezado} />
        <div style={{ ...envolturaHabilidades }}>
          {textoContenidos.map((datos, index) => {
            const { titulo, contenido } = datos
            return (
              <div key={index} style={{ ...contenedorHabilidades }}>
                {titulo}
                <BarrasHabilidades titulo={titulo} cantidad={contenido} />
              </div>
            )
          })}
        </div>
      </Box>
    </>
  )
}

export default HabilidadesTecnicas
