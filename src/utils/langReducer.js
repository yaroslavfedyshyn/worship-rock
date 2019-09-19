import { fromJS } from 'immutable';

import {
  CHANGE_LOCALE,
  DEFAULT_LOCALE,
} from '../constants';

const initialState = fromJS({
  lang: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('lang', fromJS(action.payload));
    default:
      return state;
  }
}

export default languageProviderReducer;
