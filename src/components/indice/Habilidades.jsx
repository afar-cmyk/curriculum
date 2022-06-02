import React from 'react'
import { Box, LinearProgress } from '@mui/material'
import ColoresContext from './ColoresContext'
import TituloSeccion from './TituloSeccion'

const HabilidadesTecnicas = () => {
  const { barrasColorPrincipal, barrasColorSecundario, idiomaActual } =
    React.useContext(ColoresContext)

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
    fontWeight: 300,
    color: '#f2f2f2',
    marginBottom: '6px',
    width: '47%',
    height: 'fit-content'
  }

  let barraProgreso = {
    height: 10,
    borderRadius: 5,
    backgroundColor: barrasColorSecundario,
    '& span': { borderRadius: 5, backgroundColor: barrasColorPrincipal },
    '&:hover span': {
      backgroundColor: '#4abac9e6'
    }
  }

  const encabezado = {
    español: 'Habilidades Tecnicas',
    ingles: 'Technical Skills'
  }

  return (
    <>
      <Box
        component='section'
        className='titulos habilidades'
        sx={{ ...seccionHabilidades }}
      >
        <TituloSeccion titulo={encabezado[idiomaActual]} />
        <div style={{ ...envolturaHabilidades }}>
          {listaHabilidades.map((datos, index) => {
            const { habilidad, puntuacion } = datos
            return (
              <div key={index} style={{ ...contenedorHabilidades }}>
                {habilidad}
                <LinearProgress
                  aria-label={`habilidad ${habilidad}`}
                  variant='determinate'
                  value={puntuacion}
                  sx={{ ...barraProgreso }}
                />
              </div>
            )
          })}
        </div>
      </Box>
    </>
  )
}

let listaHabilidades = [
  {
    habilidad: 'JavaScript',
    puntuacion: 65
  },
  {
    habilidad: 'ReactJS',
    puntuacion: 65
  },
  {
    habilidad: 'Python',
    puntuacion: 50
  },
  {
    habilidad: 'Java',
    puntuacion: 40
  },
  {
    habilidad: 'MYSQL',
    puntuacion: 40
  },
  {
    habilidad: 'GraphQL',
    puntuacion: 40
  },
  {
    habilidad: 'Figma',
    puntuacion: 80
  },
  {
    habilidad: 'Adobe Premiere Pro',
    puntuacion: 85
  },
  {
    habilidad: 'Adobe Media Enconder',
    puntuacion: 75
  },
  {
    habilidad: 'Adobe Photoshop',
    puntuacion: 70
  },
  {
    habilidad: 'Adobe Illustrator',
    puntuacion: 65
  },
  {
    habilidad: 'Adobe After Effects',
    puntuacion: 50
  }
]

// const esquemaTextos = {
//   español: {
//     encabezado: 'string',
//     valores: [
//       {
//         titulo: 'string',
//         contenido: 'string'
//       }
//     ]
//   },
//   ingles: {
//     encabezado: 'string',
//     valores: [
//       {
//         titulo: 'string',
//         contenido: 'string'
//       }
//     ]
//   }
// }

export default HabilidadesTecnicas
