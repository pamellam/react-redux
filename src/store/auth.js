import { createSlice } from '@reduxjs/toolkit';

//  auth inital state
const initialAuthState = {
  isAuthenticated: false,
};

// auth state slice
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
