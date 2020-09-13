import { combineReducers } from '@reduxjs/toolkit'
//import visibilityFilter from 'features/visibilityFilter/visibilityFilterSlice
import emperorReducer from '../components/features/Emperors/emperorSlice';
console.debug('========= emperorReducer', emperorReducer);

const rootReducer = combineReducers({
  emperorReducer,
  //visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>
console.debug('ROOT REDUCER', rootReducer);

export default rootReducer