import React from 'react'
import { Box, Chip } from '@mui/material'
import ColoresContext from './ColoresContext'
import { GitHub, Instagram, Twitter, YouTube } from '@mui/icons-material'

// whatsapp, github, correo electronico, instagram o twitter

const Contacto = () => {
  const { colorPrincipal } = React.useContext(ColoresContext)

  let envolturaInformacion = {
    mb: { xs: '46px', md: '48px', lg: '45px' },
    minWidth: 'fit-content',
    '& h2': {
      color: '#f2f2f2',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    },
    '& span h3': {
      fontWeight: 700,
      fontSize: { xs: '1.125em', lg: '1.2em' },
      color: '#f2f2f2',
      m: 0
    },
    '& span p': {
      m: 0,
      fontSize: { xs: '1.125em', lg: '1.2em' }
    }
  }
  return (
    <>
      <Box
        component='section'
        className='informacion'
        sx={{ ...envolturaInformacion }}
      >
        <h2>Información Personal</h2>
        <Box
          component='div'
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(auto-fill, minmax(316px, 1fr))'
            },
            gridGap: '15px',
            boxSizing: 'border-box'
          }}
        >
          <TarjetaEstudios
            titulo='Nombre Completo'
            organizacion='Andrés Felipe Alvarez Ramirez'
          />
          <TarjetaEstudios titulo='Telefono' organizacion='(+57) 3193880900' />
          <TarjetaEstudios
            titulo='E-Mail'
            organizacion='andres.felipealvarez03@gmail.com'
          />
          <TarjetaEstudios
            titulo='Ubicación'
            organizacion='Pereira, Colombia'
          />
        </Box>
        <span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              columnGap: '10px',
              rowGap: '12px',
              marginTop: '23px'
            }}
          >
            <Chip
              size='small'
              clickable={true}
              label='GitHub'
              component='a'
              referrerPolicy='origin'
              rel='external'
              target='_blank'
              href='https://github.com/afar-cmyk'
              icon={<GitHub />}
              sx={{ ...estilosChip }}
            />
            <Chip
              size='small'
              clickable={true}
              label='Instagram'
              component='a'
              referrerPolicy='origin'
              rel='external'
              target='_blank'
              href='https://www.instagram.com/afarvf'
              icon={<Instagram />}
              sx={{ ...estilosChip }}
            />
            <Chip
              size='small'
              clickable={true}
              label='Twitter'
              component='a'
              referrerPolicy='origin'
              rel='external'
              target='_blank'
              href='https://twitter.com/Afar_CMYK'
              icon={<Twitter />}
              sx={{ ...estilosChip }}
            />
            <Chip
              size='small'
              clickable={true}
              label='YouTube'
              component='a'
              referrerPolicy='origin'
              rel='external'
              target='_blank'
              href='https://www.youtube.com/channel/UC9iF8etFCL3Jugfm1VlTiQw/videos'
              icon={<YouTube />}
              sx={{ ...estilosChip }}
            />
          </div>
        </span>
      </Box>
    </>
  )
}

const TarjetaEstudios = (props) => {
  let contenedorTarjeta = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px #11c3db26',
    borderRadius: '8px',
    p: '12px',
    marginRight: 0,
    // maxWidth: { xs: '290px', sm: '325px', md: '374px' },
    '&:hover': { border: 'solid 1px #11c3db96' },
    '& h3': {
      width: 'fit-content',
      fontWeight: 700,
      lineHeight: 'calc(0.9ex / 0.32)',
      fontSize: { xs: '1em', sm: '1.05em', xl: '1.13em' },
      color: '#f2f2f2',
      m: 0
    },
    '& p': {
      width: 'fit-content',
      m: 0,
      fontSize: { xs: '16px', lg: '1.1em', xl: '1.1em' }
    }
  }

  const { titulo, organizacion, fecha } = props
  return (
    <>
      <Box component='div' sx={{ ...contenedorTarjeta }}>
        <h3>{titulo}</h3>
        <p>{organizacion}</p>
        <p>{fecha}</p>
      </Box>
    </>
  )
}

let estilosChip = {
  px: '6px',
  fontSize: '13px',
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  color: '#cccccc',
  '& .MuiChip-icon': {
    fontSize: '1.5em'
  },
  '&:hover .MuiChip-icon': {
    color: '#f2f2f2'
  },
  '&:hover': {
    backgroundColor: '#388994',
    color: '#f2f2f2'
  }
}

export default Contacto
