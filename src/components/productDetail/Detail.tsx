import { API_URL } from "../../const/const"
import { useParams, Link } from "react-router-dom"
import { useGetData } from "../hooks/useGetData"

function Detail(){
    const { id } = useParams();
    const { data, error, loading } = useGetData(
        `${API_URL}/products/${id}`
    );

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (error) {
        return (
        <>
            <h1>Error en la petición!!</h1>
            <p>{error}</p>
        </>
        );
    }
    (
        <div className="cardDetail">
          {data && (
            <>
              <br></br>
              <h1>{data.title}</h1>
              <img src={data.images[0]} className="img-detail" />
              <p>Descripción</p><br></br>
              <p>{data.description}</p>
              <p className="p-d"><b>Precio:</b> {data.price}</p>
              <p className="p-d"><b>Categoría:</b> {data.category.name}</p>
            </>
          )}
        </div>
      );

    


}

export default Detail