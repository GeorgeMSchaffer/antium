import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './todos'
import emperorsReducer from './emperors'

const rootReducer = combineReducers({
  todos: todosReducer,
  emperors: emperorsReducer

})

export default rootReducer
