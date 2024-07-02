import { useSelector } from "react-redux";
import CartProduct from "../components/Home/CartProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import "./styles/homeProducts.css";

const Home = () => {
  const [imputValue, setimputValue] = useState("");
  const [showFilter, setshowfilter] = useState(false);

  const { productsGlobal } = useSelector((state) => state);

  console.log(productsGlobal)

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const input = useRef();

  const handleChangeInput = () => {
    setimputValue(input.current.value.toLowerCase().trim());
  };

  const productFilter = productsGlobal
    ?.filter((prod) => prod.title.toLowerCase().includes(imputValue))
    .filter((prod) => {
      const from = +fromTo.from;
      const to = +fromTo.to;
      const price = +prod.price;
      if (from && to) {
        return from <= price && price <= to;
      }
      if (from && !to) {
        return from <= price;
      }
      if (!from && to) {
        return price <= to;
      }
      if (!from && !to) {
        return true;
      }
    });

  const toggleMenu = () => {
    setshowfilter(!showFilter);
  };

  return (
    <div className="home">
      <div
        className={`home-category-price ${
          showFilter && ("home-category-price__open" || "")
        }`}
      >
        <i
          className="bx bx-x filter-close-icon"
          onClick={() => toggleMenu()}
        ></i>
        <FilterCategory setFromTo={setFromTo} />
        <FilterPrice setFromTo={setFromTo} />
      </div>

      <div className="home_container">
        <div className="home_subcontainer">
          <div className="home_input-container">
            <input
              className="home_input"
              ref={input}
              onChange={handleChangeInput}
              placeholder="What are you looking for?"
              type="text"
            />
            <button className="home_btn">
              <i className="bx bx-search btn__search-p"></i>
            </button>
          </div>
          <i
            className="home__mobile_filter bx bx-filter-alt"
            onClick={() => toggleMenu()}
          >
            <span className="home__mobile_filter">Filter</span>
          </i>
        </div>
        <div className="home_product">
          {productFilter?.map((prod) => (
            <CartProduct key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
