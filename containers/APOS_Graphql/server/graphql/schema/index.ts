/**
 * Primary file for GraphQL Schema
 * @author Anurag Garg <garganurag893@gmail.com>
 */
import { ApolloServerExpressConfig, gql } from 'apollo-server-express';
import GraphQLDate from 'graphql-date';
import resolvers from '../resolvers/index';

console.debug(`\r\n ----- GraphQLDate ----- \r\n`, GraphQLDate);
// const GraphQLJSON = require('graphql-type-json');
// GraphQLJSON.name = 'gqlJSON';
// console.debug(`\r\n ----- GraphQLDateTime ----- \r\n`, GraphQLDateTime);
const typeDefs = gql`

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

const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req, connection, payload }: any) => {
    if (connection) {
      return { isAuth: payload.authToken };
    }
    return { isAuth: req.isAuth };
  },
  playground: true
};

export default schema;
