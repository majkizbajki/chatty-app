import { gql } from '../../__generated__/gql';

export const MESSAGE_ADDED_SUBSCRIPTION = gql(`
    subscription messageAdded($roomId: String!) {
        messageAdded(roomId: $roomId) {
            id
        }
    }
`);
