import './Header.css'

import { Link } from 'react-router-dom';

function Header({ saibaMaisDD, empresaDD }) {

    return (
        <div className="divHeader">
            <div className="containerInformacao">
                <img src="/logo.svg" alt="logo" className="logo" />

                <input type="checkbox" id="checkbox" className="checkbox" />
                <label htmlFor="checkbox" className='menuBtn' >
                    Menu</label>
                <nav className='containerLinks' value={1}>
                    <div className="saibaMaisContainer" id='saibaMaisContainer'
                        onClick={() => saibaMaisDD((prev) => !prev)
                        }>
                        <p id='maisP'> Mais</p>
                    </div>
                    <div className="empresaContainer"
                        onClick={() => {
                            empresaDD((prev) => !prev)
                        }}>
                        <p >Empresa</p>
                    </div>
                    <p>Carreiras</p>
                    <p>Sobre</p>

                    <div className="loginSection">
                        <Link to="/login" className='acessoPerfil' >Meu perfil </Link>
                    </div>
                </nav>

            </div >

        </div >
    )
}

export default Header