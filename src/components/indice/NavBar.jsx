import React from 'react'
import { Chip, IconButton } from '@mui/material'
import { Download, GitHub, BrightnessMedium } from '@mui/icons-material'
import ColoresContext from './ColoresContext'
import curriculum from '../../static/documents/es_curriculum_andres.pdf'

const NavBar = () => {
  const { manejadorEstadoIdioma, idiomaActual } =
    React.useContext(ColoresContext)
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
    borderColor: '#11c3db52',
    color: '#a6a6a6',
    padding: '4px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.2em'
    },
    '&:hover': {
      color: '#f2f2f2',
      borderColor: '#11c3db96'
    }
  }

  let seccionIdioma = {
    display: 'flex'
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
            label={idiomaActual}
            sx={{ ...estilosIconos }}
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
