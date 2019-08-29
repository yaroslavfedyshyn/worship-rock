export const toString = (inp) => {
    if (typeof inp === 'undefined' || inp === null) {
        return ''
    }
    if (typeof inp !== 'string') {
        return inp.toString()
    }
    return inp
};

export const isNameLengthCorrect = name => {
    name = toString(name);

    const re = /^.{2,30}$/;
    return re.test(name);
};

export const isEmailCorrect = email => {
    email = toString(email);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const isPasswordLengthCorrect = password => {
    password = toString(password);

    const re = /^.{6,30}$/;
    return re.test(password);
};
