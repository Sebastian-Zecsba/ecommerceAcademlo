import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/Purchases/ProductPurchases";
import "../components/Purchases/productPurchases.css";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  const token = localStorage.getItem('token')

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  console.log(purchases);

  return (
    <div className="purchases__title">
      {token ? (
        <>
          <h2>My Purchases</h2>
          <div>
            {purchases?.map((prodPurchases) => (
              <ProductPurchases
                key={prodPurchases.id}
                prodPurchases={prodPurchases}
              />
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1 className="cart__title">To see what you have buyed. You must be logged in</h1>
        </div>
      )}
      
    </div>
  );
};

export default Purchases;
