import { useState } from "react";
import API from "../../API";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    address: "",
    birth_date: new Date(),
    contact_number: "",
    sex: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valuesFormData = {
      username: values.username,
      first_name: values.first_name,
      middle_name: values.middle_name,
      last_name: values.last_name,
      address: values.address,
      contact_number: values.contact_number,
      birth_date: values.startDate
        ? values.startDate.toLocaleDateString("en-CA")
        : "",
      sex: values.sex,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
    };

    API.post("/user/register", valuesFormData)
      .then((response) => {
        setRegisterSuccess(true);
      })
      .catch((error) => {
        setErrors(validate(values, error.response.data));
      });
  };

  return { handleChange, handleSubmit, registerSuccess, values, errors };
};

export default useForm;
