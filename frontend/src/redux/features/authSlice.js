import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";

//register function
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ newForm, config, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.registerUser({
        newForm,
        config,
      });
      toast.success("Register Successfully");
      navigate("/login");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data);
    }
  }
);

//login function
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.login({ email, password });
      toast.success("Login Successfully");
      navigate("/");
      return response.data?.user;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

//load user
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.loadUser();
      return response?.data?.user;
    } catch (error) {
      console.log(error?.response?.message);
      return rejectWithValue(error?.response?.message);
    }
  }
);

//logout
export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.logOut();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    Oneuser: [],
    loading: false,
    error: "",
    isAuthenticated: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.Oneuser = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder
      /////////////////////////register///////////////////////////
      .addCase(registerUser.pending, (state, action) => {
        state.Oneuser = [];
        state.error = "";
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.Oneuser = action.payload;
        state.error = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.Oneuser = [];
        state.loading = false;
        state.error = action?.payload?.message || "Something Went Wrong..!";
      })
      /////////////////////////login///////////////////////////////
      .addCase(loginUser.pending, (state, action) => {
        state.Oneuser = [];
        state.error = "";
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.Oneuser = action.payload;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.Oneuser = [];
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action?.payload?.message;
      })
      /*******************load user******************************** */
      .addCase(loadUser.pending, (state, action) => {
        state.Oneuser = [];
        state.error = "";
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.Oneuser = action.payload;
        state.error = "";
        state.isAuthenticated = true;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.Oneuser = [];
        state.loading = false;
        state.error = action?.payload?.message;
        state.isAuthenticated = false;
      })
      /*******************logout user******************************** */
      .addCase(logOutUser.pending, (state, action) => {
        state.Oneuser = [];
        state.error = "";
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.Oneuser = action.payload;
        state.error = "";
        state.isAuthenticated = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.Oneuser = [];
        state.loading = false;
        state.error = action?.payload?.message;
        state.isAuthenticated = false;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
