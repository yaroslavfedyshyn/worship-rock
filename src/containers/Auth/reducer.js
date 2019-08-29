import typeToReducer from 'type-to-reducer';
import {LOGIN} from "./constants";

export const initialState = {
    me: null,
};

export default typeToReducer({
    [LOGIN]: {
        SUCCESS: (state, action) => {
            return {
                ...state,
                me: action.payload,
            }
        }
    }
}, initialState)