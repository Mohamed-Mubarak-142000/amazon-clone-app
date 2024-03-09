import { createSlice } from "@reduxjs/toolkit";

//get items from loaclStorage
const loadCartFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

//saved items from loaclStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: loadCartFromLocalStorage(),
  },
  reducers: {
    /*******add to cart**** */
    addProductToCart: (state, action) => {
      const newProduct = action.payload;
      const isExistProduct = state.cartProducts.find(
        (pro) => pro._id === newProduct._id
      );

      if (isExistProduct) {
        isExistProduct.quantity++;
      } else {
        state.cartProducts.push({ ...newProduct, quantity: 1 });
      }

      saveCartToLocalStorage(state.cartProducts);
    },
    /*******remove from cart*****/
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      state.cartProducts = state.cartProducts.filter((pro) => pro._id !== id);
      saveCartToLocalStorage(state.cartProducts);
    },
    /********clear cart*****/
    clearCart: (state) => {
      state.cartProducts = [];
      saveCartToLocalStorage(state.cartProducts);
    },
    /*****increase cart******/
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartProducts.find((item) => item._id === id);
      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(state.cartProducts);
    },

    /******decrease**** */
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartProducts.find((item) => item._id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveCartToLocalStorage(state.cartProducts);
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
