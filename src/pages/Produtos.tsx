import Card from '../components/Card'

interface Jogo {
  id: number
  titulo: string
  imagem: string
  descricao: string
  categoria: string
  preco: number
}

const jogos: Jogo[] = [
  {
    id: 1,
    titulo: 'Galaxy Raiders',
    imagem: '/imagens/jogo1.jpg',
    descricao: 'Pilote naves de combate e atravesse campos de asteroides.',
    categoria: 'Ação',
    preco: 64.9,
  },
  {
    id: 2,
    titulo: "Dragon's Keep",
    imagem: '/imagens/jogo2.jpg',
    descricao: 'Defenda o castelo e enfrente o dragão ao pôr do sol.',
    categoria: 'RPG',
    preco: 84.9,
  },
  {
    id: 3,
    titulo: 'Turbo Circuit',
    imagem: '/imagens/jogo3.jpg',
    descricao: 'Corridas de stock car em autódromos de todo o país.',
    categoria: 'Corrida',
    preco: 54.9,
  },
  {
    id: 4,
    titulo: 'Cube Master',
    imagem: '/imagens/jogo4.jpeg',
    descricao: 'Gire, combine as cores e resolva o cubo no menor tempo.',
    categoria: 'Puzzle',
    preco: 24.9,
  },
  {
    id: 5,
    titulo: 'Glory FC',
    imagem: '/imagens/jogo5.jpeg',
    descricao: 'Monte seu clube, dispute títulos e crie rivalidades.',
    categoria: 'Esporte',
    preco: 94.9,
  },
  {
    id: 6,
    titulo: 'Happy Harvest',
    imagem: '/imagens/jogo6.jpg',
    descricao: 'Plante, colha e expanda a fazenda dos seus sonhos.',
    categoria: 'Simulação',
    preco: 34.9,
  },
]

function Produtos() {
  return (
    <section className="pagina">
      <h2>Nossos Jogos</h2>
      <div className="lista-cards">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
            categoria={jogo.categoria}
            preco={jogo.preco}
          />
        ))}
      </div>
    </section>
  )
}

export default Produtos