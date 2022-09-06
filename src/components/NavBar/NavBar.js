import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <Link to='/' class="navbar-brand text-light">TiendaOnline</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active text-light" aria-current="page">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/category/productos' class="nav-link text-light">Productos</Link>
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