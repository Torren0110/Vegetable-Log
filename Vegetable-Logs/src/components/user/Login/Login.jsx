import React from "react";
import "./login.css"
import { useFormik } from "formik";
import { loginschema } from "../LoginSchema/Loginschema";
import {Link} from "react-router-dom";

   
const Login = () => {
    const initialValues = {
        username: "",
        password: "",
      };
    
      const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues,
          validationSchema: loginschema,
          validateOnChange: true,
          validateOnBlur: false,
          onSubmit: (values, action) => {
            console.log( values);
            action.resetForm();
          },
        });
  return (
    <>
        <div className="continer">
          <div className="model">
            <div className="model-container">
              <div className="model-left">
                <h1 className="model-title">Login Form</h1>
                
                <form onSubmit={handleSubmit}>
                 
                  <div className="input-block">
                    <label htmlFor="username" className="input-label">
                      Username
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="username"
                      id="username"
                      placeholder="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error">{errors.username}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                 
                  <div className="model-item">
                    <a href="#" className="">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Remember me</label>
                       </a>
                    <a href="" className="forgot">Forgot Password?</a>
                  </div>
                  <div className="model-button">
                       <button className="input-button" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Don't have an account?  <Link to="/register">Register</Link>  
                </p>
              
              </div>
              <div className="model-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login