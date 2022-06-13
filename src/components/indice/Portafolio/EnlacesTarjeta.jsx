import React from 'react'
import ColoresContext from '../ColoresContext'
import { IconButton } from '@mui/material'
import { Link, GitHub } from '@mui/icons-material'

const EnlacesTarjeta = (props) => {
  const { enlaces } = props

  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

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

  const BotonURL = (props) => {
    const { enlace } = props
    return enlace ? (
      <IconButton
        size='small'
        title={'Enlace'}
        aria-label={'Enlace'}
        href={enlace}
        referrerPolicy='origin'
        rel='external'
        target='_blank'
        sx={{ ...estilosIconos }}
      >
        <Link />
      </IconButton>
    ) : null
  }

  const BotonRepositorio = (props) => {
    const { enlace } = props
    return enlace ? (
      <IconButton
        size='small'
        title={'Repositorio'}
        aria-label={'Repositorio'}
        href={enlace}
        referrerPolicy='origin'
        rel='external'
        target='_blank'
        sx={{ ...estilosIconos }}
      >
        <GitHub />
      </IconButton>
    ) : null
  }

  return (
    <div style={{ ...botonesEnlaces }}>
      {enlaces.map((datos) => {
        const { url, repositorio } = datos
        return (
          <>
            <BotonURL enlace={url} />
            <BotonRepositorio enlace={repositorio} />
          </>
        )
      })}
    </div>
  )
}

export default EnlacesTarjeta
