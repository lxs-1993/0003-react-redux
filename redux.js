const redux = require("redux")
const initState = {
  count: 0
}
// reducer是建立store和action之间的联系的，然后重新返回一个新的state给store
// 注意reducer必须是一个纯函数
const reducer = (state=initState,action) => {
  switch (action.type) {
    case 'INCREMENT':
       return {...state,count: state.count+1}
    case 'DECREMENT':
       return {...state,count: state.count-1}
    default: 
      return state
  }
}

// 仓库，用来做状态存储管理的
const store = redux.createStore(reducer)

// 用来改变状态
const action = { type: 'INCREMENT' };
const action1 = { type: 'DECREMENT' };

// 在派发action之前进行订阅，监听store的变化
store.subscribe(()=>{
  console.log('state里边的count被修改了')
  console.log(`count:${store.getState().count}`)
})

// 用dispatch派发action
store.dispatch(action)
store.dispatch(action1)