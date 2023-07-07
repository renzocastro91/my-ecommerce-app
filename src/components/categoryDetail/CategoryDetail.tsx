import { API_URL } from "../../const/const";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import CardProduct from "../cardProduct/CardProduct";

function CategoryDetail() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(`${API_URL}/categories/${id}`);
  const { data: productsData } = useGetData(`${API_URL}/products`);

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

  interface Products {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: {
      id: number;
      name: string;
      image: string;
      updateAt?: string;
      creationAt?: string;
    };
    updateAt?: string;
    creationAt?: string;
  }

  const categoryProducts: Products[] = productsData.filter(
    (product: Products) => product.category.id === parseInt(id!)
  );

  return (
    <div className="container">
      <div className="cardDetail">
        {data && (
          <>
            <br />
            <h1 className="h1-detail">{data.name}</h1>
            <img src={data.image} className="img-detail" alt="product" />
            <p>
              <b>Productos:</b>
            </p>
            <div className="container-producto-category">
              {categoryProducts ? (
                categoryProducts.map((product: Products) => (
                  <CardProduct
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    images={product.images}
                    price={product.price}
                    category={product.category}
                  />
                ))
              ) : (
                <h1>Cargando...</h1>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CategoryDetail;
