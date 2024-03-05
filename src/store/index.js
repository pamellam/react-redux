// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// preparing slice of global state
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

// store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

/*
returns an action object of this shape
{ type: 'some auto generated unique identifier',}
*/
// counterSlice.actions.toggleCounter();

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
