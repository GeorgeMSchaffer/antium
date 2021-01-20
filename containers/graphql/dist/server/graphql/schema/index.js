"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Primary file for GraphQL Schema
 * @author Anurag Garg <garganurag893@gmail.com>
 */
const apollo_server_express_1 = require("apollo-server-express");
const graphql_date_1 = tslib_1.__importDefault(require("graphql-date"));
const index_1 = tslib_1.__importDefault(require("../resolvers/index"));
console.debug(`\r\n ----- GraphQLDate ----- \r\n`, graphql_date_1.default);
// const GraphQLJSON = require('graphql-type-json');
// GraphQLJSON.name = 'gqlJSON';
// console.debug(`\r\n ----- GraphQLDateTime ----- \r\n`, GraphQLDateTime);
const typeDefs = apollo_server_express_1.gql `

  type Query {
    users: [User!]!
    user(userId: ID!): User!
    login(email: String!, password: String!): AuthData!
    todo(todoId: ID!): Todo!
    todos: [Todo!]!
  }
  type Mutation {
    createUser(userInput: UserInput): AuthData!
    upsertTodo(todoInput: todoInput!): Todo
    updateUser(userId: ID!, updateUser: UpdateUser): User!
  }
  type Subscription {
    userAdded: User
  }
  input todoInput {
    title: String
    description: String
    dueDate: Int
  }
  type Todo {
    _id: ID!
    title: String
    description: String
    dueDate: Int
  }
  type User {
    _id: ID!
    email: String!
    name: String!
    password: String
    createdAt: String!
    updatedAt: String!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input UserInput {
    email: String!
    name: String!
    password: String!
  }
  input UpdateUser {
    email: String
    name: String
    password: String
  }
`;
const schema = {
    typeDefs,
    resolvers: index_1.default,
    introspection: true,
    context: ({ req, connection, payload }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (connection) {
            return { isAuth: payload.authToken };
        }
        return { isAuth: req.isAuth };
    }),
    playground: true
};
exports.default = schema;
//# sourceMappingURL=index.js.map