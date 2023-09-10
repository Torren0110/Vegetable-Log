import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { useFormik } from "formik";
import { loginschema } from "../LoginSchema/Loginschema";
import { ShopContext } from "../../../context/shop-context";
import userService from "../../../services/user-service";
import { saveToken } from "../../../services/user-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimg from "../../../assets/loginimg.avif";
   
const Login = () => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const navigate = useNavigate()
    const { setUid } = useContext(ShopContext);

    const showToastMessage =(msg) => {
      // console.log("called ",msg)
      if(msg === "success"){
        toast.success('LOGIN SUCCESSFUL !', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            pauseOnHover: false,
        });
      }
      else if(msg === "failed"){
        toast.warning('Incorrect UserName or Password !', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            pauseOnHover: false,
        });
      }
      };

    const initialValues = {
        username: "",
        password: "",
        check:"",
      };
    
      const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues,
          validationSchema: loginschema,
          validateOnChange: true,
          validateOnBlur: false,
          onSubmit: (values, action) => {
            // console.log( values);
          userService.logIn(values)
        .then(async (res) => {
          // console.log(res.data);
          setUid(res.data);
          if(values.check === true){
          saveToken({"uid": res.data});}
          showToastMessage("success");
          await delay(3000); 
          navigate("/")
        })
        .catch((err) => {
          console.log("err ", err.response.data);
          showToastMessage("failed");
        });
        action.resetForm();
      },
    });

  return (
    <div className="login-form">
        <ToastContainer/>
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
                      <input type="checkbox" name="check" id="check"
                      value={values.check}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                      <label htmlFor="check">Remember me</label>
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
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              
              </div>
              <div className="model-rightt">
                <img
                  src={loginimg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login