
import React, { useRef, FC, useState, MouseEvent, ChangeEvent,useDebugValue } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Input, InputLabel, TextField, Button, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from 'store'
//import { addTodo, getTodoList } from 'store/todos'
import { useDispatch } from 'react-redux'
import { addEmperor, getEmperorList } from 'store/emperors';
import { IEmperor } from '../store/types';
import addDays from 'date-fns/addDays';
interface IProps{
  //placeholder
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

		const onDateFieldChange = (evt: any) => {
		
		};

const Form: FC = (props: IProps) => {
  const navigate = useNavigate();
  //  const { todos } = useAppSelector(state => state)
  const { emperors } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [loading, setLoading] = useState(false)
	const classes = useStyles()
  useDebugValue(emperors)

  const [emperor, setAttribute] = React.useState<IEmperor>({
    id: 1,
    cognomen: '',
    nomen: '',
    praenomen: '',
    bio: ''
  });

	const onTextFieldChange = (evt: any) => {
    const { id, value } = evt.target
    console.debug(`UPDATING ID: ${id} FIELD VALUE ${value}`, emperor);
    Object.assign(emperor, { [id]: value });
    setAttribute(emperor)
    console.debug(`----- EMPERORS ON TEXT CHANGE ----`, id, value,'\r\n --- EMPERORS',emperors);
  }

  const onAdd = () => {
    const text = inputRef.current?.value
    if (text) {
      dispatch(
        addEmperor({
          nomen: 'Gaius',
          cognomen: 'Julius',
          praenomen: 'Caesar',
          id: Math.random() * 10000, // REPLACE ANTI-PATTERN
          active: false
        })
      )
    }
  }

  function handleSubmit(e: MouseEvent) {
    console.debug('----- ADD TODO SUBMIT EVENT', e);
    e.preventDefault();
  };

  const onLoadMore = async () => {
    setLoading(true)
    await dispatch(getEmperorList(1000))
    setLoading(false)
  }

  const goToDetail = () => {
    navigate('/detail')
  }

  return (
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
      <Grid className={classes.formRow} alignItems={'center'} container>
        <Button onClick={handleSubmit} variant={"outlined"} >
          Add Emperor
							</Button>
      </Grid>
    </Grid>
  )
}
  /*
  return (
    <div>
      <button onClick={goToDetail}> go to detail</button>
      <h1>Demo</h1>
      <div style={{ border: '1px solid #ccc', padding: 20 }}>
        <input ref={inputRef} />
        <button onClick={onAdd}>+</button>
        <br />
        <ul>
          {JSON.stringify(emperors)}
        </ul>
        <br />
        {loading ? <span>Loading...</span> : <button onClick={onLoadMore}>Load More</button>}
      </div>
    </div>
  )
}*/

export default Form
