import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  statusCode: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await axiosInstance.get("/sanctum/csrf-cookie");

      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      await axiosInstance.get("/sanctum/csrf-cookie");
      const response = await axiosInstance.post("/register", data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.statusCode = action.payload.code;
        state.isAuthenticated = true;
        if (action.payload.code !== 200) {
          state.error = action.payload.message; 
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.statusCode = 500;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.statusCode = action.payload.code;
        state.isAuthenticated = true;
        if (action.payload.code !== 200) {
          state.error = action.payload.message; 
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.statusCode = 500;
      });
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
