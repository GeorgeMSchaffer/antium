import { combineReducers } from '@reduxjs/toolkit'

import todos from '../components/features/todoList/todoSlice';
//import visibilityFilter from 'features/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
  todos,
  //visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer