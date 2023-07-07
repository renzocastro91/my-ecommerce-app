import { useEffect, useState } from "react"
import { API_URL } from "../../const/const"
import "./styles.css"
import CardProduct from "../cardProduct/CardProduct"

interface Category {
    id: number
    name: string
    image:string
    updateAt?: string 
    creationAt?: string 

  }

interface Products{
    id: number
    title: string
    price: number
    images:string[]
    category:Category
    updateAt?: string 
    creationAt?: string 
}

function Products(){
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        requestProducts(`${API_URL}/products`)
    },[])

    async function requestProducts(url: string){
        try{
            const res = await fetch(url)
            const json = await res.json() 
            setProducts(json)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <div className="container">
           <div>
                <h1 className="title-product">Productos</h1>
            </div>
            <br></br>
           <div className="card-container-product">
                {products ? (
                    products.map((prod) =>{
                        return(
                            <CardProduct id={prod.id} title={prod.title} images={prod.images} price={prod.price} category={prod.category}/>
                        )
                    })
                ):(
                    <h1>Cargando...</h1>
                )}
           </div>
                
        </div>
        </div>
    )
}

export default Products