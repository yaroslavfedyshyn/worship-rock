import typeToReducer from 'type-to-reducer';
import {LOGIN} from "./constants";
import setToken from "../../utils/setToken";
import setUser from "../../utils/setUser";
import {fromJS} from "immutable";

export const initialState = {
    me: null,
};

export default typeToReducer({
    [LOGIN]: {
        SUCCESS: (state, action) => {
            const data = action.payload;

            setUser(data.user);
            setToken(data.token);

            return state
                .set('me', fromJS(data.user))

        }
    }
}, initialState)