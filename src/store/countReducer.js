import { INCREMENT,DECREMENT } from "./constant";

const initState = {
  count: 0
}

export const countReducer = (state=initState,action)=> {
  const { type,num } = action
  switch (type) {
    case INCREMENT:
      return {...state,count: state.count+num};
    case DECREMENT:
      return {...state,count: state.count-num};
    default:
      return state;
  }
}