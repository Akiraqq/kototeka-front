import { createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.GQL_URL,
});
