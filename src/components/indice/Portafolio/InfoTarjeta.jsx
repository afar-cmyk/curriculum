import React from 'react'
import ColoresContext from '../ColoresContext'
import CategoriasTarjeta from './CategoriasTarjeta'
import EnlacesTarjeta from './EnlacesTarjeta'

const InfoTarjeta = (props) => {
  const { titulo, listaCategorias, listaEnlaces } = props
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { botonesBackground } = esquemaTema[temaActual]

  let contenedorInfo = {
    width: '100%',
    minHeight: '40%',
    backgroundColor: botonesBackground,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

  let informacionBasica = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
    marginLeft: '1rem'
  }

  return (
    <div className='info' style={{ ...contenedorInfo }}>
      <div style={{ ...informacionBasica }}>
        <h3>{titulo}</h3>
        <CategoriasTarjeta categorias={listaCategorias} />
      </div>
      <EnlacesTarjeta enlaces={listaEnlaces} />
    </div>
  )
}

export default InfoTarjeta
