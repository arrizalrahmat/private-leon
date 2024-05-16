import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.users = initialState.users;
    },
    deleteUser: (state, action) => {
      state.users = [
        ...state.users.slice(0, action.payload),
        ...state.users.slice(action.payload + 1),
      ];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log(action.error);
        state.isLoading = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if (action.payload.type === 'refetch') {
          state.users = [
            ...state.users,
            ...action.payload.data,
          ];
        } else {
          state.users = action.payload.data;
        }
        state.isLoading = false;
      }),
});

export const { resetUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

export const getUsers = createAsyncThunk(
  '/user/getUsers',
  async (type) => {
    try {
      const response = await axios.get(
        'https://randomuser.me/api/?results=10'
      );

      return { data: response.data.results, type };
    } catch (error) {
      throw error;
    }
  }
);
