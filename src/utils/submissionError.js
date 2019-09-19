import { SubmissionError } from 'redux-form';
import parseError from './parseError';

export default (_error) => {
  if (_error) {
    const error = parseError(_error);

    throw new SubmissionError(error);
  }
};
