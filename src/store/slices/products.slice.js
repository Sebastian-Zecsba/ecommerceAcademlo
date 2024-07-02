import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
  },
});

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProductsThunk =
  (url = `${import.meta.env.VITE_API_URL}products`) =>
  (dispatch) => {
    axios
      .get(url)
      .then((res) => dispatch(setProductsGlobal(res.data)))
      .catch((err) => console.error(err));
  };
