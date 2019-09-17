import parseError from "./parseError";
import {SubmissionError} from "redux-form";

export default (_error) => {
    if (_error) {
        const error = parseError(_error);

        throw new SubmissionError(error);
    }
}