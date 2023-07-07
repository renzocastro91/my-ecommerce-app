import {Link} from "react-router-dom"


function Nav(){
    return(
        <nav>
            <input type="checkbox" id="toggle"/>
            <div className="logo">
                <Link to="/">
                    <ul>
                        <li><i className="fa-solid fa-bag-shopping"></i></li>
                        <li>E-Commerce APP</li>
                    </ul>
                </Link>
            </div>
                <ul className="navigation">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/product"}>Productos</Link></li>
                    <li><Link to={"/categories"}>Categorias</Link></li>                    
                    <li><Link to={"/cartDetail"}><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
        </nav>
    )
}

export default Nav