import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductId from "./pages/ProductId";
import Purchases from "./pages/Purchases";
import Register from "./pages/Register";
import Background from "./components/shared/Background";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductId />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
