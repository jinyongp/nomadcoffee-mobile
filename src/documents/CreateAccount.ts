import { gql } from '@apollo/client';

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation CreateAccount($name: String!, $username: String!, $email: String!, $password: String!) {
    createAccount(name: $name, username: $username, email: $email, password: $password) {
      ok
      error
    }
  }
`;
