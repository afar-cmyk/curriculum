import React from 'react'
import Seo from '../Seo'

const ColoresContext = React.createContext()

export const ColoresProvider = ({ children }) => {
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

  // Estado del tema claro
  const [estadoTema, setEstadoTema] = React.useState(true)
  const [temaActual, setTemaActual] = React.useState('oscuro')

  const manejadorEstadoTema = () => {
    return setEstadoTema(!estadoTema)
  }

  const ponerTemaOscuro = () => {
    setTemaActual('oscuro')
  }

  const ponerTemaClaro = () => {
    setTemaActual('claro')
  }

  //  Estado del modal
  const [abrirModal, setAbrirModal] = React.useState(false)

  const manejadorAbrirModal = () => {
    setAbrirModal(true)
  }
  const manejadorCerrarModal = () => {
    setAbrirModal(false)
  }

  React.useEffect(() => {
    estadoIdioma ? ponerEspañol() : ponerIngles()
    estadoTema ? ponerTemaOscuro() : ponerTemaClaro()
  }, [estadoIdioma, estadoTema])

  const esquemaTema = {
    oscuro: {
      fondo: '#0d0d0d',
      nombre: '#e6e6e6',
      nombreHover: '#f2f2f2',
      nombreSub: '#cccccc',
      titulos: '#cccccc',
      titulosHover: '#f2f2f2',
      tarjetaTitulo: '#bfbfbf',
      tarjetaTituloHover: '#d9d9d9',
      tarjetaParrafo: '#bfbfbf',
      tarjetaParrafoHover: '#d4d4d4',
      textos: '#bfbfbf',
      textosBold: '#f2f2f2',
      textosHover: '#d4d4d4',
      bordes: '#11c3db26',
      bordesHover: '#11c3db96',
      underline: '#4aabc980',
      underlineHover: '#11c3db96',
      botones: '#a6a6a6',
      botonesHover: '#f2f2f2',
      botonesBackground: '#ffffff0a',
      barrasPrincipal: '#4abac9b3',
      barrasPrincipalHover: '#4abac9e6',
      barrasSecundario: '#50c5d540',
      fechas: '#50c5d540',
      fechasHover: '#24828fe0',
      logo: '#11c3dbd0',
      tarjetas: '#1a1a1a',
      tarjetasCategorias: '#333333',
      tarjetasCategoriasTexto: '#cccccc'
    },
    claro: {
      fondo: '#f2f2f2',
      nombre: '#222222',
      nombreHover: '#000000',
      nombreSub: '#4d4d4d',
      titulos: '#4d4d4d',
      titulosHover: '#000000',
      tarjetaTitulo: '#4d4d4d',
      tarjetaTituloHover: '#000000',
      tarjetaParrafo: '#4d4d4d',
      tarjetaParrafoHover: '#0d0d0d',
      textos: '#4d4d4d',
      textosBold: '#000000',
      textosHover: '#0d0d0d',
      bordes: '#11c3db4d',
      bordesHover: '#11c3db',
      underline: '#4aabc9cc',
      underlineHover: '#11c3db',
      botones: '#595959',
      botonesHover: '#0d0d0d',
      botonesBackground: '#ffffff66',
      barrasPrincipal: '#11c3db',
      barrasPrincipalHover: '#06cbe5',
      barrasSecundario: '#50c5d540',
      fechas: '#50c5d5a0',
      fechasHover: '#11c3dbcc',
      logo: '#11c3db',
      tarjetas: '#e6e6e6',
      tarjetasCategorias: '#cccccc',
      tarjetasCategoriasTexto: '#333333'
    }
  }

  return (
    <ColoresContext.Provider
      value={{
        manejadorEstadoIdioma,
        idiomaActual,
        estadoIdioma,
        esquemaTema,
        temaActual,
        manejadorEstadoTema,
        abrirModal,
        manejadorAbrirModal,
        manejadorCerrarModal
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
