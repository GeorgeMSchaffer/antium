import React, { useRef,MouseEvent, SyntheticEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';

import { addEmperor } from './emperorSlice';
import { IEmperor } from './types'
import { Grid, Paper, Input, InputLabel, TextField, Button, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}


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


    function onFormChange(evt: ChangeEvent<HTMLFormElement | HTMLFormElement>) {
        console.debug('\r\n ------ ON FORM CHANGE ------ \r\n', evt);
    }
	
	const onTextFieldChange = (evt: any) => {
		const { id, value } = evt.target;
		console.debug(`UPDATING ID: ${id} FIELD VALUE ${value}`,emperor);
		setAttribute({
			...emperor,
			[id]: value
		});
	};
	
		const onDateFieldChange = (evt: any) => {
		
		};
		const onCreateDefaultEmperors = (e: any) => {
			console.debug('----- onCreateDefaultEmperors', e);
		};
		function handleSubmit(e: MouseEvent) {
			console.debug('----- ADD TODO SUBMIT EVENT', e);
			e.preventDefault();
	};
		export default function AddEmperor(): JSX.Element {
			return (
				<form>
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
							<Button onClick={handleSubmit}>
								Add Emperor
							</Button>
							<Button type="button" onClick={onCreateDefaultEmperors}>
								Create Defaults
							</Button>
						</Grid>
					</Grid>
				</form>
			);
		}