import React from "react";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const handlefun = (e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const formData ={
      email : email,
      password : password
    }
    axios
    .post("http://localhost:4000/backend/users",formData)
    .then((res)=>{
      console.log("running successfully:res=",res.data);
    })
    .catch((err)=>{
      console.log(`error is detected`,err);
    })
    navigate("/");
  }
  return (
    <div className="box">
      <div className="login-card">
        <h2><CgProfile />Login</h2>
        <form onSubmit={handlefun}>
          <div className="input-group">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" placeholder="Enter your email" required/>
          </div>
          <br/>
          <div className="input-group">
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" placeholder="Enter your password" required/>
          </div>
          <br/>
          <button type="submit" className="login-button" >Login</button>
          <br/>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
