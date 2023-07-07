import { Link } from "react-router-dom"
import "./styles.css"

function NotFound(){
    return(
        <div className="notFoundPage">
            <h2>Página no disponible</h2>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default NotFound