import React, { Component } from 'react'
import ReactRedux from './reactRedux'
import store from './store/index'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <ReactRedux store={store} />
      </div>
    )
  }
}
