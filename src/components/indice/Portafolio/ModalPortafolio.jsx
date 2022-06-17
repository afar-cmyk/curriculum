import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import ColoresContext from '../ColoresContext'

const ModalPortafolio = (props) => {
  const { id, titulo, onClose } = props
  const { abrirModal, manejadorCerrarModal } = React.useContext(ColoresContext)
  // const [abrir, setAbrir] = React.useState(true)

  // const manejadorAbrir = () => {
  //   setAbrir(true)
  // }
  // const manejadorCerrar = () => {
  //   setAbrir(false)
  // }

  //abrirModal, manejadorAbrirModal, manejadorCerrarModal
  return (
    <>
      <Dialog
        onClose={onClose}
        aria-labelledby={`titulo-modal-${id}`}
        open={abrirModal}
      >
        <ModalTitulo id={`titulo-modal-${id}`} onClose={manejadorCerrarModal}>
          {titulo}
        </ModalTitulo>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={manejadorCerrarModal}>Save changes</Button>
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
