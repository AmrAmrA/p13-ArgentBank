import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HandleSubmit } from '../../utils/Handlesubmit';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      await HandleSubmit(email, password);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setEmail, setPassword, setError } = authSlice.actions;

export default authSlice.reducer;
