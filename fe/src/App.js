import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RegisterSuccess from './Pages/RegisterSuccess/RegisterSuccess';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Faqs from './Pages/Faqs/Faqs';
import Feedback from './Pages/Feedback/Feedback';
import Profile from './Pages/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route
          path="/register-success"
          exact
          element={<RegisterSuccess />}
        ></Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/services" exact element={<Services />}></Route>
        <Route path="/faqs" exact element={<Faqs />}></Route>
        <Route path="/feedback" exact element={<Feedback />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
