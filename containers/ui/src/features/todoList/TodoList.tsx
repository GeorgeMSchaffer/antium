import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from '../../app/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';
import {ITodo} from './types'

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(
      (state: RootState) => state.todos
  );

  return (
    <ul>
      {todos.map((todo:ITodo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}