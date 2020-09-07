import React,{MouseEvent,SyntheticEvent,ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
import {ITodo} from './types'
import {Box,Input,InputLabel,TextField,Button,FormControl,FormControlLabel,FormLabel} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core/styles';
import { useRef } from 'react';

export default function AddTodo(): JSX.Element {
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');
    const [errors, setErrors] = React.useState([]); 
    const refDescription = useRef();

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        console.debug(` ---- TARGET ----- `,e);
       setText(e.target.value);
    }

    function onFormChange(evt: ChangeEvent<HTMLFormElement | HTMLFormElement>) {
        console.debug('\r\n ------ ON FORM CHANGE ------ \r\n',evt);
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
			<form onSubmit={handleSubmit} onChange={onFormChange}>
				<Box display="flex">
					<FormControl>
						<InputLabel htmlFor="todo">Title</InputLabel>
						<TextField name="todo" id="todo" onChange={handleChange} placeholder={'todo'} />
					</FormControl>
					<FormControl>
						<FormLabel>Description</FormLabel>
						<TextField name="description" id="description" placeholder={'Description'} />
					</FormControl>
					<Button type="submit">Add Todo</Button>
				</Box>
			</form>
		);
}