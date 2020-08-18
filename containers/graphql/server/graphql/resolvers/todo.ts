/**
 * File containing all todo queries, mutations and subscriptions
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import { PubSub } from 'apollo-server';
import mongoose from 'mongoose';
import Todo from '../../models/todo';
const pubsub = new PubSub();

const TODO_ADDED = 'TODO_ADDED';
const TODO_UPDATED = 'TODO_UPDATED';

/**
 * Todo Queries
 */
const TodoQueries = {
  todos: async (parent, args, context) => {
    try {
      const todos = await Todo.find();
      return todos.map((todo) => {
        // return transformUser(todo);
        return todo;
      });
    } catch (err) {
      throw err;
    }
  },
  todo: async (parent, { todoId }) => {
    try {
      const todo = await Todo.findById(todoId);
      // return transformUser(todo);
      return todo;
    } catch (err) {
      throw err;
    }
  }
};

/**
 * Todo Mutations
 */
const TodoMutations = {
  // [TODO][CLEANUP] //not crazy about the flow needs improvement

  upsertTodo: async (parent: any, { todoInput }: any) => {
    console.debug(`\r\n ----- todoInput ----- \r\n`, todoInput);
    let savedTodo: any;

    try {
      const todo = await Todo.findOne({
        _id: todoInput._id
      });
      if (todo) {
        const res = await Todo.update({_id: todo._id}, todo);
        console.debug(`\r\n ----- RES ----- \r\n`, res);
        savedTodo = res;
        pubsub.publish(TODO_UPDATED, {
          todoUpdated: savedTodo // transformUser(savedTodo)
        });
      } else {
        console.info('NO ID FOUND CREATING NEW TODO');
        const newTodo = new Todo({
          _id: new mongoose.Types.ObjectId(),
          title: todoInput.title,
          description: todoInput.description
          // dueDate: todoInput.dueDate || Date.now() //[TODO][REMOVEME] Fallback for testing only
        });
        savedTodo = await newTodo.save();
        console.debug(`\r\n ----- SAVED TODO ----- \r\n`, savedTodo);
        pubsub.publish(TODO_ADDED, {
          todoAdded: savedTodo // transformUser(savedTodo)
        });
      }
      return savedTodo;
    } catch (error) {
      throw error;
    }
  }
};

/*
 * Todo Subscriptions
 const UserSubscription = {
   userAdded: {
     subscribe: () => pubsub.asyncIterator([USER_ADDED])
    }
  };
 */

export { TodoQueries, TodoMutations };
