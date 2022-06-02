import React from 'react'
import { LinearProgress } from '@mui/material'
import ColoresContext from '../ColoresContext'

const BarrasHabilidades = (props) => {
  const { barrasColorPrincipal, barrasColorSecundario } =
    React.useContext(ColoresContext)

  const { titulo, cantidad } = props

  let barraProgreso = {
    height: 10,
    borderRadius: 5,
    backgroundColor: barrasColorSecundario,
    '& span': { borderRadius: 5, backgroundColor: barrasColorPrincipal },
    '&:hover span': {
      backgroundColor: '#4abac9e6'
    }
  }
  return (
    <LinearProgress
      aria-label={`habilidad ${titulo}`}
      variant='determinate'
      value={cantidad}
      sx={{ ...barraProgreso }}
    />
  )
}

export default BarrasHabilidades
