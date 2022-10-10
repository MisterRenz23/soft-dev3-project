import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import API from '../../API';
import { useNavigate } from "react-router-dom";
import NavbarUser from '../../components/NavbarUser/NavbarUser';

const EditProfile = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setfirstName] = useState("")
  const [lastname, setlastName] = useState("")
  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")





  // load students by its is and show data to forms by value

  let loadStudents = async () => {
    const result = await API.get(`user/profile/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })

    setlastName(result.data.last_name);
    setfirstName(result.data.first_name);
    setName(result.data.username);
    setEmail(result.data.email);
    setPhone(result.data.contact_number);
    setAddress(result.data.address);
  }


  // Update s single student by id

  const updateSingleStudent = async () => {
    let formField = new FormData()

    formField.append('first_name', firstname)
    formField.append('last_name', lastname)
    formField.append('username', username)
    formField.append('email', email)
    formField.append('address', address)
    formField.append('contact_number', phone)

    await API({
      method: 'PUT',
      url: `user/profile/${id}/`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      },
      data: formField
    }).then(response => {
      console.log(response.data);

      navigate(`/user-profile/${id}`);
    })

  }

  useEffect(() => {
    loadStudents();
  }, [])

  return (

    <div className="container">
      <NavbarUser />
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Profile</h2>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="First Name"
            name="first_name"
            value={firstname}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Last Name"
            name="last_name"
            value={lastname}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Phone Number"
            name="contact_number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your address Name"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button onClick={updateSingleStudent} className="btn btn-primary btn-block">Save</button>

      </div>
    </div>

  );
};



export default EditProfile;
