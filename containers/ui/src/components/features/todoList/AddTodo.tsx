import React,{MouseEvent,SyntheticEvent,ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
import {ITodo} from './types'
import {Input,TextField,Button,FormControl,FormControlLabel,FormLabel} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core/styles';

export default function AddTodo(): JSX.Element {
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        console.debug(` ---- TARGET ----- `,e);
       setText(e.target.value);
    }

    function handleSubmit(e: ChangeEvent<HTMLFormElement | HTMLFormElement>) {
        console.debug('----- ADD TODO SUBMIT EVENT',e);
        e.preventDefault()

        if (!text.trim()) {
            return;
        }
        dispatch(addTodo(text))

        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={text} onChange={handleChange} />
            <textarea placeholder="Textarea"></textarea>
            
            <Button type="submit" >Add Todo</Button>
        </form>
    )
}