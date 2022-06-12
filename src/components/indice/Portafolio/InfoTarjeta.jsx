import React from 'react'
import ColoresContext from '../ColoresContext'
import CategoriasTarjeta from './CategoriasTarjeta'

const InfoTarjeta = (props) => {
  const { titulo, listaCategorias } = props
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { tarjetas } = esquemaTema[temaActual]

  let tarjetaInfo = {
    width: '100%',
    minHeight: '40%',
    backgroundColor: tarjetas,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  return (
    <div className='info' style={{ ...tarjetaInfo }}>
      <h3>{titulo}</h3>
      <CategoriasTarjeta categorias={listaCategorias} />
    </div>
  )
}

export default InfoTarjeta
