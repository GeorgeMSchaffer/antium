import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { fakeFetchRemoteData } from '../api'
import { IEmperor } from './types';

const initialState: IEmperor[] = [
  {
    id: 1,
    nomen: 'Julius',
    cognomen: 'Caesar',
    praenomen: 'Gaius',
    bio: '....',
    active:true
  }
]

const emperorsSlice = createSlice({
  name: 'emperors',
  initialState,
  reducers: {
    addEmperor(state, action: PayloadAction<IEmperor>) {
      //const { id, nomen,cognomen,praenomen,bio,dateOfBirth,dateOfDeath,relations } = <IEmperor>action.payload
      console.debug(`\r\n ------- ADD EMPEROR STATE AND ACTION`, state, 'ACTION', action);
      state.push({ ...action.payload })
    },
    toggleEmperor(state, action) {
      const emperor = state.find(emperor => emperor.id === action.payload)
      if (emperor) {
        emperor.active = !emperor.active
      }
    }
  }
})

export const { addEmperor, toggleEmperor } = emperorsSlice.actions 

export default emperorsSlice.reducer

export const getEmperorList = (time: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fakeFetchRemoteData(time)
    response.forEach(res => {
      dispatch(addEmperor(res))
    })
  }
}
