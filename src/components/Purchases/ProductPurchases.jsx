/* eslint-disable react/prop-types */
import "./productPurchases.css";

const ProductPurchases = ({ prodPurchases }) => {
  console.log(prodPurchases);
  return (
    <article className="prodpurchases__container ">
      <img
        className="prodpurchases__img f-grow"
        src={prodPurchases?.product.productImgs[0].url}
        alt=""
      />
      <h3 className="prodpurchases__prod f-grow">
        {prodPurchases?.product.title}
      </h3>
      <span className="prodpurchases__unid f-grow">
        {prodPurchases?.quantity}
      </span>
      <span className="prodpurchases__price f-grow">
        ${prodPurchases?.quantity * Number(prodPurchases?.product.price)}
      </span>
    </article>
  );
};

export default ProductPurchases;
