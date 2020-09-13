 import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../../app/store';
import { IEmperor } from './types';
import DateFnsUtils from '@date-io/date-fns';
import addDays from 'date-fns/addDays';
import { useDispatch } from 'react-redux';
const initialState : IEmperor[] = [];
//const dispatch = useDispatch();

const emperorSlice = createSlice({
    name: 'emperors',
    initialState,
    reducers: {
        addEmperor(state, action: PayloadAction<IEmperor>) {
            console.debug('\r\n ------ ADDING EMPEROR VIA REDUCER STATE', state, 'ACTION', action);
            debugger;
            state.push(action.payload);
        },
        createDefaultEmperors(state, action: PayloadAction<IEmperor>) {
            debugger;
            console.debug('CREATE DEFAULT ACTION PAYLOAD',action)
            createDefaultEmperors('REPLACE ME WITH PAYLOAD');
        },
        toggleEmperor(state, action: PayloadAction<IEmperor>) {
            /*
            let emperor = state.find(emperor => emperor.id === action.payload.id);

            if (emperor) {
                emperor.completed = !emperor.completed;
            }
            */
        },
    }
});

export const createDefaultEmperors = (
    text: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newEmperor: IEmperor = {
        id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
        praenomen: 'Publius',
        cognomen: 'Scipio',
        nomen: 'Cornelius',
        bio: 'sasddasadsasd'
    }
    dispatch(emperorSlice.actions.addEmperor(newEmperor))
}

export const addEmperor = (
    text: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newEmperor : IEmperor = {
        id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
        praenomen: 'Publius',
        cognomen: 'Scipio',
        nomen: 'Cornelius',
        bio: 'sasddasadsasd'
    }

    dispatch(emperorSlice.actions.addEmperor(newEmperor))
}
console.debug('emperorSlice.reducer', emperorSlice.reducer);
export default emperorSlice.reducer;  