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
           <div className="card-container">
                <div>
                    <h2>{categories.name}</h2>
                </div>
                <div className="card"> 
                    <img src={categories.image} alt="categorie"></img>
                </div> 
            </div> 
        </>

    )
}

export default CardCategorie