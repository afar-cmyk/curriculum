import React from 'react'
import { Chip, IconButton } from '@mui/material'
import {
  Download,
  GitHub,
  BrightnessMedium,
  Language
} from '@mui/icons-material'
import ColoresContext from './ColoresContext'
import curriculum from '../../static/documents/es_curriculum_andres.pdf'

const NavBar = () => {
  const {
    manejadorEstadoIdioma,
    idiomaActual,
    estadoIdioma,
    manejadorEstadoTema,
    esquemaTema,
    temaActual
  } = React.useContext(ColoresContext)

  const { botones, botonesHover, botonesBackground, bordes, bordesHover } =
    esquemaTema[temaActual]

  let contenedorIconos = {
    position: 'absolute',
    marginTop: '1em',
    paddingLeft: '1em',
    paddingRight: '1em',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  }

  let seccionAccion = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '8px'
  }

  let estilosIconos = {
    border: 'solid 0.75px',
    borderColor: bordes,
    color: botones,
    padding: '4px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.2em'
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

  let seccionIdioma = {
    display: 'flex'
  }

  let botonIdioma = {
    ...estilosIconos,
    fontSize: '0.93em',
    height: '80%',
    '& .MuiSvgIcon-root': {
      color: estadoIdioma ? '#168d9c' : '#9c1660'
    },
    '&:hover .MuiSvgIcon-root': {
      color: estadoIdioma ? '#0bb9d0' : '#d00b78 '
    }
  }

  const textoIdioma = {
    español: {
      label: 'English'
    },
    ingles: {
      label: 'Español'
    }
  }

  return (
    <>
      <div style={{ ...contenedorIconos }}>
        <div style={{ ...seccionAccion }}>
          <IconButton
            size='small'
            title='Repositorio en GitHub'
            aria-label='repositorio en GitHub'
            href={'https://github.com/afar-cmyk/curriculum'}
            referrerPolicy='origin'
            rel='external'
            target='_blank'
            sx={{ ...estilosIconos }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            onClick={() => manejadorEstadoTema()}
            size='small'
            title='Cambiar colores del sitio'
            aria-label='Cambiar colores del sitio'
            sx={{ ...estilosIconos }}
          >
            <BrightnessMedium />
          </IconButton>
          <IconButton
            size='small'
            title='Descargar Curriculum Vitae'
            aria-label='Descargar Curriculum Vitae'
            href={curriculum}
            referrerPolicy='origin'
            rel='external'
            target='_blank'
            sx={{ ...estilosIconos }}
          >
            <Download />
          </IconButton>
        </div>
        <div style={{ ...seccionIdioma }}>
          <Chip
            onClick={() => manejadorEstadoIdioma()}
            variant='outlined'
            size='small'
            clickable={true}
            icon={<Language />}
            label={textoIdioma[idiomaActual]['label']}
            sx={{ ...botonIdioma }}
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
