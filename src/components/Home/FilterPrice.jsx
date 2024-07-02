import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/filterPrice.css";

const FilterPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();
  const [filterShow, setFilterShow] = useState(true);

  const submit = (data) => {
    console.log(data);
    setFromTo(data);
    reset({
      from: "",
      to: "",
    });
  };

  const changeFilterShow = () => {
    setFilterShow(!filterShow);
  };

  return (
    <article className="price__container">
      <div className="price">
        <div onClick={changeFilterShow} className="price__filter">
          <h3 className="price_title">Price</h3>
          <i
            className={`btn-category-down bx ${
              filterShow ? "bx-chevron-down" : "bx-chevron-up"
            }`}
          ></i>
        </div>
        <hr className="price_line" />
      </div>
      <article className="price_container-first">
        {filterShow && (
          <form className="price_form" onSubmit={handleSubmit(submit)}>
            <div className="price_item">
              <label className="price_label">From</label>
              <input
                className="price_input"
                {...register("from")}
                type="number"
                id="from"
              />
            </div>
            <div className="price_item">
              <label className="price_label">To</label>
              <input
                className="price_input"
                {...register("to")}
                type="number"
                id="to"
              />
            </div>
            <button type="submit" className="price_btn">
              Filter Price
            </button>
          </form>
        )}
      </article>
    </article>
  );
};

export default FilterPrice;
