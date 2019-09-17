export default (error) => {

    const path = error && error.path && error.path[0];
    const message = error && error.message;

    return {
        [path]: message,
        _error: message
    }
}