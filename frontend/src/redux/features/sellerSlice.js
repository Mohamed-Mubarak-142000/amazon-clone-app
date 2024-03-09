import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";

export const registerseller = createAsyncThunk(
  "seller/registerseller",
  async ({ newForm, config, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.registerSeller({
        newForm,
        config,
      });
      toast.success(response?.data?.message);
      navigate("/seller-login");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const shopLogin = createAsyncThunk(
  "seller/shopLogin",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.sellerLogin({ email, password });
      toast.success(response?.data?.message);
      navigate("/dashboard");
      return response?.data?.seller;
    } catch (error) {
      console.log(error?.response?.data?.message, "123456");
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getSeller = createAsyncThunk(
  "seller/getSeller",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getSeller();
      return response?.data.seller;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const logoutShop = createAsyncThunk(
  "seller/logoutShop",
  async ({ navigate }, { rejectWithValue }) => {
    try {
      const response = await api.logOutShop();
      toast.success(response?.data?.message);
      navigate("/");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getInfoShop = createAsyncThunk(
  "seller/getInfoShop",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getInfoShop(id);
      console.log("1222222", response?.data?.shop);
      return response?.data?.shop;
    } catch (error) {
      console.log(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    OneSeller: [],
    loading: false,
    error: "",
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      /////////////////////////register///////////////////////////
      .addCase(registerseller.pending, (state, action) => {
        state.OneSeller = null;
        state.error = "";
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(registerseller.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.OneSeller = action.payload;
        state.error = "";
      })
      .addCase(registerseller.rejected, (state, action) => {
        state.OneSeller = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action?.payload?.message || "Something Went Wrong..!";
      })

      //////////////////////////login///////////////////////////
      .addCase(shopLogin.pending, (state, action) => {
        state.OneSeller = null;
        state.error = "";
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(shopLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.OneSeller = action.payload;
        state.isAuthenticated = true;
        state.error = "";
      })
      .addCase(shopLogin.rejected, (state, action) => {
        state.OneSeller = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action?.payload?.message || "Something Went Wrong..!";
      })
      //////////////////////////loading seller///////////////////////////
      .addCase(getSeller.pending, (state, action) => {
        state.OneSeller = null;
        state.error = "";
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(getSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.OneSeller = action.payload;
        state.isAuthenticated = true;
        state.error = "";
      })
      .addCase(getSeller.rejected, (state, action) => {
        state.OneSeller = null;
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action?.payload?.message || "Something Went Wrong..!";
      })
      /*****************************logout shop********************* */
      .addCase(logoutShop.pending, (state, action) => {
        state.OneSeller = [];
        state.error = "";
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(logoutShop.fulfilled, (state, action) => {
        state.OneSeller = action.payload;
        state.error = "";
        state.loading = false;
        state.isAuthenticated = false;
      })
      .addCase(logoutShop.rejected, (state, action) => {
        state.OneSeller = [];
        state.error = action.payload?.error || "something went wrong";
        state.loading = false;
        state.isAuthenticated = false;
      })
      /*****************************get info shop********************* */
      .addCase(getInfoShop.pending, (state, action) => {
        state.OneSeller = [];
        state.error = "";
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(getInfoShop.fulfilled, (state, action) => {
        state.OneSeller = action.payload;
        state.error = "";
        state.loading = false;
        state.isAuthenticated = false;
      })
      .addCase(getInfoShop.rejected, (state, action) => {
        state.OneSeller = [];
        state.error = action.payload;
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

export default sellerSlice.reducer;
