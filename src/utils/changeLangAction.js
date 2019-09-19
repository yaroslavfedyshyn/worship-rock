import { createAction } from 'redux-actions';
import { CHANGE_LOCALE } from '../constants';

const changeLocaleAction = createAction(
  CHANGE_LOCALE,
);

export default changeLocaleAction;
