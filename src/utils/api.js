import {create} from 'apisauce'

const api = () => {
    return create({
        baseURL: '',
        headers: {Accept: 'application/vnd.github.v3+json'},
    });
};

export default api;
