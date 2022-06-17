import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ColoresContext from '../ColoresContext'

const ModalPortafolio = (props) => {
  const {
    id,
    fecha,
    estado,
    titulo,
    imagen,
    categorias,
    enlaces,
    descripcion
  } = props.valores

  const { abrirModal, manejadorCerrarModal } = React.useContext(ColoresContext)

  return (
    <>
      <Dialog
        onClose={props.onClose}
        aria-labelledby={`titulo-modal-${id}`}
        open={abrirModal}
      >
        <ModalTitulo id={`titulo-modal-${id}`} onClose={manejadorCerrarModal}>
          {titulo} - {fecha} - {estado} - {categorias}
        </ModalTitulo>
        <DialogContent dividers sx={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>{imagen}</div>
          <div style={{ width: '50%' }}>{descripcion}</div>
        </DialogContent>
        <DialogActions>
          {`Enlaces: ${enlaces ? enlaces[0].url : null} - ${
            enlaces ? enlaces[1].url : null
          }`}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalPortafolio

const ModalTitulo = (props) => {
  const { children, onClose } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='cerrar modal'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'gray'
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
