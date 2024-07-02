import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CartProduct from "../Home/CartProduct";
import "./style/similarproducts.css";

const SimilarProduct = ({ product }) => {
  const url = `${import.meta.env.VITE_API_URL}products?categoryId=${product?.categoryId}`;

  const [filterProducts, getProductByCategory] = useFetch(url);

  useEffect(() => {
    if (product) {
      getProductByCategory();
    }
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [product]);

  return (
    <section className="similarProduct__container">
      <h2 className="similarProduct__title">Discover similar Products</h2>
      <div className="similarProduct__products">
        {filterProducts?.map((prod) => {
          if (prod.id !== product.id) {
            return <CartProduct key={prod.id} product={prod} />;
          }
        })}
      </div>
    </section>
  );
};

export default SimilarProduct;
