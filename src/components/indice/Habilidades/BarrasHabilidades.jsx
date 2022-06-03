import React from 'react'
import { LinearProgress } from '@mui/material'
import ColoresContext from '../ColoresContext'

const BarrasHabilidades = (props) => {
  const { esquemaTema, temaActual } = React.useContext(ColoresContext)

  const { barrasPrincipal, barrasPrincipalHover, barrasSecundario } =
    esquemaTema[temaActual]

  const { titulo, cantidad } = props

  let barraProgreso = {
    height: 10,
    borderRadius: 5,
    backgroundColor: barrasSecundario,
    '& span': { borderRadius: 5, backgroundColor: barrasPrincipal },
    '&:hover span': {
      backgroundColor: barrasPrincipalHover
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
