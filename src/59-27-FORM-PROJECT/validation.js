export function checkEmail(email) {
  const errors = [];
  if (email.length === 0) {
    errors.push('Required');
  }
  if (!email.endsWith('@gmail.com')) {
    errors.push('Must end with @gmail.com');
  }
  return errors;
}

export function checkPassword(password) {
  const errors = [];
  if (password.length < 10) {
    errors.push('Must be at least 10 characters');
  }
  if (!password.match(/[a-z]/)) {
    errors.push('Must include atleast 1 lowerCase');
  }
  if (!password.match(/[A-Z]/)) {
    errors.push('Must be atleast one Upper case character');
  }
  if (!password.match(/[0-9]/)) {
    errors.push('Must be atleast 1 number');
  }
  return errors;
}
