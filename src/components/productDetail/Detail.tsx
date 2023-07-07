import { API_URL } from "../../const/const";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import "./styles.css"

function Detail() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(`${API_URL}/products/${id}`);

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

  return (
    <div className="container">
        <div className="cardDetail">
      {data && (
        <>
          <br />
          <h1 className="h1-detail">{data.title}</h1>
          <img src={data.images[0]} className="img-detail" alt="product" />
          <p><b>Descripción</b></p>
          <p>{data.description}</p>
          <p className="p-d">
            <b>Precio:</b> ${data.price}
          </p>
          <p className="p-d">
            <b>Categoría:</b> {data.category.name}
          </p>
        </>
      )}
    </div>
  </div>
    
  );
}

export default Detail;
