import React from 'react'

const MiniaturaTarjeta = (props) => {
  const { imagen } = props
  let miniaturaTarjeta = {
    width: '100%',
    minHeight: '60%',
    backgroundImage: `url(${imagen})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#6a6a6a',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }
  return <div className='imagen' style={{ ...miniaturaTarjeta }} />
}

export default MiniaturaTarjeta
