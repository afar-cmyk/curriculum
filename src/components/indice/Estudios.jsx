import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'

const Estudios = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  let envolturaEstudios = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content',
    '& h2': {
      color: '#f2f2f2',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    }
  }
  return (
    <>
      <Box
        component='section'
        className='formacion'
        sx={{ ...envolturaEstudios }}
      >
        <h2>Formación Académica</h2>
        <Box
          component='div'
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(auto-fill, minmax(340px, 1fr))'
            },
            gridGap: '20px',
            boxSizing: 'border-box'
          }}
        >
          <TarjetaEstudios
            titulo='Diplomado en Programación de Software'
            organizacion='UTP / MisiónTIC 2022'
            fecha='2021'
          />
          <TarjetaEstudios
            titulo='Tecnologia en Producción de Multimedia'
            organizacion='SENA Unigermana'
            fecha='2019'
          />
          <TarjetaEstudios
            titulo='Diplomado de Fotografía de la Naturaleza'
            organizacion='Universidad Nacional de Colombia'
            fecha='2019'
          />
          <TarjetaEstudios
            titulo='Diplomado de Fotografía Avanzada'
            organizacion='Escuela de Fotografía del Valle'
            fecha='2015'
          />
        </Box>
      </Box>
    </>
  )
}

const TarjetaEstudios = (props) => {
  let contenedorTarjeta = {
    border: 'solid 1px #11c3db26',
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
    maxWidth: { xs: '290px', sm: '325px', md: '374px' },
    '&:hover': { border: 'solid 1px #11c3db96' },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      lineHeight: 'calc(0.9ex / 0.32)',
      fontSize: { xs: '1.02em', sm: '1.05em', xl: '1.13em' },
      color: '#f2f2f2',
      m: 0
    },
    '& p': {
      width: 'fit-content',
      m: 0,
      fontSize: { xs: '16px', lg: '1.1em', xl: '1.1em' }
    }
  }

  const { titulo, organizacion, fecha } = props
  return (
    <>
      <Box component='div' sx={{ ...contenedorTarjeta }}>
        <h3>{titulo}</h3>
        <p>{organizacion}</p>
        <p>{fecha}</p>
      </Box>
    </>
  )
}

export default Estudios
