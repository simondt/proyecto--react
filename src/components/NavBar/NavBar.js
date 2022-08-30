import CartWidget from '../CartWidget/CartWidget'

function Nav() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">TiendaOnline</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Nuestras sucursales</a>
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