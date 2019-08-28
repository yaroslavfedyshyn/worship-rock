import {
    CHANGE_LOCALE,
    DEFAULT_LOCALE
} from "../constants";

const initialState = {
    lang: DEFAULT_LOCALE
};

function languageProviderReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOCALE:
            return {
               lang: action.payload
            };
        default:
            return state;
    }
}

export default languageProviderReducer;