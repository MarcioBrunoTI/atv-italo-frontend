import Button from '../components/Button'

function Contato() {
  return (
    <section className="pagina">
      <h2>Contato</h2>
      <form className="formulario">
        <label>
          Nome
          <input type="text" placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input type="email" placeholder="seu@email.com" />
        </label>
        <label>
          Mensagem
          <textarea rows={5} placeholder="Digite sua mensagem"></textarea>
        </label>
        <Button texto="Enviar" tipo="submit" />
      </form>
    </section>
  )
}

export default Contato
