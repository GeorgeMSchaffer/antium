"use strict";
/**
 * Exporting all resolvers
 * @author Anurag Garg <garganurag893@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const user_1 = require("./user");
const rootResolver = {
    Query: Object.assign(Object.assign({}, user_1.UserQueries), todo_1.TodoQueries
    // Add other queries here
    ),
    Mutation: Object.assign(Object.assign({}, user_1.UserMutation), todo_1.TodoMutations
    // Add other mutations here
    ),
    Subscription: Object.assign({}, user_1.UserSubscription
    // Add other subscriptions here
    )
};
exports.default = rootResolver;
//# sourceMappingURL=index.js.map