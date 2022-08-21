//引入Count的UI组件
// import CountUI from './component/Count'
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from './store/action'
import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
class reactRedux extends Component {
  //加法
  increment = ()=>{
    this.props.add(10)
  }
  //减法
  decrement = ()=>{
    this.props.minus(5)
  }

  //奇数再加
  // incrementIfOdd = ()=>{
  //   this.props.minus(value*1)
  // }
  // //异步加
  incrementAsync = ()=>{
    this.props.addAsync(100,1000)
  }

  render() {
    //console.log('UI组件接收到的props是',this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        {/* <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp; */}
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}




export default connect(
  state=>({count: state.count}),
  {
    add:createIncrementAction,
    minus:createDecrementAction,
    addAsync:createIncrementAsyncAction,
  }
)(reactRedux)
