import { Link, useNavigate } from "react-router-dom";
import "./style/header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { cartGlobal } = useSelector((state) => state);

  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };
  return (
    <header className="header__container">
      <h1 className="header__logo">
        <i className="bx bxs-shopping-bags header__icon"></i>
        <Link to="/" className="header__title">
          E-COMMERCE
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__items">
            <Link to="/login">
              <i className="bx bx-user header__icon"></i>
            </Link>
          </li>
          <li className="header__items">
            <Link to="/purchases">
              <i className="bx bx-shopping-bag header__icon"></i>
            </Link>
          </li>
          <li className="header__items count__cart ">
            <Link to="/cart">
              {cartGlobal && <span className="count__cart-span">{cartGlobal.length}</span>}
              <i className="bx bx-cart header__icon"></i>
            </Link>
          </li>
          {token && ( 
            <li className="header__items">
              <i
                className="bx bx-log-out header__log-out header__icon"
                onClick={() => logout()}
              ></i>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
