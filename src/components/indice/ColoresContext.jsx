import React from 'react'
import Seo from '../Seo'

const ColoresContext = React.createContext()

export const ColoresProvider = ({ children }) => {
  // Color principal
  let colorPrincipal = '#4aabc980'

  // Color principal de las barras
  let barrasColorPrincipal = '#4abac9b3'

  // Color secundario de las barras
  let barrasColorSecundario = '#50c5d540'

  // Color para los titulos H2
  let titulosH2Base = {
    '& h2': {
      color: '#cccccc',
      textDecoration: `underline ${colorPrincipal}`,
      textUnderlineOffset: '2px',
      fontSize: { xs: '25px', sm: '30px', lg: '2em' },
      mt: 0,
      mb: { xs: '10px', lg: '15px' }
    }
  }

  // Variable global para el idioma (Español e Ingles)
  const [estadoIdioma, setEstadoIdioma] = React.useState(true)
  const [idiomaActual, setIdiomaActual] = React.useState('español')
  const [seoIdioma, setSeoIdioma] = React.useState('es')

  const manejadorEstadoIdioma = () => {
    return setEstadoIdioma(!estadoIdioma)
  }

  const ponerEspañol = () => {
    setIdiomaActual('español')
    setSeoIdioma('es')
  }

  const ponerIngles = () => {
    setIdiomaActual('ingles')
    setSeoIdioma('en')
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
        estadoIdioma,
        titulosH2Base
      }}
    >
      <Seo
        title='Curriculum Vitae'
        description='Este es mi curriculum vitae en version PWA!'
        lang={seoIdioma}
      />
      {children}
    </ColoresContext.Provider>
  )
}

export default ColoresContext
