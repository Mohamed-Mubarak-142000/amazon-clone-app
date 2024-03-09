import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ formData, config, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createProduct({ formData, config });
      toast.success("Product Created Successfully");
      navigate("/dashboard/all-products");
      return response?.data?.product;
    } catch (error) {
      console.log(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProdut",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getAllProducts(id);
      console.log(response?.data, "123456");
      return response?.data?.products;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteProduct(id);
      toast.success("Product Deleted Successfully");
      return id;
    } catch (error) {
      console.log(error?.response?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getAllProductForUser = createAsyncThunk(
  "product/getAllProductForUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllProductsForUser();
      return response?.data?.products;
    } catch (error) {
      console.log(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: "",
    success: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createProduct.pending, (state, action) => {
        state.products = [];
        state.error = "";
        state.loading = true;
        state.success = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
        state.error = "";
        state.loading = false;
        state.success = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.products = [];
        state.error = action.payload.error;
        state.loading = false;
        state.success = false;
      })
      /****************************get all product********************************* */
      .addCase(getAllProducts.pending, (state, action) => {
        state.products = [];
        state.error = "";
        state.loading = true;
        state.success = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = "";
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.products = [];
        state.error = action.payload.error;
        state.loading = false;
        state.success = false;
      })
      /*****************************delete product********************* */
      .addCase(deleteProduct.pending, (state, action) => {
        state.products = [];
        state.error = "";
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.loading = false;
        state.success = true;
        state.error = "";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.products = [];
        state.error = action.payload.error || "something went wrong";
        state.loading = false;
        state.success = false;
      })
      /*****************************get all product********************* */
      .addCase(getAllProductForUser.pending, (state, action) => {
        state.products = [];
        state.error = "";
        state.loading = true;
        state.success = false;
      })
      .addCase(getAllProductForUser.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.success = true;
        state.error = "";
      })
      .addCase(getAllProductForUser.rejected, (state, action) => {
        state.products = [];
        state.error = action.payload.error || "something went wrong";
        state.loading = false;
        state.success = false;
      });
  },
});

export default productSlice.reducer;
