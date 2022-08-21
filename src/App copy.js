
import React, { Component } from 'react'
import store from './store/index'
import { createDecrementAction,createIncrementAction,createIncrementAsyncAction} from './store/action'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }
  // 加法
  increment = ()=>{
    store.dispatch(createIncrementAction(1))
  }
  // 减法
  decrement = ()=>{
    setTimeout(() => {
      store.dispatch(createDecrementAction(1))
    }, 3000);
  }
  // 异步加
  asyncIncrement = ()=>{
    createIncrementAsyncAction(11,2000)
  }
  componentDidMount(){
    store.subscribe(()=>{
      console.log("触发")
      this.setState({
        count: store.getState().count
      })
    })
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>当前求和:{count}</h1>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.asyncIncrement}>异步+</button>&nbsp;
      </div>
    )
  }
}

