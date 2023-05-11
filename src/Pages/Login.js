
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='containerLogin'>
          <div className='loginPage'>
      <h2>Login</h2>
        <label>
            <span>Usuário:</span>
            <input type="text" placeholder='Nome de usuário' required />
        </label>
        <label>
            <span>Senha:</span>
            <input type="password" placeholder='Digite sua senha' required />
        </label>
        <button className='submit' type="submit">Entrar</button>
        <p className='cadastroLink'>Não tem uma conta? <Link to='/cadastro' className='cadastroP'>Cadastre-se</Link></p>
    </div>
    <div className='asideImg'>
    
    </div>
    </div>

  )
}

export default Login