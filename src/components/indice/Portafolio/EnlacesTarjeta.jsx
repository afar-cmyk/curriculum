import React from 'react'
import ColoresContext from '../ColoresContext'
import { IconButton } from '@mui/material'
import { Link, GitHub } from '@mui/icons-material'

const EnlacesTarjeta = (props) => {
  const { titulo, enlaces } = props

  const { temaActual, esquemaTema, idiomaActual } =
    React.useContext(ColoresContext)

  const {
    bordes,
    bordesHover,
    botones,
    botonesHover,
    fondo,
    botonesBackground
  } = esquemaTema[temaActual]

  let botonesEnlaces = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40%',
    marginRight: '1rem',
    gap: '0.6em'
  }

  let estilosIconos = {
    border: 'solid 0.75px',
    borderColor: bordesHover,
    color: botones,
    padding: '4px',
    backgroundColor: fondo,
    '& .MuiSvgIcon-root': {
      fontSize: '1.3em'
    },
    '&&:hover': {
      color: botonesHover,
      borderColor: bordes,
      backgroundColor: botonesBackground
    },
    '&:hover .MuiChip-icon': {
      color: botonesHover
    }
  }

  const BotonEnlace = (props) => {
    const { tipo, titulo, enlace } = props

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
        {enlace ? (
          <IconButton
            size='small'
            title={ponerTitulo[idiomaActual][tipo]}
            aria-label={ponerAriaLabel[idiomaActual][tipo]}
            href={enlace}
            referrerPolicy='origin'
            rel='external'
            target='_blank'
            sx={{ ...estilosIconos }}
          >
            {tipo === 'repo' ? <GitHub /> : <Link />}
          </IconButton>
        ) : null}
      </>
    )
  }

  return (
    <div style={{ ...botonesEnlaces }}>
      {enlaces.map((datos) => {
        const { tipo, url } = datos
        return <BotonEnlace tipo={tipo} titulo={titulo} enlace={url} />
      })}
    </div>
  )
}

export default EnlacesTarjeta
