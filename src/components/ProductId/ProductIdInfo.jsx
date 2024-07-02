import { useEffect, useState } from "react";
import useCrudCart from "../../hooks/useCrudCart";
import './style/productIdInfo.css'
import Swal from "sweetalert2";

const ProductIdInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCrudCart();

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => setQuantity(quantity + 1);

  const token = localStorage.getItem('token')

  const handleToCart = () => {
    if(!token){
      Swal.fire({
        title: "You must be logged in to add products to cart",
        timer: 2000,
        timerProgressBar: true,
      })
      return
    }else{
      const data = {
        quantity: quantity,
        productId: product.id,
      };
      addProductToCart(data);
    }

    
  };

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section className="productId__container">
      <div className="productId__content">
        <h3 className="productId__brand">{product?.brand}</h3>
        <h2 className="productId__title">{product?.title}</h2>
        <p className="productId__description">{product?.description}</p>
      </div>
      <footer className="productId__footer">
        <div className="productId__footer-price">
          <div className="productId__footer-container">
            <span className="productId__price">Price</span>
            <span className="productId__value">{product?.price}</span>
          </div>
          <div className="productId__quantity">
            <span className="productId__quantity-title"  >Quantity</span>
            <div className="productId__quantity-btn">
              <button className="productId__btn" onClick={handleMinus}>
                <i className="productId__icon bx bxs-minus-circle"></i>
              </button>
              <div>{quantity}</div>
              <button className="productId__btn" onClick={handlePlus}>
                <i className="productId__icon bx bxs-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="productId__btn-add" onClick={handleToCart}>
            {" "}
            Add to cart <i className="bx bx-cart-alt"></i>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
