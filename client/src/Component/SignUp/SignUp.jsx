// import React,{ useState } from 'react';
// import "./SignUp.css";
// import { Link, useNavigate } from 'react-router-dom';

// const SignUp = () => {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//       firstName:"",
//       lastName:"",
//       email:"",
//       password:""

//   });


//   const InputEvent = (event) => {

//     const { name, value } = event.target;

//     setFormData ((preVal) => {
//         return {
//             ...preVal,
//             [name]: value
//         };
      
//     });

// };


//   const formSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

   
//     navigate("/signin");

//   }

//   return (

//     <>

//       <div className='signupPage  blue-gradient '>

  

//       <div className="containers right-panel-active" id="container">
//           <div className="form-containers sign-up-containers">

//               <form className='formS' onSubmit={formSubmit}>

//                   <h1>Create Account</h1>
                  
//                   <span className='formsSpan' >or use your email for registration</span>

//                   <input 
//                       type="text" 
//                       name='firstName'
//                       placeholder="FirstName" 
//                       value={formData.firstName}
//                       onChange={InputEvent}
//                       required
//                   />

//                   <input 
//                       type="text" 
//                       name='lastName'
//                       placeholder="LastName" 
//                       value={formData.lastName}
//                       onChange={InputEvent}
//                       required
//                   />

//                   <input 
//                       type="email" 
//                       name='email'
//                       placeholder="Email" 
//                       value={formData.email}
//                       onChange={InputEvent}
//                       required
//                   />

//                   <input 
//                       type="password" 
//                       name='password'
//                       placeholder="Password" 
//                       value={formData.password}
//                       onChange={InputEvent}
//                       required
//                   />

//                   <button className='buttons' type='submit'>Sign Up</button>

//               </form>

//           </div>

//           <div className="overlay-containers">
//               <div className="overlays">
//                   <div className="overlay-panels overlay-lefts">
//                       <h1>Welcome Back!</h1>
//                       <p>To keep connected with us please login with your personal info</p>
//                       <Link to={'/signin'}><button className="buttons ghost" id="signIn">Sign In</button></Link>
//                   </div>
                  
//               </div>
//           </div>
//       </div>
//       </div>
     
//     </>
//   )
// }

// export default SignUp;








//24 use hook form


import React  from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {

//   const navigate = useNavigate();

  const {  register, handleSubmit, getValues, watch, formState:{errors} } = useForm();

//   const formData = data => console.log(data);

//   console.log(watch("fName"));



const signupData = (data) => {
    
    console.log(data);

}
//   const [formData, setFormData] = useState({
     
//       fname:"",
//       email:"",
//       password:"",
//       confirmPassword:""


//   });


//   const [errors, setErrors] = useState({});


//    const validate  = (event, name, value) => {

//     switch (name) {
//         case 'fname':
            
//             break;
    
//         default:
//             break;
//     }


//    }


//   const InputEvent = (event) => {

//     const { name, value } = event.target;

//     // validate(event, name, value);

//     setFormData ((preVal) => {
//         return {
//             ...preVal,
//             [name]: value
//         };
      
//     });

// };


//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         navigate("/signin");

//   }

  return (

    <>

        <div className='signupPage  blue-gradient '>
    
            <div className="containers right-panel-active" id="container">

                <div className="form-containers sign-up-containers">

                    <form className='formS' onSubmit={handleSubmit(signupData)}>

                        <h1 className='headingO'>Create Account</h1>
                        
                        <span className='formsSpan' >or use your email for registration</span>

                        <input 
                            type="text" 
                            {...register("name", {required: true, minLength:3, maxLength: 20})}
                            name='name'
                            placeholder="Name" 
                            // value={formData.fname}
                            // onChange={InputEvent}
                            // required
                        />
                        {errors.name?.type=== "required" && <p>Name is required</p> }
                        {errors.name?.type=== "minLength" && <p>Name should have minimum 3 character</p>  }
                        {errors.name?.type=== "maxLength" && <p>Name should have maximum 20 character</p> }



                        {/* message: "Entered value does not match email format" */}

                        <input 
                            type="email" 
                            // {...register("email", {required:true,pattern: {value: /\S+@\S+\.\S+/}  })}
                            {...register("email", {required:true,pattern: {value: /\S+@\S+\.\S+/}  })}
                            name='email'
                            placeholder="Email" 
                            // value={formData.email}
                            // onChange={InputEvent}
                            // required
                        />
                          {errors.email?.type=== "required" && <p>Email is required</p> }
                          {errors.email?.type=== "pattern" && <p>Invalid email format</p> }

                        <input 
                            type="password" 
                            {...register("password", {required:true ,minLength:6, })}
                            name='password'
                            placeholder="Password" 
                            // value={formData.password}
                            // onChange={InputEvent}
                            // required
                        />
                          {errors.password?.type=== "required" && <p>Password is required</p> }
                          {errors.password?.type=== "minLength" && <p>Password sholud have minimun 6 characters</p> }
                          
{/* 
                          validate: (val: string) => {
    if (watch('password') != val) {
      return "Your passwords do no match";
    }
  }, */}



                        <input 
                            type="password" 
                            {...register("confirmPassword", 
                                {
                                    required:true ,
                                    validate: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }

                                }
                            )}
                            name='confirmPassword'
                            placeholder="Confirm Password" 
                            // value={formData.confirmPassword}
                            // onChange={InputEvent}
                            // required
                        />
                          {errors.confirmPassword?.type=== "required" && <p>Confirm Password is required</p> }
                          {/* {errors.confirmPassword?.type=== "ers" && <p>Passwords should match!</p> } */}

                          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

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