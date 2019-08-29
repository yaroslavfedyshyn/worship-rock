import {createAction} from 'redux-actions';
import {
    GET_ME,
    LOGIN,
    LOGOUT,
    SIGN_UP,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
    RESET_STATE,
    FETCH_DOCUMENT_BY_ID,
    SIGN_DOCUMENT,
} from './constants';
import {
    getMeApi,
    loginApi,
    logoutApi,
    registerByTokenApi,
    checkRegisterByTokenApi,
    forgotPasswordApi,
    resetPasswordApi,
    signDocumentApi,
    fetchDocumentByIdApi,
} from './api';

export const getMeAction = createAction(GET_ME, async (d) => await getMeApi(d));

export const loginAction = createAction(LOGIN, async (d) => await loginApi(d));
export const logoutAction = createAction(LOGOUT, async (d) => await logoutApi(d));

export const signUpAction = createAction(SIGN_UP, async (d) => await registerByTokenApi(d));

export const forgotPasswordAction = createAction(FORGOT_PASSWORD, async (d) => await forgotPasswordApi(d));
export const resetPasswordAction = createAction(RESET_PASSWORD, async (d) => await resetPasswordApi(d));

export const resetStateAction = createAction(RESET_STATE);

export const fetchDocumentByIdAction = createAction(FETCH_DOCUMENT_BY_ID, async d => await fetchDocumentByIdApi(d));
export const signDocumentAction = createAction(SIGN_DOCUMENT, async d => await signDocumentApi(d), m => m);
