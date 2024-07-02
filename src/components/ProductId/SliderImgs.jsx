import { useState } from "react";
import "./style/sliderImgs.css";

const SliderImgs = ({ product }) => {
  const [numberImg, setNumberImg] = useState(0);

  const objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`,
  };

  const objStyle2 = {
    transform: `translateX(calc(-${numberImg} * (1)))`,
  };

  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      setNumberImg(2);
    } else {
      setNumberImg(numberImg - 1);
    }
  };

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0);
    } else {
      setNumberImg(numberImg + 1);
    }
  };

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider__arrowhead slider__left">
        <i className="bx bx-chevron-left"></i>
      </button>
      <div style={objStyle} className="slider__interior">
        {product?.images.map((imgInfo) => (
          <div key={imgInfo.id} className="slider__img-container">
            <img className="slider__img" src={imgInfo.url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider__arrowhead slider__right">
        <i className="bx bx-chevron-right"></i>
      </button>
      <ul style={objStyle2} className="slider__interior2">
        {product?.images.map((imgInfo, i) => (
          <li
            key={imgInfo.id}
            className={numberImg === i - 1 + 1 ? "selected" : ""}
          >
            <img
              className="slider__img2"
              src={imgInfo.url}
              alt=""
              onClick={() => setNumberImg(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderImgs;
