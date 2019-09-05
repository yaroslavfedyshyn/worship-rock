import history from "../../history";

import {
    loginAction,
    logoutAction,
    signUpAction,
    forgotPasswordAction,
    resetPasswordAction,
    getMeAction,
} from './actions';
import {
    ROUTE_TO_LOGIN,
    ROUTE_TO_ROOT
} from '../../constants/routes';


export const loginStory = async ({data, dispatch}) => {
    await dispatch(loginAction(data));

    history.push(ROUTE_TO_ROOT);
};

export const signUpStory = async ({data, dispatch}) => {

    await dispatch(signUpAction(data));

    history.push(ROUTE_TO_LOGIN);
};

// export const logoutStory = async ({dispatch}) => {
//     await dispatch(logoutAction());
//
//     localStorage.clear();
//
//     dispatch(push(ROUTE_TO_LOGIN));
// };

//
// export const forgotPasswordStory = async ({payload, dispatch}) => {
//     await dispatch(forgotPasswordAction(payload));
//
//     dispatch(successNotification(trans('notification.forgot.password.email.sent')));
// };

//
// export const resetPasswordStory = async ({payload, dispatch}) => {
//     const performed = await dispatch(resetPasswordAction(payload));
//     const response = performed.value;
//     let redirectTo = ROUTE_TO_ROOT;
//
//     if (response && response.data && response.data.user) {
//         setUser(response.data.user);
//
//         if (!response.data.user.signConflictOfInterests) {
//             redirectTo = ROUTE_TO_WELCOME_PAGE;
//         } else if (!response.data.user.signConduct) {
//             redirectTo = ROUTE_TO_SIGN_AGREEMENT_CONDUCT;
//         }
//     }
//
//     if (response && response.data && response.data.token) {
//         setToken(response.data.token);
//     }
//
//     await dispatch(getMeAction());
//
//     dispatch(push(redirectTo));
// };
