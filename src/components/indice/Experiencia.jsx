import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'

const Experiencia = () => {
  const { colorPrincipal, barrasColorPrincipal } =
    React.useContext(ColoresContext)

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
    },
    '& ul p': {
      m: 0,
      fontSize: { xs: '16px', lg: '1.2em' }
    }
  }

  let contenedorExperiencia = {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: { xs: '25px', md: '37px' }
  }

  let contenidoExperiencia = {
    margin: 0,
    pl: '22px',
    // width: { xs: '100%' },
    listStyle: 'square',
    '& li:not(:last-child)': {
      mb: '10px'
    },
    '& li::marker': {
      color: barrasColorPrincipal
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
        <Box component='div' sx={{ ...contenedorExperiencia }}>
          <div className='experiencias'>
            <FechaTitulo fecha='2020' empresa='Grupo Editorial Norma' />
            <Box component='ul' sx={{ ...contenidoExperiencia }}>
              <li>
                <p>
                  Emplantillado de proyectos digitales en la plataforma Netex
                  LearningMaker, utilizando HTML y CSS para ajustar el contenido
                  en base a los guiones provistos por el área de diseño.
                </p>
              </li>
              <li>
                <p>
                  Revisión y ajuste de las actividades para estudiantes en HTML,
                  MATLAB y LaTeX.
                </p>
              </li>
            </Box>
          </div>

          <div className='experiencias'>
            <FechaTitulo fecha='2018' empresa='Magenta Estudios' />
            <Box component='ul' sx={{ ...contenidoExperiencia }}>
              <li>
                <p>
                  Postproducción de videos para la marca Beckett Simonon que
                  serían utilizados para campañas publicitarias.
                </p>
              </li>
            </Box>
          </div>

          <div className='experiencias'>
            <FechaTitulo fecha='2016' empresa='HAC Promotor de Artistas' />
            <Box component='ul' sx={{ ...contenidoExperiencia }}>
              <li>
                <p>Actualización de la imagen corporativa.</p>
              </li>
              <li>
                <p>Creación de piezas publicitarias para redes sociales.</p>
              </li>
              <li>
                <p>
                  Producción y postpoducción de videos y fotografías para redes
                  sociales.
                </p>
              </li>
              <li>
                <p>
                  Creación de informes sobre el sondeo diario de las canciones
                  sonadas en la radio, utilizando datos recibidos en formato
                  XML.
                </p>
              </li>
            </Box>
          </div>

          <div className='experiencias'>
            <FechaTitulo fecha='2015' empresa='XFilms S.A.S' />
            <Box component='ul' sx={{ ...contenidoExperiencia }}>
              <li>
                <p>
                  Postproducción de videos para diferentes marcas, utilizando la
                  suite de Adobe para editar, colorizar y componer los videos
                  que luego serían utilizados en campañas publicitarias.
                </p>
              </li>
              <li>
                <p>Transcodificación de material de video utilizando FFMPEG.</p>
              </li>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  )
}

const FechaTitulo = (props) => {
  const { fecha, empresa } = props

  let envolturaTitulo = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '12px',
    marginBottom: { xs: '0.5vw', lg: '5px' }
  }

  return (
    <>
      <div style={{ ...envolturaTitulo }}>
        <p className='experiencia-fecha'>{fecha}</p>
        <h3>{empresa}</h3>
      </div>
    </>
  )
}

export default Experiencia
