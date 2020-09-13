import React,{useEffect} from 'react'
import EmperorListItem from './EmperorCard'
 import { useSelector, useDispatch } from 'react-redux';
import { addEmperor, createDefaultEmperors } from './emperorSlice';
import {RootState} from '../../../app/rootReducer';
import {IEmperor} from './types'
import {Box,Input,List,ListItem,TextField,TextareaAutosize} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core/styles';

export default function EmperorList() {
	//console.debug('\r\n -------- ROOT STATE', RootState);
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		new Date(Date.now()),
	);
	
	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			textField: {

			},
			textArea: {

			}
		}),
	);
	const classes = useStyles();
	const emperors = useSelector(
		(state: RootState) => { console.debug('\r\n ------- USE SELECTOR STATE',state);return[]}
	);
	/*
	const emperors = useSelector(
		(state: RootState) => {
			console.debug(`\r\n ------ ROOT STATE`, state);
			//return state.emperors
		}
);
*/
	useEffect(() => {
		console.debug(`\r\n ----- USE EFFECT ON EMPERORS`,emperors);
		createDefaultEmperors('REPLACE ME WITH IEMPEROR');
	},[emperors])
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<Box  style={{'border': '1px solid green',maxWidth:'100%'}}>
			<List>
				<ListItem>List 
					Item
				</ListItem>
				</List>
		</Box>
	);
}

