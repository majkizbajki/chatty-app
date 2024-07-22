import { ThemeType } from '@appTypes/index';
import { Locales } from '@i18n/i18n';

type State = {
    language: Locales;
    theme: ThemeType;
};

export type AppStore = State;
