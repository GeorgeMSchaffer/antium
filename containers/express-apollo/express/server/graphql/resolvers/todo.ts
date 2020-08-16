/**
 * Primary file for extracting proper schema structured objects
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import dateToString from '../../helpers/date';
import Todo from '../../models/todo';
import mongoose from 'mongoose';
import config from '../../../config';

/**
 * Get todo object with schema typing
 * @param id
 */
const getTodo = async (id: string) => {
  try {
    const todo: any = await Todo.findById(id);
    console.debug('GET TODO',todo);
    return {
      ...todo._doc,
      _id: todo.id,
      createdAt: dateToString(todo._doc.createdAt),
      updatedAt: dateToString(todo._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};

const getTodos = async (filters) => {
    console.debug('GET TODOS FILTERS',filters);
    const todos = await Todo.find();
    return todos;
};

/**
 * Get todo object with schema typing
 * @param todo
 */
const transformTodo = (todo: any) => {
  return {
    ...todo._doc,
    _id: todo.id,
    createdAt: dateToString(todo._doc.createdAt),
    updatedAt: dateToString(todo._doc.updatedAt)
  };
};

export { getTodo, getTodos, transformTodo };
