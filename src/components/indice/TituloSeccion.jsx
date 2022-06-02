import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from './ColoresContext'

const TituloSeccion = (props) => {
  const { esquemaTema, temaActual } = React.useContext(ColoresContext)

  const { underline, titulos } = esquemaTema[temaActual]

  const textoTitulo = props.titulo

  let titulosH2Base = {
    color: titulos,
    textDecoration: `underline ${underline}`,
    textUnderlineOffset: '2px',
    fontSize: { xs: '25px', sm: '30px', lg: '2em' },
    mt: 0,
    mb: { xs: '10px', lg: '15px' }
  }
  return (
    <Box component='h2' sx={{ ...titulosH2Base }}>
      {textoTitulo}
    </Box>
  )
}

export default TituloSeccion
