"use strict";
/**
 * File containing all todo queries, mutations and subscriptions
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMutations = exports.TodoQueries = void 0;
const tslib_1 = require("tslib");
const apollo_server_1 = require("apollo-server");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const todo_1 = tslib_1.__importDefault(require("../../models/todo"));
const pubsub = new apollo_server_1.PubSub();
const TODO_ADDED = 'TODO_ADDED';
const TODO_UPDATED = 'TODO_UPDATED';
/**
 * Todo Queries
 */
const TodoQueries = {
    todos: (parent, args, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield todo_1.default.find();
            return todos.map((todo) => {
                // return transformUser(todo);
                return todo;
            });
        }
        catch (err) {
            throw err;
        }
    }),
    todo: (parent, { todoId }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const todo = yield todo_1.default.findById(todoId);
            // return transformUser(todo);
            return todo;
        }
        catch (err) {
            throw err;
        }
    })
};
exports.TodoQueries = TodoQueries;
/**
 * Todo Mutations
 */
const TodoMutations = {
    // [TODO][CLEANUP] //not crazy about the flow needs improvement
    upsertTodo: (parent, { todoInput }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        console.debug(`\r\n ----- todoInput ----- \r\n`, todoInput);
        let savedTodo;
        try {
            const todo = yield todo_1.default.findOne({
                _id: todoInput._id
            });
            if (todo) {
                const res = yield todo_1.default.update({ _id: todo._id }, todo);
                console.debug(`\r\n ----- RES ----- \r\n`, res);
                savedTodo = res;
                pubsub.publish(TODO_UPDATED, {
                    todoUpdated: savedTodo // transformUser(savedTodo)
                });
            }
            else {
                console.info('NO ID FOUND CREATING NEW TODO');
                const newTodo = new todo_1.default({
                    _id: new mongoose_1.default.Types.ObjectId(),
                    title: todoInput.title,
                    description: todoInput.description
                    // dueDate: todoInput.dueDate || Date.now() //[TODO][REMOVEME] Fallback for testing only
                });
                savedTodo = yield newTodo.save();
                console.debug(`\r\n ----- SAVED TODO ----- \r\n`, savedTodo);
                pubsub.publish(TODO_ADDED, {
                    todoAdded: savedTodo // transformUser(savedTodo)
                });
            }
            return savedTodo;
        }
        catch (error) {
            throw error;
        }
    })
};
exports.TodoMutations = TodoMutations;
//# sourceMappingURL=todo.js.map