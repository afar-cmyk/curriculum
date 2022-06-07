import React from 'react'
import ColoresContext from './indice/ColoresContext'
import { Link } from 'gatsby'
import LogoSVG from './indice/Encabezado/LogoSVG'

const Pagina404 = () => {
  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { fondo, logo } = esquemaTema[temaActual]

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: fondo,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LogoSVG
        className='logo-404'
        sx={{
          color: logo,
          fontSize: 'calc(110px + 4.5vw)',
          position: 'relative',
          bottom: '0.5vw'
        }}
      />
      <h1>Pagina no encontrada...</h1>
      <br />
      <Link style={{ color: '#cccccc' }} to='/'>
        Volver a la pagina principal.
      </Link>
    </main>
  )
}

export default Pagina404
