import React from 'react'
import { Chip } from '@mui/material'
import { GitHub, WhatsApp, LinkedIn } from '@mui/icons-material'
import ColoresContext from '../ColoresContext'

const RedesSociales = () => {
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { botones, botonesHover, botonesBackground, bordes, bordesHover } =
    esquemaTema[temaActual]

  const listaRedes = [
    {
      red: 'GitHub',
      enlace: 'https://github.com/afar-cmyk',
      icono: <GitHub />
    },
    {
      red: 'LinkedIn',
      enlace: 'https://www.linkedin.com/in/afar-cmyk',
      icono: <LinkedIn />
    },
    {
      red: 'WhatsApp',
      enlace: 'https://wa.me/573193880900',
      icono: <WhatsApp />
    }
  ]

  let estilosBoton = {
    px: '6px',
    py: '3px',
    fontSize: '13px',
    borderColor: bordes,
    color: botones,
    '& .MuiChip-icon': {
      fontSize: '1.3em'
    },
    '&:hover .MuiChip-icon': {
      color: botonesHover
    },
    '&&:hover': {
      borderColor: bordesHover,
      backgroundColor: botonesBackground,
      color: botonesHover
    }
  }

  let contenedorBotones = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: '10px',
    rowGap: '12px',
    marginTop: '23px'
  }
  return (
    <div style={{ ...contenedorBotones }}>
      {listaRedes.map((datos, index) => {
        const { red, enlace, icono } = datos
        return (
          <Chip
            key={index}
            variant='outlined'
            size='small'
            clickable={true}
            label={red}
            component='a'
            referrerPolicy='origin'
            rel='external'
            target='_blank'
            href={enlace}
            icon={icono}
            sx={{ ...estilosBoton }}
          />
        )
      })}
    </div>
  )
}

export default RedesSociales
