import * as React from 'react'
import { ColoresProvider } from '../components/indice/ColoresContext'
import Pagina404 from '../components/Pagina404'
import '../styles/global.css'

const NotFoundPage = () => {
  return (
    <ColoresProvider>
      <Pagina404 />
    </ColoresProvider>
  )
}

export default NotFoundPage
