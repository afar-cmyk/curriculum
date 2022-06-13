import React from 'react'
import ColoresContext from '../ColoresContext'

const CategoriasTarjeta = (props) => {
  const { categorias } = props

  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { bordes, tarjetasCategoriasTexto } =
    esquemaTema[temaActual]

  let envolturaCategorias = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.8em'
  }

  let contenedorCategoria = {
    borderRadius: '0.3em',
    width: 'fit-content',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    border: `solid 1px ${bordes}`,
    fontSize: '0.8em',
    color: tarjetasCategoriasTexto
  }

  return (
    <div style={{ ...envolturaCategorias }}>
      {categorias.map((categoria, index) => {
        return (
          <div key={`cat-${index}`} style={{ ...contenedorCategoria }}>
            {categoria}
          </div>
        )
      })}
    </div>
  )
}

export default CategoriasTarjeta
