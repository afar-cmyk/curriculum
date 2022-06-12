import React from 'react'
import ColoresContext from '../ColoresContext'

const InfoTarjeta = (props) => {
  const { titulo, categorias } = props
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { bordes, tarjetas, tarjetasCategorias } = esquemaTema[temaActual]

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

  let contenedorCategoria = {
    borderRadius: '0.3em',
    backgroundColor: tarjetasCategorias,
    width: 'fit-content',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    border: `solid 1px ${bordes}`,
    fontSize: '0.8em'
  }

  let envolturaCategorias = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.8em',
    marginLeft: '1rem'
  }

  return (
    <div className='info' style={{ ...tarjetaInfo }}>
      <h3>{titulo}</h3>
      <div style={{ ...envolturaCategorias }}>
        <div style={{ ...contenedorCategoria }}>Desarrollo</div>
        <div style={{ ...contenedorCategoria }}>Diseño</div>
      </div>
    </div>
  )
}

export default InfoTarjeta
