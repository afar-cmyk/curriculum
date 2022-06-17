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
    fecha: '',
    estado: '',
    titulo: '',
    imagen: '',
    categorias: '',
    enlaces: '',
    descripcion: ''
  })

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
    fecha,
    estado,
    titulo,
    imagen,
    categorias,
    enlaces,
    descripcion
  ) => {
    setEsquemaModal({
      id: id,
      fecha: fecha,
      estado: estado,
      titulo: titulo,
      imagen: imagen,
      categorias: categorias,
      enlaces: enlaces,
      descripcion: descripcion
    })
    manejadorAbrirModal()
  }

  return (
    <Box component='div' sx={{ ...contenedor }}>
      {valoresPortafolio.map((datos) => {
        const {
          id,
          fecha,
          estado,
          titulo,
          imagen,
          categorias,
          enlaces,
          descripcion
        } = datos
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
                  fecha,
                  estado,
                  titulo,
                  imagen,
                  categorias,
                  enlaces,
                  descripcion
                )
              }
            />
          </React.Fragment>
        )
      })}
      <ModalPortafolio
        valores={{ ...esquemaModal }}
        onClose={manejadorCerrarModal}
      />
    </Box>
  )
}

export default ContenedorPortafolio
