import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPerson } from './store/personAction'

class Person extends Component {
  addPerson = ()=>{
    const name = "主张三"
    const age = 20
    const personObj = {id: Date.now(),name,age}
    this.props.addPerson(personObj)
  }
  // componentDidMount() {
  //   console.log(`output->`,this.props.person)
  //     this.addPerson()
  // }
  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为{this.props.count}</h2>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
             this.props.persons.map(item=>{
              return <li key={item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      persons: state.personReducer
    }
  },//映射状态
  {addPerson}//映射操作状态的方法
)(Person)
