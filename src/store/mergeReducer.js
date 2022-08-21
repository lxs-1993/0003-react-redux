import { combineReducers  } from 'redux'

import { countReducer } from './countReducer'
import { personReducer } from './personReducer'
//汇总所有的reducer变为一个总的reducer
export default combineReducers({
  countReducer,
  personReducer,
});