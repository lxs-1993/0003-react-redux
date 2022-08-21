#### redux的三个核心
```javascript
 Action
 Reducer
 Store
```
#### redux的工作流程
```javascript
 react组件会在redux中派发一个action方法,通过store.dispatch方法,将action对象派发给store,当store接收到action对象，会将先前的state和action对象一同发给reducer,reducer在接收到数据后，进行数据的更改，返回一个新的状态给store,最后由store更改数据
```
#### Reducer
```javascript
 reducer的本质是一个函数，接收state和action,返回加工之后的状态
 reducer的两个作用:初始化状态; 加工状态
```
#### redux的API
```javascript
 createStore
 applyMiddleware
 combineReducers
```
#### Redux的三大原则
```javascript
 单向数据流 UI组件-> action -> store -> reducer -> store
 state是只读的,redux中不能直接改变state,改变状态，需要dispatch一个action
 action传入reducer，reducer来纯函数来处理装填的变更
 纯函数执行,每一个reducer都是一个纯函数，不会有任何的副作用，返回的是一个新的state,state改变会触发store中的subscribe
```
#### redux-thunk异步编程
```javascript

```
#### 如何创建一个容器组件：靠 react-redux 的 connect 函数
```javascript
  connect(mapStateToProps,mapDispatchToProps)(UI组件)
  mapStateToProps: 映射状态，返回值是一个对象
  mapDispatchToProps: 映射操作状态的方法，返回值是一个对象
```
#### redux的调试工具
```javascript
 npm install redux-devtools-extension
 在store在配置
 import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

```