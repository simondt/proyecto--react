import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand text-light">TiendaOnline</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active text-light" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/productos' className="nav-link text-light">Productos</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget></CartWidget>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;