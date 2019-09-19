import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import authReducer from './containers/Auth/reducer';
import languageProviderReducer from './utils/langReducer';

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});


function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  routing: routeReducer,
  locale: languageProviderReducer,
});
