import React from 'react'
import ColoresContext from '../../ColoresContext'

const EtiquetasModal = (props) => {
  const { tipo, valores } = props

  const { temaActual, esquemaTema, idiomaActual } =
    React.useContext(ColoresContext)

  const {
    etiquetasTitulo,
    etiquetasContenidoFondo,
    etiquetasTituloFondo,
    tarjetasCategoriasTexto
  } = esquemaTema[temaActual]

  let ponerTipo = {
    español: {
      etiquetas: 'Etiquetas',
      fecha: 'Fecha',
      estado: 'Estado'
    },
    ingles: {
      etiquetas: 'Tags',
      fecha: 'Date',
      estado: 'Status'
    }
  }

  let contenedorEtiquetas = {
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
    border: `solid 1px transparent`,
    fontSize: '0.8em',
    backgroundColor: etiquetasTituloFondo,
    color: etiquetasTitulo
  }

  let valoresEtiquetas = {
    borderRadius: '0.3em',
    width: 'fit-content',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    border: `solid 1px transparent`,
    fontFamily: 'Anaheim',
    fontSize: '0.73rem',
    backgroundColor: etiquetasContenidoFondo,
    color: tarjetasCategoriasTexto,
    marginLeft: '0.5em'
  }

  let identificarValores = valores instanceof Array

  return (
    <div style={{ ...contenedorEtiquetas }}>
      <span style={{ height: '0.8rem' }}>{ponerTipo[idiomaActual][tipo]}:</span>
      {identificarValores ? (
        valores.map((datos, indice) => {
          return (
            <div key={`categoria-${indice}`} style={{ ...valoresEtiquetas }}>
              {datos}
            </div>
          )
        })
      ) : (
        <div style={{ ...valoresEtiquetas }}>{valores}</div>
      )}
    </div>
  )
}

export default EtiquetasModal
