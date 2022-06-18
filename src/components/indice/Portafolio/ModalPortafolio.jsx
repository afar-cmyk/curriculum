import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ColoresContext from '../ColoresContext'
import CategoriasTarjeta from './Tarjetas/CategoriasTarjeta'

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

  const { abrirModal, manejadorCerrarModal, esquemaTema, temaActual } =
    React.useContext(ColoresContext)

  const { titulos } = esquemaTema[temaActual]

  const TitulosH2 = ({ titulo, colorTitulo }) => {
    let titulos = {
      color: colorTitulo,
      // fontSize: '1.25rem',
      fontFamily: 'Source Sans Pro',
      margin: 0
      // fontWeight: 700
    }
    return <h2 style={{ ...titulos }}>{titulo}</h2>
  }

  const Fechas = ({ fecha }) => {
    return (
      <>
        fecha:
        <div
          style={{
            borderRadius: '0.3em',
            width: 'fit-content',
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            // border: `solid 1px ${bordes}`,
            fontSize: '0.8em',
            backgroundColor: 'red'
            // color: tarjetasCategoriasTexto,
            // backgroundColor: fondo
          }}
        >
          {fecha}
        </div>
      </>
    )
  }

  return (
    <>
      <Dialog
        onClose={props.onClose}
        aria-labelledby={`titulo-modal-${id}`}
        open={abrirModal}
      >
        <ModalTitulo
          id={`titulo-modal-${id}`}
          categorias={categorias}
          onClose={manejadorCerrarModal}
        >
          <TitulosH2 titulo={titulo} colorTitulo={titulos} />
        </ModalTitulo>
        <DialogContent dividers sx={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            {imagen}- {estado} <Fechas fecha={fecha} />
          </div>
          <div style={{ width: '50%' }}>
            {descripcion}
            <CategoriasTarjeta categorias={categorias} />
          </div>
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
