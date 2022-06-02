import React from 'react'
import Indice from '../components/Indice'
import { ColoresProvider } from '../components/indice/ColoresContext'

export default function index() {
  return (
    <ColoresProvider>
      <Indice />
    </ColoresProvider>
  )
}
