import React,{ useState } from 'react';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""

  });


  const InputEvent = (event) => {

    const { name, value } = event.target;

    setFormData ((preVal) => {
        return {
            ...preVal,
            [name]: value
        };
      
    });

};


  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

   
    navigate("/signin");

  }

  return (

    <>

      <div className='signupPage  blue-gradient '>

  

      <div className="containers right-panel-active" id="container">
          <div className="form-containers sign-up-containers">

              <form className='formS' onSubmit={formSubmit}>

                  <h1>Create Account</h1>
                  
                  <span className='formsSpan' >or use your email for registration</span>

                  <input 
                      type="text" 
                      name='firstName'
                      placeholder="FirstName" 
                      value={formData.firstName}
                      onChange={InputEvent}
                      required
                  />

                  <input 
                      type="text" 
                      name='lastName'
                      placeholder="LastName" 
                      value={formData.lastName}
                      onChange={InputEvent}
                      required
                  />

                  <input 
                      type="email" 
                      name='email'
                      placeholder="Email" 
                      value={formData.email}
                      onChange={InputEvent}
                      required
                  />

                  <input 
                      type="password" 
                      name='password'
                      placeholder="Password" 
                      value={formData.password}
                      onChange={InputEvent}
                      required
                  />

                  <button className='buttons' type='submit'>Sign Up</button>

              </form>

          </div>

          <div className="overlay-containers">
              <div className="overlays">
                  <div className="overlay-panels overlay-lefts">
                      <h1>Welcome Back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                      <Link to={'/signin'}><button className="buttons ghost" id="signIn">Sign In</button></Link>
                  </div>
                  
              </div>
          </div>
      </div>
      </div>
     
    </>
  )
}

export default SignUp;