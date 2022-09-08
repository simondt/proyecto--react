import './CartWidget.css';
import { Link } from 'react-router-dom';

function CartWidget (){
    return(
        <Link to='/cart'><button id='botonCarrito'><i className="bi bi-cart"> (7)</i></button></Link>
    )
}

export default CartWidget