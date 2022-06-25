import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import ColoresContext from '../ColoresContext'
import EnlacesModal from './Modal/EnlacesModal'
import EtiquetasModal from './Modal/EtiquetasModal'
import EncabezadoModal from './Modal/EncabezadoModal'

const ModalPortafolio = (props) => {
  const { id, fecha, estado, titulo, categorias, enlaces, descripcion } =
    props.valores

  const {
    abrirModal,
    manejadorCerrarModal,
    esquemaTema,
    temaActual,
    idiomaActual
  } = React.useContext(ColoresContext)

  const { fondoModal, separadoresModal, tituloModal, parrafoModal } =
    esquemaTema[temaActual]

  let contenedorModal = {
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
  }

  let tituloContenido = {
    fontSize: 'calc(1.6em + 1vw)',
    marginTop: 0,
    marginBottom: '0.1em',
    textAlign: 'center',
    color: tituloModal
  }

  let contenedorEtiquetas = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5em'
  }

  let contenedorBotones = {
    m: 0,
    py: '10px',
    px: '24px'
  }

  let textoEncabezado = {
    español: 'Ficha Técnica',
    ingles: 'Data Sheet'
  }

  return (
    <Dialog
      onClose={props.onClose}
      aria-label={`Ficha técnica de ${titulo}`}
      open={abrirModal}
      sx={{ ...contenedorModal }}
    >
      <EncabezadoModal id={id} onClose={manejadorCerrarModal}>
        {textoEncabezado[idiomaActual]}
      </EncabezadoModal>
      <DialogContent
        dividers
        sx={{
          display: 'flex'
        }}
      >
        <div style={{ color: parrafoModal }}>
          <h3 style={{ ...tituloContenido }}>{titulo}</h3>
          <div style={{ ...contenedorEtiquetas }}>
            <EtiquetasModal tipo='estado' valores={estado} />
            <EtiquetasModal tipo='fecha' valores={fecha} />
          </div>
          {descripcion}
          <EtiquetasModal tipo='etiquetas' valores={categorias} />
        </div>
      </DialogContent>
      <DialogActions sx={{ ...contenedorBotones }}>
        <EnlacesModal titulo={titulo} enlaces={enlaces} />
      </DialogActions>
    </Dialog>
  )
}

export default ModalPortafolio
