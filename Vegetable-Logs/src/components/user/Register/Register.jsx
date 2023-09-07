import React,{useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { registerschema } from "../Registerschema/Registerschema";
import "./register.css"
import userService from "../../../services/user-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerimg from "../../../assets/loginimg.avif";


const Register = () => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const navigate = useNavigate()
    const showToastMessage =(msg) => {
      // console.log("called ",msg)
      if(msg === "success"){
        toast.success('REGISTERED SUCCESSFULLY !', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
            pauseOnHover: false,
        });
      }
      else{
        toast.warning(msg, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
            pauseOnHover: false,
        });
      }
      };
    const initialValues = {
        username: "",
        phone:"",
        email: "",
        address:"",
        password: "",
        confirm_password: "",
        seller:false
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerschema,
      onSubmit:async (values, action) => {
        console.log(values);
        const data={
          username: values.username,
          phone:''+values.phone,
          email: values.email,
          address: values.address,
          password1: values.password,
          password2: values.confirm_password,
          seller:values.seller ? true : false
        }
        console.log(data)
        userService.register(data)
        .then(async (res) => {
          console.log(res);
          showToastMessage("success");
          await delay(2000); 
          navigate("/login")
        })
        .catch((err) => {
          console.log("err: ", err.response.data);
          showToastMessage(err.response.data);
        })
        action.resetForm();
      },
    });
  return (
    <>
    <ToastContainer/>
    <div className="maindiv">
          <div className="model">
            <div className="model-container">
              <div className="model-left">
                <h1 className="model-title">Registration Form</h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="username" className="input-label">
                      Username
                    </label>
                    <input
                      type="name"
                      // autoComplete="off"
                      name="username"
                      id="username"
                      placeholder="Name"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error">{errors.username}</p>
                    ) : null}
                  </div>
                 <div className="input-block">
                    <label htmlFor="phone" className="input-label">
                      Phone
                    </label>
                    <input
                      type="number" 
                      // autoComplete="off"
                      name="phone"
                      id="phone"
                      placeholder="Phone" 
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      // autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="address" className="input-label">
                      Address
                    </label>
                    <input
                      type="text"
                      // autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
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
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="model-buttons">
                    <div>
                   <input type="checkbox" name="seller" id="seller" 
                       value={values.seller}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                   <label htmlFor="">Register as seller</label>
                   </div>
                    
                  </div>
                  <div className="model-buttons">
                  <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
              <div className="model-right">
                <img
                  src={registerimg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register