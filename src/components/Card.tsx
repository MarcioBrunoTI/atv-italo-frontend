interface CardProps {
  titulo: string
  imagem: string
  descricao: string
  categoria: string
  preco: number
}

function Card({ titulo, imagem, descricao, categoria, preco }: CardProps) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span className="categoria">{categoria}</span>
      <strong>R$ {preco.toFixed(2)}</strong>
    </div>
  )
}

export default Card
