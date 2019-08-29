import {SubmissionError} from 'redux-form'

export default response => {
        if (!(response && [200, 201].includes(response.status))) {
                throw new SubmissionError;
        }
        return Promise.resolve(response);


}
