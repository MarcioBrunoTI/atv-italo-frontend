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
    titulo: 'assassinis creed III',
    imagem: '/imagens/assassinis creed III.jpg',
    descricao: 'Assuma o papel de um assassino na época da Revolução Americana.',
    categoria: 'Ação e Aventura',
    preco: 250.0,
  },
  {
    id: 2,
    titulo: "Resident Evil Requiem",
    imagem: '/imagens/resident-evil-requiem-capcom.jpg',
    descricao: 'O melhor jogo de survival horror da série.',
    categoria: 'Terror e Suspense',
    preco: 800.0,
  },
  {
    id: 3,
    titulo: 'GTA V',
    imagem: '/imagens/gta v.jpeg',
    descricao: 'Explore a cidade de Los Santos e viva a vida de um criminoso em mundo aberto.',
    categoria: 'Ação e Aventura',
    preco: 199.9,
  },
  {
    id: 4,
    titulo: 'God Of War Ragnarok',
    imagem: '/imagens/god-of-war-ragnarok-sales-1.jpg',
    descricao: 'Acompanhe Kratos e Atreus em uma jornada épica pelos nove reinos da mitologia nórdica.',
    categoria: 'Ação e Aventura',
    preco: 499.9,
  },
  {
    id: 5,
    titulo: 'Phantom Blade Zero',
    imagem: '/imagens/phantom-blade-zero-trailer-donnie-yen-fortnite.jpg',
    descricao: 'Um jogo de ação e aventura com combate intenso e gráficos impressionantes.',
    categoria: 'Ação e Aventura',
    preco: 999.9,
  },
  {
    id: 6,
    titulo: 'gta VI',
    imagem: '/imagens/gta6-prevendas.webp',
    descricao: 'O aguardado próximo capítulo da série Grand Theft Auto, prometendo uma experiência ainda mais imersiva e expansiva. Explore uma cidade vibrante e cheia de vida, com missões emocionantes, personagens memoráveis e um mundo aberto repleto de atividades.',
    categoria: 'Ação e Aventura',
    preco: 550.0,
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