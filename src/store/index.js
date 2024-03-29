import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };
// create counter reducer
function counterReducer(state = initialState, action) {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'INCREASE') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'TOGGLE_COUNTER') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
}

// store
const store = createStore(counterReducer);

// connect app to store - provide store to the app / index.js

export default store;
