import React from 'react'
import { Box } from '@mui/material'

const FechaTitulo = (props) => {
  const { fecha, empresa } = props

  let envolturaTitulo = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '12px',
    marginBottom: { xs: '0.5vw', lg: '5px' },
    '& h3': {
      fontWeight: 700,
      fontSize: { xs: '1.08em', lg: '1.23em' },
      color: '#f2f2f2',
      m: 0
    },
    '& div': {
      textAlign: 'center',
      width: 'fit-content',
      px: '14px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: 700,
      backgroundColor: '#50c5d540',
      m: '0px',
      color: '#f2f2f2'
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
