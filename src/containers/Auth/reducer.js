import typeToReducer from 'type-to-reducer';
import {
    LOGIN,
    GET_ME
} from "./constants";
import {fromJS} from "immutable";

export const initialState = fromJS({
    me: null,
});

export default typeToReducer({
    [GET_ME]: {
        SUCCESS: (state, action) => {
            return state
                .set('me', fromJS(action.payload.data))
        },
    },

    [LOGIN]: {
        SUCCESS: (state, action) => {

            const user = action.payload.data;

            return state
                .set('me', fromJS(user))

        }
    }
}, initialState)