import React from 'react'
import './Registro.css'

function Registro() {
  return (
    <div className='containerRegistro'>
        <div className='registroPage'>
        <h2>Cadastro</h2>
        <label>
            <span> Email: </span>
            <input type="text" name="email" placeholder='Insira seu email' />
        </label>
        <label>
            <span> Usuário: </span>
            <input type="text" name="usuario" placeholder="Crie seu usuário" />
        </label>
        <label>
            <span> Senha: </span>
            <input type="password" name="senha" placeholder="Crie sua senha" />
        </label>
        <label>
            <span className='confirmarSenhaSpan'>
                Confirmar senha:
            </span>
            <input type="password" name="senha" placeholder="Senha" />
        </label>
        <button>Criar perfil</button>
    </div>
    <div className='asideImg'>
    
    </div>
    </div>
    
  )
}

export default Registro