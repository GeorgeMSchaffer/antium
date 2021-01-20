/**
 * Exporting all resolvers
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import { TodoMutations, TodoQueries} from './todo';
import { UserMutation, UserQueries, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries,
    ...TodoQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation,
    ...TodoMutations
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription
    // Add other subscriptions here
  }
};

export default rootResolver;
