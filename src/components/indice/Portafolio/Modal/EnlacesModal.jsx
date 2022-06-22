import React from 'react'
import { Chip } from '@mui/material'
import { Link, GitHub } from '@mui/icons-material'
import ColoresContext from '../../ColoresContext'

const EnlacesModal = (props) => {
  const { titulo, enlaces } = props

  const { temaActual, esquemaTema, idiomaActual } =
    React.useContext(ColoresContext)

  const { botones, botonesHover, tarjetasBordes, tarjetasBordesHover } =
    esquemaTema[temaActual]

  let botonesEnlaces = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8em',
    color: '#cccccc'
  }

  let estilosIconos = {
    fontFamily: 'Source Sans Pro',
    border: 'solid 0.75px',
    borderColor: tarjetasBordes,
    color: botones,
    padding: '4px',
    backgroundColor: '#00000040',
    '& .MuiSvgIcon-root': {
      fontSize: '1.3em'
    },
    '&&:hover': {
      color: botonesHover,
      borderColor: tarjetasBordesHover,
      backgroundColor: '#00000000'
    },
    '&:hover .MuiChip-icon': {
      color: botonesHover
    }
  }

  let botonIdioma = {
    ...estilosIconos,
    fontSize: '0.85em',
    height: '80%',
    '&:hover .MuiSvgIcon-root': {
      color: botonesHover
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.25em',
      color: botones
    }
  }

  const BotonEnlace = (props) => {
    const { tipo, titulo, enlace } = props

    let ponerLabel = {
      español: {
        link: 'Sitio Web',
        repo: 'GitHub'
      },
      ingles: {
        link: 'Website',
        repo: 'GitHub'
      }
    }

    let ponerAriaLabel = {
      español: {
        link: `enlace al sitio web de ${titulo}`,
        repo: `enlace al repositorio de ${titulo}`
      },
      ingles: {
        link: `link to the website of ${titulo}`,
        repo: `link to the repository of ${titulo}`
      }
    }

    let ponerTitulo = {
      español: {
        link: `Sitio web de ${titulo}`,
        repo: `Repositorio de ${titulo}`
      },
      ingles: {
        link: `${titulo}'s website`,
        repo: `${titulo}'s repository`
      }
    }

    return (
      <>
        <Chip
          label={ponerLabel[idiomaActual][tipo]}
          variant='outlined'
          size='medium'
          clickable
          title={ponerTitulo[idiomaActual][tipo]}
          aria-label={ponerAriaLabel[idiomaActual][tipo]}
          component='a'
          href={enlace}
          referrerPolicy='origin'
          rel='external'
          target='_blank'
          icon={tipo === 'repo' ? <GitHub /> : <Link />}
          sx={{ ...botonIdioma }}
        />
      </>
    )
  }

  const verificarEnlacesVacios = (enlaces) => {
    return enlaces[0]['url'] === '' && enlaces[1]['url'] === ''
  }

  let respuestaEnlacesVacios = {
    español: 'Aún no hay enlaces que mostrar...',
    ingles: 'No links to display yet...'
  }

  return (
    <div style={{ ...botonesEnlaces }}>
      {verificarEnlacesVacios(enlaces)
        ? respuestaEnlacesVacios[idiomaActual]
        : enlaces.map((datos) => {
            const { tipo, url } = datos
            return (
              <BotonEnlace
                key={`boton-${tipo}`}
                tipo={tipo}
                titulo={titulo}
                enlace={url}
              />
            )
          })}
    </div>
  )
}

export default EnlacesModal
