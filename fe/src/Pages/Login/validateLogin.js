export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else {
    errors.password = 'Invalid Username or Password';
  }

  return errors;
}
