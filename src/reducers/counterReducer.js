import {INCREMENT, DECREMENT} from './../actions/actions';


const counterInitialState = {
  counter: 0,
};


export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}