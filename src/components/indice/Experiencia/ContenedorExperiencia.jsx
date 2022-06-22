import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'
import FechaTitulo from './FechaTitulo'

const ContenedorExperiencia = (props) => {
  const { esquemaTema, temaActual } = React.useContext(ColoresContext)

  const experienciaLaboral = props.valores

  const { textos, textosHover, tarjetaTituloHover, fechasHover } =
    esquemaTema[temaActual]

  let experiencias = {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: { xs: '25px', md: '37px' }
  }

  let contenidoExperiencia = {
    lineHeight: '1.7em',
    wordSpacing: '0.05em',
    margin: 0,
    pl: '22px',
    listStyle: 'square',
    '& li:not(:last-child)': {
      mb: '10px'
    },
    '& li::marker': {
      color: fechasHover
    },
    '& p': {
      m: 0,
      fontSize: { xs: '16px', lg: '1.2em' },
      color: textos
    }
  }

  let tituloHover = {
    '&:hover .experiencia-fecha': {
      backgroundColor: fechasHover,
      color: tarjetaTituloHover
    },
    '&:hover h3': {
      color: tarjetaTituloHover
    },
    '&:hover li p': {
      color: textosHover
    }
  }

  return (
    <Box className='experiencias' component='div' sx={{ ...experiencias }}>
      {experienciaLaboral.map((datos) => {
        const { id, titulo, fecha, contenido } = datos
        return (
          <Box
            className={`experiencia-${id}`}
            key={`div-${id}`}
            sx={{ ...tituloHover }}
          >
            <FechaTitulo key={`titulo-${id}`} fecha={fecha} empresa={titulo} />
            <Box
              key={`ul-${id}`}
              component='ul'
              sx={{ ...contenidoExperiencia }}
            >
              {contenido.map((contenido, index) => {
                return <li key={`li-${id}-${index}`}>{contenido}</li>
              })}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default ContenedorExperiencia
