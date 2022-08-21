import React, { Component } from 'react'
import ReactRedux from './reactRedux'
import Person from './Person' //引入的Person的容器组件

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactRedux/>
        <hr />
        <Person/>
      </div>
    )
  }
}
