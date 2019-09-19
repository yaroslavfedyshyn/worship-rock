export const toString = (inp) => {
  if (typeof inp === 'undefined' || inp === null) {
    return '';
  }
  if (typeof inp !== 'string') {
    return inp.toString();
  }
  return inp;
};

export const isNameLengthCorrect = (_name) => {
  const name = toString(_name);

  const re = /^.{2,30}$/;
  return re.test(name);
};

export const isEmailCorrect = (_email) => {
  const email = toString(_email);
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isPasswordLengthCorrect = (_password) => {
  const password = toString(_password);

  const re = /^.{6,30}$/;
  return re.test(password);
};
