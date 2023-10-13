
export const validateFomatPassword = (password) => {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(password);
};

export const validateFomatEmail = (email) => {
  return /^[^@]+@[^@]+\.[^@]{3,}$/.test(email);
};

export const valiDuplePass = (pass,rePass) => {
  return pass === rePass
};
export const validatePhone = (phone) => {
  return /^\d{10,}$/.test(phone);
};