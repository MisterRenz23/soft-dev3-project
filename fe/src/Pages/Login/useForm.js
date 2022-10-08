import { useState } from 'react';
import API from '../../API';
import { useNavigate } from 'react-router-dom';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clickLogin = (e) => {
    e.preventDefault();
    const valuesFormData = {
      username: values.username,
      password: values.password,
    };

    API.post('/user/login', valuesFormData)
      .then((response) => {
        localStorage.setItem('token', `${response.data.token}`);
        localStorage.setItem('user_data', JSON.stringify(response.data.user));
        API.defaults.headers.Authorization = `${response.data.token}`;

        console.log(response.data.token);
        // window.location.reload();
        navigate('/home-user');
      })
      .catch((error) => {
        setErrors(validate(values, error.response.data));
        console.log(error.response.data);
      });
  };

  return { clickLogin, handleChange, values, errors };
};

export default useForm;
