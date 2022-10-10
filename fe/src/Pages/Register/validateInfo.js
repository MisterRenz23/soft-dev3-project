export default function validateInfo(values, response) {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'First Name Required';
  }

  if (!values.middle_name) {
    errors.middle_name = 'Middle Name Required';
  }

  if (!values.last_name) {
    errors.last_name = 'Last Name Required';
  }

  if (!values.address) {
    errors.address = 'Address Required';
  }

  if (!values.sex) {
    errors.sex = 'Sex Required';
  }

  if (!values.contact_number) {
    errors.contact_number = 'Phone Number Required';
  }

  if (!values.username) {
    errors.username = 'Username Required';
  }

  if (!values.startDate) {
    errors.startDate = 'Birthdate Required';
  }

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirm_password) {
    errors.confirm_password = 'Confirm Password is Required';
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = 'Confirm Passworrd is not matched';
  }

  if (response.email === 'A user with that email already exists.') {
    errors.email = 'A user with that email already exists.';
  }

  if (response.username === 'A user with that username already exists.') {
    errors.username = 'A user with that username already exists.';
  }

  if (response.contact_number === 'Phone Number Required') {
    errors.contact_number = 'Phone Number Required';
  }

  return errors;
}
