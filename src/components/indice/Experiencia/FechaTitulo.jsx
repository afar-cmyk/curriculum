import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'

const FechaTitulo = (props) => {
  const { fecha, empresa } = props

  const { esquemaTema, temaActual } = React.useContext(ColoresContext)

  const { fechas, tarjetaTitulo } = esquemaTema[temaActual]

  let envolturaTitulo = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '12px',
    marginBottom: 0,
    '& h3': {
      lineHeight: '39px',
      height: '33px',
      fontWeight: 700,
      fontSize: { xs: '1.08em', lg: '1.23em' },
      color: tarjetaTitulo,
      m: 0
    },
    '& div': {
      fontFamily: 'Anaheim',
      textAlign: 'center',
      width: 'fit-content',
      px: '14px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: 700,
      backgroundColor: fechas,
      m: '0px',
      color: tarjetaTitulo
    }
  }

  return (
    <>
      <Box component='span' sx={{ ...envolturaTitulo }}>
        <div className='experiencia-fecha'>{fecha}</div>
        <h3>{empresa}</h3>
      </Box>
    </>
  )
}

export default FechaTitulo
