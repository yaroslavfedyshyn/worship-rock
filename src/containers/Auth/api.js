import api from '../../utils/api';
import apiSubmissionError from '../../utils/apiSubmissionError'

export const getMeApi = (data) =>
    api()
        .get('/auth/profile', data)
        .then(apiSubmissionError);

export const loginApi = (data) =>
    console.log('hello')
// api()
//     .post('/auth/login', data)
//     .then(apiSubmissionError);

export const logoutApi = () =>
    api()
        .post('/auth/logout')
        .then(apiSubmissionError);

export const signUpApi = (data) =>          console.log('SignUp...');
    // api()
    //     .post('/auth/register', data)
    //     .then(apiSubmissionError);

export const checkRegisterByTokenApi = (token) => api().get(`/auth/check-register-by-token?token=${token}`);

export const forgotPasswordApi = (data) => api()
    .post('/auth/forgot-password', data)
    .then(apiSubmissionError);

export const resetPasswordApi = (data) => api()
    .post('/auth/reset-password', data)
    .then(apiSubmissionError);

export const fetchDocumentByIdApi = (id) =>
    api()
        .get(`/sign-document/${id}`)
        .then(apiSubmissionError);

export const signDocumentApi = (id) =>
    api()
        .post(`/sign-document/${id}`)
        .then(apiSubmissionError);
