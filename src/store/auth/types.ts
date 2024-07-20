import { User } from '@appTypes/index';

export type State = {
    token: string | null;
    user: User;
};

type Action = {
    login: (state: State) => void;
    logout: () => void;
};

export type AuthStore = State & Action;
