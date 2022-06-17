import React from 'react'
import { Box } from '@mui/material'
import TarjetaPortafolio from './Tarjetas/TarjetaPortafolio'
import ModalPortafolio from './ModalPortafolio'
import ColoresContext from '../ColoresContext'

const ContenedorPortafolio = (props) => {
  const valoresPortafolio = props.valores

  const { manejadorAbrirModal, manejadorCerrarModal } =
    React.useContext(ColoresContext)

  const [esquemaModal, setEsquemaModal] = React.useState({
    id: '',
    titulo: '',
    imagen: '',
    categorias: '',
    enlaces: '',
    contenido: ''
  })

  console.log(esquemaModal)

  // let esquemaModal = {
  //   id: '',
  //   titulo: '',
  //   imagen: '',
  //   categorias: '',
  //   enlaces: '',
  //   contenido: ''
  // }

  let contenedor = {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(316px, 1fr))'
    },
    gridGap: '20px',
    boxSizing: 'border-box'
  }

  const almacenarDatosTarjeta = (
    id,
    titulo,
    imagen,
    categorias,
    enlaces,
    contenido
  ) => {
    setEsquemaModal({
      id: id,
      titulo: titulo,
      imagen: imagen,
      categorias: categorias,
      enlaces: enlaces,
      contenido: contenido
    })
    manejadorAbrirModal()
  }

  const limpiarDatos = () => {
    setEsquemaModal(esquemaModal)
    manejadorCerrarModal()
  }

  return (
    <Box component='div' sx={{ ...contenedor }}>
      {valoresPortafolio.map((datos) => {
        const { id, titulo, imagen, categorias, enlaces, contenido } = datos
        return (
          <React.Fragment key={`tarjeta-${id}`}>
            <TarjetaPortafolio
              id={id}
              titulo={titulo}
              imagen={imagen}
              categorias={categorias}
              enlaces={enlaces}
              onClick={() =>
                almacenarDatosTarjeta(
                  id,
                  titulo,
                  imagen,
                  categorias,
                  enlaces,
                  contenido
                )
              }
            />
          </React.Fragment>
        )
      })}
      <ModalPortafolio
        id={`modal-${esquemaModal.id}`}
        titulo={esquemaModal.titulo}
        categorias={esquemaModal.categorias}
        enlaces={esquemaModal.enlaces}
        contenido={esquemaModal.contenido}
        onClose={limpiarDatos}
      />
    </Box>
  )
}

export default ContenedorPortafolio
