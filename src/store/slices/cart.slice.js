import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload,
  },
});

export const { setCartGlobal } = cartSlice.actions;

export default cartSlice.reducer;

export const getAllProductsCartThunk = () => (dispatch) => {
  const url = `${import.meta.env.VITE_API_URL}cart`;
  axios
    .get(url, getConfigToken())
    .then((res) => dispatch(setCartGlobal(res.data)))
    .catch((err) => console.error(err));
};
