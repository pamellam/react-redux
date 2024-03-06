// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

/*
returns an action object of this shape
{ type: 'some auto generated unique identifier',}
*/
// counterSlice.actions.toggleCounter();

export default store;
