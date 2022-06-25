import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ColoresContext from '../ColoresContext'
import EnlacesModal from './Modal/EnlacesModal'
import EtiquetasModal from './Modal/EtiquetasModal'

const ModalPortafolio = (props) => {
  const { id, fecha, estado, titulo, categorias, enlaces, descripcion } =
    props.valores

  const { abrirModal, manejadorCerrarModal, esquemaTema, temaActual } =
    React.useContext(ColoresContext)

  const {
    botones,
    botonesHover,
    titulos,
    fondoModal,
    separadoresModal,
    tituloModal,
    parrafoModal
  } = esquemaTema[temaActual]

  const TitulosH2 = ({ titulo, colorTitulo }) => {
    let titulos = {
      color: colorTitulo,
      fontSize: '1.4rem',
      fontFamily: 'Source Sans Pro',
      margin: 0,
      fontWeight: 300
    }
    return <h2 style={{ ...titulos }}>{titulo}</h2>
  }

  const ModalTitulo = (props) => {
    const { children, onClose } = props

    return (
      <DialogTitle sx={{ m: 0, py: '10px', px: '24px' }}>
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

  return (
    <>
      <Dialog
        onClose={props.onClose}
        aria-labelledby={`titulo-modal-${id}`}
        open={abrirModal}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: fondoModal,
            border: '1px solid #ffffff0d',
            boxShadow:
              '0px 11px 15px -7px hsl(188deg 60% 15% / 16%), 0px 24px 38px 3px hsl(188deg 60% 15% / 14%), 0px 9px 46px 8px hsl(188deg 60% 15% / 12%)'
          },
          '& 	.MuiDialogContent-root': {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: separadoresModal
          }
        }}
      >
        <ModalTitulo
          id={`titulo-modal-${id}`}
          categorias={categorias}
          onClose={manejadorCerrarModal}
        >
          <TitulosH2 titulo={'Ficha Tecnica'} colorTitulo={titulos} />
        </ModalTitulo>
        <DialogContent
          dividers
          sx={{
            display: 'flex'
          }}
        >
          <div style={{ color: parrafoModal }}>
            <h2
              style={{
                fontSize: 'calc(1.6em + 1vw)',
                marginTop: 0,
                marginBottom: '0.1em',
                textAlign: 'center',
                color: tituloModal
              }}
            >
              {titulo}
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5em'
              }}
            >
              <EtiquetasModal tipo='estado' valores={estado} />
              <EtiquetasModal tipo='fecha' valores={fecha} />
            </div>
            {descripcion}
            <EtiquetasModal tipo='etiquetas' valores={categorias} />
          </div>
        </DialogContent>
        <DialogActions sx={{ m: 0, py: '10px', px: '24px' }}>
          <EnlacesModal titulo={titulo} enlaces={enlaces} />
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalPortafolio
