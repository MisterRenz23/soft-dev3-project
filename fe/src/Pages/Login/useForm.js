import { useState } from "react";
import API from "../../API";
import { useNavigate } from "react-router-dom";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const clickLogin = (e) => {
    e.preventDefault();
    const valuesFormData = {
      username: values.username,
      password: values.password
    };


    API.post("/user/login", valuesFormData)
      .then((response) => {
        localStorage.setItem('token', `knox ${response.data.token}`);
        API.defaults.headers.Authorization = `knox ${response.data.token}`;
        console.log(response.data.token);
        // window.location.reload();
        navigate("/");
      })
      .catch((error) => {
        setErrors(validate(values, error.response.data));
        console.log(error.response.data);
      })
  };

  return { clickLogin, handleChange, values, errors };
};

export default useForm;
