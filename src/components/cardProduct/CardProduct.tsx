import { Link } from "react-router-dom"
import "./styles.css"

interface Category {
    id: number
    name: string
    image:string
    updateAt?: string 
    creationAt?: string 

  }

interface Products {
    id: number
    title: string
    price: number
    images:string []
    category:Category
    updateAt?: string 
    creationAt?: string 
}

function CardProduct(products: Products){
    return(
        <>
           <div className="card-container">
                    <h3>{products.title}</h3>
                    <img className="img-product" src={products.images[0]} alt="product"></img>
                    <p className="p-product"><b>Precio:</b> ${products.price}</p>
                    <p className="p-product"><b>Categoría:</b> {products.category.name}</p>
                    <Link className="link" to={`/products/${products.id}`}><p className="p-card2">Mas detalles</p></Link>
                <br></br>
            </div> 
        </>

    )
}

export default CardProduct