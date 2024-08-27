import useCrudCart from "../../hooks/useCrudCart";
import "./productInCart.css";

const ProductInCart = ({ prodCart }) => {
  const { deleteProductFromCart } = useCrudCart();

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id);
  };
  console.log(prodCart)
  return (
    <article className="prodcart">
      <img
        className="prodcart__img"
        src={prodCart.product.productImgs[0].url}
        alt=""
      />
      <h3 className="prodcart__title">{prodCart.product.title}</h3>
      <footer className="prodcart__footer">
        <span className="prodcart__quantity">{prodCart.quantity}</span>
        <div className="prodcart__subtotal">
          <span className="prodcart__subtotal-label"> Subtotal</span>
          <span className="prodcart__subtotal-value">
            {prodCart.product.price * prodCart.quantity}
          </span>
        </div>
      </footer>
      <div>
        <button className="prodcart__delete" onClick={handleDeleteCart}>
          <i className="prodcart__delete-icon bx bxs-trash"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductInCart;
