import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ColoresContext from '../../ColoresContext'

const EncabezadoModal = (props) => {
  const { children, onClose } = props

  const { esquemaTema, temaActual } = React.useContext(ColoresContext)

  const { botones, botonesHover, titulos } = esquemaTema[temaActual]

  return (
    <DialogTitle
      aria-label='ficha técnica'
      sx={{
        m: 0,
        py: '10px',
        px: '24px',
        color: titulos,
        fontSize: '1.4rem',
        fontFamily: 'Source Sans Pro',
        fontWeight: 300
      }}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label='cerrar modal'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: botones,
            '&:hover': {
              backgroundColor: '#00000040',
              color: botonesHover
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default EncabezadoModal
