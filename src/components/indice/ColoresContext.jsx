import React from 'react'

const ColoresContext = React.createContext()

export const ColoresProvider = ({ children }) => {
  // Color principal
  let colorPrincipal = '#4aabc980'

  // Color principal de las barras
  let barrasColorPrincipal = '#4abac9b3'

  // Color secundario de las barras
  let barrasColorSecundario = '#50c5d540'

  // Variable global para el idioma (Español e Ingles)
  const [estadoIdioma, setEstadoIdioma] = React.useState(true)
  const [idiomaActual, setIdiomaActual] = React.useState('español')

  const manejadorEstadoIdioma = () => {
    return setEstadoIdioma(!estadoIdioma)
  }

  const ponerEspañol = () => {
    return setIdiomaActual('español')
  }

  const ponerIngles = () => {
    return setIdiomaActual('ingles')
  }

  React.useEffect(() => {
    estadoIdioma ? ponerEspañol() : ponerIngles()
  }, [estadoIdioma])

  return (
    <ColoresContext.Provider
      value={{
        colorPrincipal,
        barrasColorPrincipal,
        barrasColorSecundario,
        manejadorEstadoIdioma,
        idiomaActual,
        estadoIdioma
      }}
    >
      {children}
    </ColoresContext.Provider>
  )
}

export default ColoresContext
