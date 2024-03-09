import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async ({ formData, config, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createEvent({ formData, config });
      toast.success(response?.data?.message);
      navigate("/dashboard/all-events");
      console.log(response);
      return response?.data?.event;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const getAllEvents = createAsyncThunk(
  "event/getAllEvents",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getAllEvents(id);
      console.log(response, "123456");
      return response?.data?.event;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteEvent(id);
      toast.success("Product Event Deleted Successfully.!");
      return id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.message);
    }
  }
);

export const getAllEventsForUser = createAsyncThunk(
  "event/getAllEventsForUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllEventsForUser();
      return response?.data?.events;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.message);
    }
  }
);
const eventSlice = createSlice({
  name: "event",
  initialState: {
    OneEvent: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createEvent.pending, (state, action) => {
        state.OneEvent = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.OneEvent = [...state.OneEvent, action.payload];
        state.loading = false;
        state.error = "";
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.OneEvent = [];
        state.loading = false;
        state.error = action.payload?.message;
      })
      /************************************************************** */
      .addCase(getAllEvents.pending, (state, action) => {
        state.OneEvent = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.OneEvent = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.OneEvent = [];
        state.loading = false;
        state.error = action.payload?.message;
      })
      /************************************************************** */
      .addCase(deleteEvent.pending, (state, action) => {
        state.OneEvent = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.OneEvent = state.OneEvent.filter(
          (event) => event._id !== action.payload
        );
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.OneEvent = [];
        state.loading = false;
        state.error = action.payload?.message;
      })
      /************************************************************** */
      .addCase(getAllEventsForUser.pending, (state, action) => {
        state.OneEvent = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllEventsForUser.fulfilled, (state, action) => {
        state.OneEvent = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(getAllEventsForUser.rejected, (state, action) => {
        state.OneEvent = [];
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export default eventSlice.reducer;
