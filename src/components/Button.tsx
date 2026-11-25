interface ButtonProps {
  texto: string
  tipo?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

function Button({ texto, tipo = 'button', onClick }: ButtonProps) {
  return (
    <button className="btn" type={tipo} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Button