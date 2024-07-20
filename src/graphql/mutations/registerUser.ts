import { gql } from '../../__generated__/gql';

export const REGISTER_USER = gql(`
    mutation registerUser($email: String!, $firstName: String!, $lastName: String!, $password: String!, $passwordConfirmation: String!) {
        registerUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, passwordConfirmation: $passwordConfirmation) {
            email
            firstName
            id
            lastName
            role
        }
    }
`);
