import { createAction } from 'redux-actions';

import {
  GET_ME,
  LOGIN,
  LOGOUT,
  SIGN_UP,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  RESET_STATE,
} from './constants';
import {
  getMeApi,
  loginApi,
  logoutApi,
  signUpApi,
  forgotPasswordApi,
  resetPasswordApi,
} from './api';

export const getMeAction = createAction(GET_ME, async () => await getMeApi());

export const loginAction = createAction(LOGIN, async (d) => await loginApi(d));
export const logoutAction = createAction(LOGOUT, async (d) => await logoutApi(d));

export const signUpAction = createAction(SIGN_UP, async (d) => await signUpApi(d));

export const forgotPasswordAction = createAction(
  FORGOT_PASSWORD,
  async (d) => await forgotPasswordApi(d),
);

export const resetPasswordAction = createAction(
  RESET_PASSWORD,
  async (d) => await resetPasswordApi(d),
);

export const resetStateAction = createAction(RESET_STATE);
