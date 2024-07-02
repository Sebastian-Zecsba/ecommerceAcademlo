import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductIdInfo from "../components/ProductId/ProductIdInfo";
import SliderImgs from "../components/ProductId/SliderImgs";
import SimilarProduct from "../components/ProductId/SimilarProduct";
import "./styles/homeProducts.css"

const ProductId = () => {
  
  const { id } = useParams();

  const url = `${import.meta.env.VITE_API_URL}products/${id}`;
  const [product, getProductById] = useFetch(url);

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <div>
      <div className="product-slider-info" >
        <SliderImgs product={product} />
        <ProductIdInfo product={product} />
      </div>
        <SimilarProduct product={product} />
    </div>
  );
};

export default ProductId;