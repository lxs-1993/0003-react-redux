import { INCREMENT,DECREMENT, } from "./constant";

export const createIncrementAction = num => ({
  type: INCREMENT,
  num
})
export const createDecrementAction = num => ({
  type: DECREMENT,
  num
})

// 异步加
export const createIncrementAsyncAction = (num,timeout)=>{
  console.log("执行",num,timeout)
  return dispatch=>{
    setTimeout(() => {
      dispatch(createIncrementAction(num))
    }, timeout);
  }
}