import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from '../../app/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';
import {ITodo} from './types'
import {Input,TextField,TextareaAutosize} from '@material-ui/core';
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
  console.debug('------ TODOS ------',todos)
    return (
    <div>
    <TextField
      id="datetime-local"
      label="Next appointment"
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    
    />
    <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    />

      <ul>
        {todos.map((todo:ITodo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

