import React from 'react'
import { Chip, IconButton } from '@mui/material'
import { Download, GitHub, BrightnessMedium } from '@mui/icons-material'
import ColoresContext from './ColoresContext'

const NavBar = () => {
  let contenedorIconos = {
    position: 'absolute',
    top: '1em',
    left: '1em',
    display: 'flex',
    flexDirection: 'row',
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

  return (
    <>
      <div style={{ ...contenedorIconos }}>
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
          title='Descargar Curriculum'
          aria-label='Descargar Curriculum Vitae'
          sx={{ ...estilosIconos }}
        >
          <Download />
        </IconButton>
      </div>
    </>
  )
}

export default NavBar
