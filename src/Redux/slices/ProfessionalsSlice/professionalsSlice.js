import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  professionals: [],
  status: 'idle',
};

export const fetchProfessionals = createAsyncThunk(
  'professional/fetchProfessionals',
  async () => {
    const response = await fetch('https://murmuring-citadel-28008.herokuapp.com/professionals')
      .then(res => res.json())
    return response;
  }
);

export const professionalsSlice = createSlice({
  name: 'professional',
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessionals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfessionals.fulfilled, (state, action) => {
        state.status = 'idle';
        state.professionals = action.payload;
      });
  },
});

export default professionalsSlice.reducer;
