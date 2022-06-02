const listaHabilidades = [
  {
    titulo: 'JavaScript',
    contenido: 65
  },
  {
    titulo: 'ReactJS',
    contenido: 65
  },
  {
    titulo: 'Python',
    contenido: 50
  },
  {
    titulo: 'Java',
    contenido: 40
  },
  {
    titulo: 'MYSQL',
    contenido: 40
  },
  {
    titulo: 'GraphQL',
    contenido: 40
  },
  {
    titulo: 'Figma',
    contenido: 80
  },
  {
    titulo: 'Adobe Premiere Pro',
    contenido: 85
  },
  {
    titulo: 'Adobe Media Enconder',
    contenido: 75
  },
  {
    titulo: 'Adobe Photoshop',
    contenido: 70
  },
  {
    titulo: 'Adobe Illustrator',
    contenido: 65
  },
  {
    titulo: 'Adobe After Effects',
    contenido: 50
  }
]

let esquemaTextos = {
  español: {
    encabezado: 'Habilidades Tecnicas',
    valores: [...listaHabilidades]
  },
  ingles: {
    encabezado: 'Technical Skills',
    valores: [...listaHabilidades]
  }
}

export default esquemaTextos
