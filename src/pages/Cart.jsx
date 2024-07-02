import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import ProductInCart from "../components/Cart/ProductInCart";
import usePurchases from "../hooks/usePurchases";
import './styles/cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const { buyThisCart } = usePurchases();

  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  }, []);
  
  const token = localStorage.getItem('token')

  const { cartGlobal } = useSelector((state) => state);
  
  const totalPriceCart = cartGlobal?.reduce(
    (acc, cv) => cv.quantity * cv.product.price,
    0
  );

  const handlePurchases = () => {
    buyThisCart();
  };

  return (
    <>
      {token ? (
        <div className="cart">
          <h2 className="cart__title">My Cart</h2>
          <div className="cart__container">
            {cartGlobal?.map((prodCart) => (
              <ProductInCart key={prodCart.id} prodCart={prodCart} />
            ))}
          </div>
          <footer className="cart__footer" >
            <span className="cart__total-label">Total:</span>
            <h3 className="cart__total-value">$ {totalPriceCart}</h3>
            <button className="cart__btn" onClick={handlePurchases}>Buy now</button>
          </footer>
        </div>
      ) : (
        <div className="cart">
          <h1 className="cart__title">To see what you have added. You must be logged in</h1>
        </div>
      )}
    </>
    
  );
};

export default Cart;
