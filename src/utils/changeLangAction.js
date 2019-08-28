import {CHANGE_LOCALE} from "../constants";
import {createAction} from 'redux-actions';

export const changeLocaleAction = createAction(
    CHANGE_LOCALE,
);