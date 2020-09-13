import React, { useRef,MouseEvent, SyntheticEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';

import { addEmperor } from './emperorSlice';
import { IEmperor } from './types'
import { Grid, Paper, Input, InputLabel, TextField, Button, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';

export default function Addemperor(): JSX.Element {

	const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			formGrid: {
				minWidth: '980px',
				alignContent: 'flext-start'
			},
			formRow: {
				//border: '1px dotted red',
				//height: '5em',
				margin: '10px 0',

			},
			textField: {
				width: '25%',
			},
			dateField: {

			}
		}),
	);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [emperor, setAttribute] = React.useState<IEmperor>({
		id:'1',
		cognomen: 'Cognomen',
		nomen: 'Noment',
		praenomen: 'Praenomen',
		bio: 'The Bio'
	});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
			console.debug(` ---- TARGET ----- `, e);
			debugger;
        //setText(e.target.value);
    }

    function onFormChange(evt: ChangeEvent<HTMLFormElement | HTMLFormElement>) {
        console.debug('\r\n ------ ON FORM CHANGE ------ \r\n', evt);
    }


		const selectedDate = (evt:any)=> {
			console.debug(`ON DATE SELECT`, evt);
		}
		const handleDateChange = (evt: any) => {
			console.debug(`ON DATE CHANGE`, evt);
			//setSelectedDate(evt.target.value);
		};
	
	const onTextFieldChange = (evt: any) => {
		const { id, value } = evt.target;
		console.debug(`FIELD ID: ${id} FIELD VALUE ${value}`);
		debugger;
	};
	
		const onDateFieldChange = (evt: any) => {
		
		};
		const onCreateDefaultEmperors = (e: any) => {
			console.debug('----- onCreateDefaultEmperors', e);
		};
		function handleSubmit(e: ChangeEvent<HTMLFormElement | HTMLFormElement>) {
			console.debug('----- ADD TODO SUBMIT EVENT', e);
			debugger;
			e.preventDefault();
		}

    return (
			<form onSubmit={handleSubmit} onChange={onFormChange}>
				<Grid container className={classes.formGrid}>
					<Grid className={classes.formRow} item xs={12}>
						<TextField
							className={classes.textField}
							variant="outlined"
							name="praenomen"
							id="praenomen"
							onChange={onTextFieldChange}
							placeholder={'Gaius'}
						/>
					</Grid>
					<Grid className={classes.formRow} item xs={12}>
						<TextField
							className={classes.textField}
							variant="outlined"
							name="nomen"
							id="nomen"
							onChange={onTextFieldChange}
							placeholder={'Julius'}
						/>
					</Grid>

					<Grid className={classes.formRow} item xs={12}>
						<TextField
							className={classes.textField}
							variant="outlined"
							name="prenomen"
							id="prenomen"
							onChange={onTextFieldChange}
							placeholder={'Caesar'}
						/>
					</Grid>

					<Grid className={classes.formRow} item xs={12}>
						<TextField
							onChange={onTextFieldChange}
							className={classes.textField}
							id="bio"
							label="Bio"
							multiline
							rows={4}
							defaultValue="Bio"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container alignContent={'flex-start'}>
							<TextField
								id="birthDate"
								label="emperor Date"
								type="date"
								onChange={onDateFieldChange}
								defaultValue={addDays(Date.now(), 1)}
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid container alignContent={'flex-start'}>
							<TextField
								id="birthDate"
								label="emperor Date"
								type="date"
								onChange={onDateFieldChange}
								defaultValue={addDays(Date.now(), 1)}
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
					</Grid>
					<Grid className={classes.formRow} alignItems={'center'} item>
						<Button type="submit">Add Emperor</Button>
						<Button type="button" onClick={onCreateDefaultEmperors}>Create Defaults</Button>
					</Grid>
				</Grid>
			</form>
		);
}