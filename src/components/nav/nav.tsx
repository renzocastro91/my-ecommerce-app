import {Link} from "react-router-dom"
import './styles.css'

function Nav(){
    return(
        <nav>
            <input type="checkbox" id="toggle"/>
            <div className="logo">
                <Link to="/">
                    <ul>
                        <li><img className="img-s" src="/src/assets/e-commerce.png"></img></li>
                        <li><p className="p-icon">E-Commerce</p></li>
                    </ul>
                </Link>
            </div>
                <ul className="list">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/product"}>Productos</Link></li>
                    <li><Link to={"/categories"}>Categorias</Link></li>  
                    <li><Link to={"/login"}>Login</Link></li>                    
                    <li><Link to={"/cartDetail"}><img className="img-s" src="/src/assets/carrito-de-compras.png"></img></Link></li>
                </ul>
        </nav>
    )
}

export default Nav