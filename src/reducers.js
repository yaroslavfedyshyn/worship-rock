import {combineReducers} from "redux";

import appReducer from './containers/App/reducer'
import authReducer from './containers/Auth/reducer'
import languageProviderReducer from './utils/langReducer'

const createReducer = function (injectedReducers) {
    return combineReducers({
        app: appReducer,
        auth: authReducer,
        locale: languageProviderReducer,
        ...injectedReducers
    })
};

export default createReducer;