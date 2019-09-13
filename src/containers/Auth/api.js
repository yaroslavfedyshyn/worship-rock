import api from '../../api';
import apiSubmissionError from '../../utils/apiSubmissionError'

export const getMeApi = () =>
    api
        .get('/auth/profile')
        .then(apiSubmissionError);

export const loginApi = (data) =>
    api
        .post('/auth/login', data)
        .then(apiSubmissionError);

export const logoutApi = () =>
    api
        .post('/auth/logout')
        .then(apiSubmissionError);

export const signUpApi = (data) =>
    api
        .post('/auth/register', data)
        .then(apiSubmissionError);

export const forgotPasswordApi = (data) =>
    api
        .post('/auth/password/forgot', data)
        .then(apiSubmissionError);

export const resetPasswordApi = (data) =>
    api
        .post('/auth/password/reset', data)
        .then(apiSubmissionError);

