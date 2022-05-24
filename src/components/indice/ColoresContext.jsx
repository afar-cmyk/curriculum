import React from 'react'

const ColoresContext = React.createContext()

export const ColoresProvider = ({ children }) => {
  // Color principal
  let colorPrincipal = '#4aabc980'

  // Color principal de las barras
  let barrasColorPrincipal = '#4abac9b3'

  // Color secundario de las barras
  let barrasColorSecundario = '#50c5d540'
  return (
    <ColoresContext.Provider
      value={{
        colorPrincipal,
        barrasColorPrincipal,
        barrasColorSecundario
      }}
    >
      {children}
    </ColoresContext.Provider>
  )
}

export default ColoresContext
