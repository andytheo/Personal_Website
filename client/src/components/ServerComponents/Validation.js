const validateEmail = ({ email, setEmailError }) => {
  // RFC 5322 Official Standard Regex. Works 99.99%
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegex) ? setEmailError("Invalid Email") : setEmailError("");
};

const validateFullName = ({ fullName, setFullNameError }) => {
  const fullNameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
  return fullName && !fullName.match(fullNameRegex) ? setFullNameError("Invalid Name") : setFullNameError("");
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5 ? setMessageError("Message too short") : setMessageError("");
};

export { validateEmail, validateFullName, validateMessage };
