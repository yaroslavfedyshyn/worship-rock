import typeToReducer from 'type-to-reducer';
import { fromJS } from 'immutable';
import {
  LOGIN,
  GET_ME, SIGN_UP,
} from './constants';
import submissionError from '../../utils/submissionError';

export const initialState = fromJS({
  me: null,
});

export default typeToReducer({
  [GET_ME]: {
    SUCCESS: (state, action) => state
      .set('me', fromJS(action.payload.data)),
  },

  [LOGIN]: {
    SUCCESS: (state, action) => {
      const user = action.payload.data;

      return state
        .set('me', fromJS(user));
    },
    FAIL: (state, action) => {
      submissionError(action.payload.response.data.details[0]);
    },
  },
  [SIGN_UP]: {
    FAIL: (state, action) => {
      submissionError(action.payload.response.data.details[0]);
    },
  },
}, initialState);
