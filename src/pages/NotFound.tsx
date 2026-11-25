import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="pagina">
      <h2>404 - Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}

export default NotFound