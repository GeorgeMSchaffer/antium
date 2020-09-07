import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../../app/store';
import { ITodo } from './types';

const initialState : ITodo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITodo>) {
            state.push(action.payload);
        },
        toggleTodo(state, action: PayloadAction<ITodo>) {
            let todo = state.find(todo => todo.id === action.payload.id);

            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    }
});

export const { toggleTodo } = todoSlice.actions;

export const addTodo = (
    text: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo : ITodo = {
        id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
        completed: false,
        title: '',
        description: '',
        dueDate: undefined
    }

    dispatch(todoSlice.actions.addTodo(newTodo))
}

export default todoSlice.reducer;  