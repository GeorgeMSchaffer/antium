import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from './todos'
import emperorsReducer from './emperors'
import objectScanReducer from './objectScans';
const rootReducer = combineReducers({
  todos: todosReducer,
  emperors: emperorsReducer,
  objectScans:objectScanReducer

})

export default rootReducer
