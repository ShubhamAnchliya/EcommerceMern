import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />}  />

        <Route path="/home" element={<Home />}  />

        <Route path="/signin" element={<SignIn />}  />

        <Route path="/signup" element={<SignUp />}  />

        <Route path="/about" element={<About />}  />

        <Route path="/contact" element={<Contact />}  />

        <Route path="/profile" element={<Profile />}  />

        <Route path='*' element={<ErrorPage/>} />


      </Routes>
    </>
  )
}

export default App;