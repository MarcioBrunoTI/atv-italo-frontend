import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
  return (
    <section className="pagina">
      <h2>Bem-vindo à Pixel Arena</h2>
      <p>
        Os melhores jogos de ação, RPG, corrida e muito mais,
        todos reunidos em um só lugar. Escolha o seu e bora jogar!
      </p>
      <Link to="/produtos">
        <Button texto="Ver jogos" />
      </Link>
    </section>
  )
}

export default Home