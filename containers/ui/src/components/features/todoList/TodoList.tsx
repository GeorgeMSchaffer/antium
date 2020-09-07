import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from '../../../app/rootReducer';
 import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';
import {ITodo} from './types'
import {Box,Input,List,ListItem,TextField,TextareaAutosize} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core/styles';

export default function TodoList() {
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		new Date(Date.now()),
	);
	
	const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField:{

		},
		textArea:{

		}
	}),
);
	const classes = useStyles();
	const todos = useSelector(
			(state: RootState) => state.todos
	);
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};
	console.debug('------ TODOS ------', todos);
	return (
		<Box>
			<List>
				<ListItem>List 
					Item
				</ListItem>
				</List>
		</Box>
	);
}

