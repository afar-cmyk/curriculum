import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ColoresContext from '../ColoresContext'
import CategoriasTarjeta from './Tarjetas/CategoriasTarjeta'
import foto from '../../../images/foto.jpg'

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

  const { abrirModal, manejadorCerrarModal, esquemaTema, temaActual, bordes } =
    React.useContext(ColoresContext)

  const { titulos, fondo, tarjetasCategoriasTexto } = esquemaTema[temaActual]

  const TitulosH2 = ({ titulo, colorTitulo }) => {
    let titulos = {
      color: colorTitulo,
      fontSize: '1.4rem',
      fontFamily: 'Anaheim',
      margin: 0,
      fontWeight: 300
    }
    return <h2 style={{ ...titulos }}>{titulo}</h2>
  }

  const Fechas = ({ fecha }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '0.3em',
          width: 'fit-content',
          height: 'fit-content',
          paddingLeft: '0.5em',
          paddingRight: '0.5em',
          paddingTop: '0.2em',
          paddingBottom: '0.2em',
          border: `solid 1px ${bordes}`,
          fontSize: '0.8em',
          backgroundColor: fondo,
          color: tarjetasCategoriasTexto
        }}
      >
        Fecha:
        <div
          style={{
            borderRadius: '0.3em',
            width: 'fit-content',
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            border: `solid 1px ${bordes}`,
            fontSize: '0.73rem',
            backgroundColor: '#383434',
            color: tarjetasCategoriasTexto,
            marginLeft: '0.5em'
          }}
        >
          {fecha}
        </div>
      </div>
    )
  }

  const EstadoActual = ({ estado }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '0.3em',
          width: 'fit-content',
          height: 'fit-content',
          paddingLeft: '0.5em',
          paddingRight: '0.5em',
          paddingTop: '0.2em',
          paddingBottom: '0.2em',
          border: `solid 1px ${bordes}`,
          fontSize: '0.8em',
          backgroundColor: fondo,
          color: tarjetasCategoriasTexto
        }}
      >
        Estado del proyecto:
        <div
          style={{
            borderRadius: '0.3em',
            width: 'fit-content',
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            border: `solid 1px ${bordes}`,
            fontSize: '0.73rem',
            backgroundColor: '#383434',
            color: tarjetasCategoriasTexto,
            marginLeft: '0.5em'
          }}
        >
          {estado}
        </div>
      </div>
    )
  }

  const Etiquetas = ({ etiquetas }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '0.3em',
          width: 'fit-content',
          height: 'fit-content',
          paddingLeft: '0.5em',
          paddingRight: '0.5em',
          paddingTop: '0.2em',
          paddingBottom: '0.2em',
          border: `solid 1px ${bordes}`,
          fontSize: '0.8em',
          backgroundColor: fondo,
          color: tarjetasCategoriasTexto
        }}
      >
        Etiquetas:
        {etiquetas.map((categoria, indice) => {
          return (
            <div
              key={`categoria-${indice}`}
              style={{
                borderRadius: '0.3em',
                width: 'fit-content',
                paddingLeft: '0.5em',
                paddingRight: '0.5em',
                border: `solid 1px ${bordes}`,
                fontSize: '0.73rem',
                backgroundColor: '#383434',
                color: tarjetasCategoriasTexto,
                marginLeft: '0.5em'
              }}
            >
              {categoria}
            </div>
          )
        })}
      </div>
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
            backgroundColor: '#1a1a1a'
          },
          '& 	.MuiDialogContent-root': {
            borderTop: '1px solid #ffffff1f',
            borderBottom: '1px solid #ffffff1f'
          }
        }}
      >
        <ModalTitulo
          id={`titulo-modal-${id}`}
          categorias={categorias}
          onClose={manejadorCerrarModal}
        >
          <TitulosH2 titulo={'Ficha Tecnica:'} colorTitulo={titulos} />
        </ModalTitulo>
        <DialogContent
          dividers
          sx={{
            display: 'flex'
          }}
        >
          <div style={{ color: '#d9d9d9' }}>
            <h2
              style={{
                fontSize: '2.2em',
                marginTop: 0,
                marginBottom: '0.1em',
                textAlignLast: 'center',
                color: '#f2f2f2'
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
              <EstadoActual estado={estado} /> <Fechas fecha={fecha} />
            </div>

            {descripcion}
            <Etiquetas etiquetas={categorias} />
            {/* <CategoriasTarjeta categorias={categorias} /> */}
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
