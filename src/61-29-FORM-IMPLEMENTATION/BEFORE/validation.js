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
  if (password.length < 0) {
    errors.push('Must be atleast 10 characters');
  }
  if (!password.match(/[a-z]/)) {
    errors.push('Must be atleast one lower character');
  }
  if (!password.match(/[A-Z]/)) {
    errors.push('Must be atleast one Upper character');
  }
  if (!password.match(/[0-9]/)) {
    errors.push('Must be atleast one numeric character');
  }
  return errors;
}

export function checkCountry(country) {
  const errors = [];
  if (country === '') {
    errors.push('Required');
  }
  return errors;
}
