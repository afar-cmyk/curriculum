import React from 'react'
import ColoresContext from '../ColoresContext'
import CategoriasTarjeta from './CategoriasTarjeta'
import { IconButton } from '@mui/material'
import { Link, GitHub } from '@mui/icons-material'

const InfoTarjeta = (props) => {
  const { titulo, listaCategorias } = props
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { bordes, bordesHover, botones, botonesHover, botonesBackground } =
    esquemaTema[temaActual]

  let contenedorInfo = {
    width: '100%',
    minHeight: '40%',
    backgroundColor: botonesBackground,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

  let informacionBasica = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
    marginLeft: '1rem'
  }

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
    borderColor: bordes,
    color: botones,
    padding: '4px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.3em'
    },
    '&&:hover': {
      color: botonesHover,
      borderColor: bordesHover,
      backgroundColor: botonesBackground
    },
    '&:hover .MuiChip-icon': {
      color: botonesHover
    }
  }

  return (
    <div className='info' style={{ ...contenedorInfo }}>
      <div style={{ ...informacionBasica }}>
        <h3>{titulo}</h3>
        <CategoriasTarjeta categorias={listaCategorias} />
      </div>
      <div style={{ ...botonesEnlaces }}>
        <IconButton
          size='small'
          title={'enlace'}
          aria-label={'enlace'}
          href={'https://www.google.com'}
          referrerPolicy='origin'
          rel='external'
          target='_blank'
          sx={{ ...estilosIconos }}
        >
          <Link />
        </IconButton>
        <IconButton
          size='small'
          title={'repositorio'}
          aria-label={'repositorio'}
          href={'https://www.github.com'}
          referrerPolicy='origin'
          rel='external'
          target='_blank'
          sx={{ ...estilosIconos }}
        >
          <GitHub />
        </IconButton>
      </div>
    </div>
  )
}

export default InfoTarjeta
