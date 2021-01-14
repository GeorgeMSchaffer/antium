import { combineReducers } from '@reduxjs/toolkit'

import todos from 'features/todoList/todoSlice';
import objectScans from 'features/objectScans/objectScanSlice';
import visibilityFilter from 'features/visibilityFilter/visibiltyFilterSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  objectScans
})

export type RootState = ReturnType<typeof rootReducer>
console.log('ROOT REDUCER', rootReducer);
export default rootReducer