import React from 'react'
import React, { useState } from "react";
// import axios from "axios"; 
import "./signUp.css";

const Signup = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email:"",
    phone_number: "",
    password:"",
     userName:""
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSignup = async (e) => {
             e.preventDefault();
               setError(null)
               fetch("http://localhost:8080/api/v1/register", {
                method:"POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(formData)
               })
               console.log(formData)
              //   try {
              //    const response = await axios.post("http://localhost:8080/api/v1/register",formData )
              //    console.log(response.formData)
              //  }catch(error){
              //    setError("An error just occured")
              //    console.log(error)
              //   }    
      }

  return (
    <div className="page-container">
      <div className="page-contain"></div>
      <div id="form-class">
        <form onSubmit={handleSignup}>
          <h1>SIGN UP</h1>
          <div className="hoo">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <input
              type="username"
              name="username"
              placeholder="username"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="role-ad">
            <select name="roleType" value={formData.roleType} onChange={handleChange}>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
          </div>
          <div className="hoo">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="hoo">
            <button className="btn" type="submit">
              Sign Up
            </button>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
};

export default Signup;


export default SignUp
