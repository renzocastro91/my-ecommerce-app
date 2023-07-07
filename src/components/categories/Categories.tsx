import { useEffect, useState } from "react"
import CardCategorie from "../cardCategorie/CardCategorie"
import { API_URL } from "../../const/const"

interface Categories{
    id: number 
    name: string 
    image: string 
    updateA?: string
    creationA?: string 
}

function Categories(){
    const [categories, setCategories] = useState<Categories[]>([])

    useEffect(() => {
        requestCategories(`${API_URL}/categories`)
    },[])

    async function requestCategories(url: string){
        try{
            const res = await fetch(url)
            const json = await res.json() 
            setCategories(json)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="container">
                {categories ? (
                    categories.map((catgri) =>{
                        return(
                            <CardCategorie id={catgri.id} name={catgri.name} image={catgri.image}/>
                        )
                    })
                ):(
                    <h1>Cargando...</h1>
                )}
        </div>
    )
}

export default Categories