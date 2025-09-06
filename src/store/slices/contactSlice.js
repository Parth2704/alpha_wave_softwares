import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (message) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      ...message,
      createdAt: new Date().toISOString(),
    };
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push(action.payload);
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to send message';
      });
  },
});

export default contactSlice.reducer;
