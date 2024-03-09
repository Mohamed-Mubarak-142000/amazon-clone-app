import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import SellerReducer from "./features/sellerSlice";
import ProductReducer from "./features/productSilce";
import EventReducer from "./features/eventSlice";
import CartReducer from "./features/cartSlice";
const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    seller: SellerReducer,
    product: ProductReducer,
    event: EventReducer,
    cart: CartReducer,
  },
});

export default Store;
