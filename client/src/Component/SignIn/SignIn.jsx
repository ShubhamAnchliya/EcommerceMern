// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./SignIn.css";

// const SignIn = () => {

//   // const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email:"",
//     password:""
//   })


//   const InputEvent = (event) => {

//     const { name, value } = event.target;

//     setFormData((preVal) => {

//       return {
//         ...preVal,
//         [name]: value,
//       };

//     });

//   };


//   const formSubmit = (e) => {

//     e.preventDefault();
//     console.log(formData);
    

//   }



//   return (

//     <>

// <div className='logInPage'>

//   <div className="container" id="container">
//     <div className="form-container sign-in-container">
//       <form className='formL'  onSubmit={formSubmit} >
//         <h1>Sign in</h1>
        
//         <span className='formLSpan'>or use your account</span>
//         <input 
//           type="email" 
//           name='email'
//           placeholder="Email" 
//           value={formData.email}
//           onChange={InputEvent}
//           required

//         />
//         <input 
//           type="password" 
//           name='password'
//           placeholder="Password" 
//           value={formData.password}
//           onChange={InputEvent}
//           required
//         />


//         <button className='buttonL' type='submit'>Sign In</button>

//       </form>
//     </div>

//     <div className="overlay-container">
//       <div className="overlay">
//         <div className="overlay-panel overlay-right">
//           <h1>Hello, Friend!</h1>
//           <p>Enter your personal details and start journey with us</p>
//           <Link to={'/signup'} ><button className="buttonL ghost" id="signUp">Sign Up</button></Link>
//         </div>
//       </div>
//     </div>
    
//   </div>

   
          
// </div>

//     </>
//   )
// }

// export default SignIn;








// 27 useHookForm

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignIn.css";

const SignIn = () => {

  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })


  const InputEvent = (event) => {

    const { name, value } = event.target;

    setFormData((preVal) => {

      return {
        ...preVal,
        [name]: value,
      };

    });

  };


  const formSubmit = (e) => {

    e.preventDefault();
    console.log(formData);
    

  }



  return (

    <>

<div className='logInPage'>

  <div className="container" id="container">
    <div className="form-container sign-in-container">
      <form className='formL'  onSubmit={formSubmit} >
        <h1>Sign in</h1>
        
        <span className='formLSpan'>or use your account</span>
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


        <button className='buttonL' type='submit'>Sign In</button>

      </form>
    </div>

    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <Link to={'/signup'} ><button className="buttonL ghost" id="signUp">Sign Up</button></Link>
        </div>
      </div>
    </div>
    
  </div>

   
          
</div>

    </>
  )
}

export default SignIn;