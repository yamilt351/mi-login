import React, { useState } from "react";
import './styles.css'
// import {signin,signup} from 
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword:"",
};
const Login = () => {
  const[formData, setFormData]=useState(initialState)
  const [isLogin, setIsLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
     if (isLogin) {
       dispatch(signup(formData,history))
     } else {
       dispatch(signin(formData,history))
     }
     console.log(formData)
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  };
    const switchMode = (e) => {
      setIsLogin((prevIsLogin) => !prevIsLogin)
      e.preventDefault();
    };
  
  return (
    <div className="container-form">
      <h2>{isLogin ? "Sign up" : "Sign in"}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {isLogin && (
          <>
            <input
              className="input"
              type="name"
              id="name"
              name="firstName"
              placeholder="Name"
              label="firstName"
              handleChange={handleChange}
              autoFocus
              required
            />
            <input
              className="input"
              type="name"
              id="name"
              name="lastName"
              placeholder="LastName"
              label="lastName"
              handleChange={handleChange}
              required
            />
          </>
        )}
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          label="email"
          autoFocus
          handleChange={handleChange}
          required
        />
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          label="password"
          handleChange={handleChange}
          required
        />
        {isLogin && (
          <input
            className="input"
            type="password"
            id="password"
            name="confirmPassword"
            placeholder="Repeat password"
            label="confirmPassword"
            handleChange={handleChange}
            required
          />
        )}
        <button type="submit" className="button" onClick={handleSubmit}>
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
        <button type="submit" className="button-account" onClick={switchMode}>
          {isLogin
            ? "Already have an account? Sign In!"
            : "Don't have an account? Sign Up!"}
        </button>
      </form>
    </div>
  );
};

export default Login;
