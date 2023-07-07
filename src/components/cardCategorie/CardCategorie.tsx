import { Link } from "react-router-dom"
import "./styles.css"

interface Categories {
    id: number
    name: string
    image:string
    updateA?: string 
    creationA?: string 
}

function CardCategorie(categories: Categories){
    return(
        <>
           <div className="card-container2">
                    <h3>{categories.name}</h3>
                    <img className="img-c2" src={categories.image} alt="categorie"></img>
                    <br></br>
                    <Link to={`/categories/${categories.id}`}><p className="p-card">Ver Productos</p></Link>
            </div>
                <br></br>
        </>

    )
}

export default CardCategorie