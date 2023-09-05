import React,{useContext, useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { registerschema } from "../user/Registerschema/Registerschema";
import "../user/Register/register.css"
import userService from "../../services/user-service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from "../../context/shop-context";
import Logo from '../../assets/logo.jpeg'
import * as Yup from "yup";

const Register = () => {

    const { uid, user }  = useContext(ShopContext)

    if(uid === '') return <h1>Login First!!!</h1>

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const navigate = useNavigate()
    const showToastMessage =(msg) => {
      // console.log("called ",msg)
      if(msg === "success"){
        toast.success('UPDATED SUCCESSFULLY !', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
            pauseOnHover: false,
            hideProgressBar: true,
          });
        }
        else{
          toast.warning(msg, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
            pauseOnHover: false,
            hideProgressBar: true,
        });
      }
      };

    const { errors, touched, handleSubmit, getFieldProps } =
    useFormik({
      initialValues: {
        username:user.username || "",
        phone:user.phone || "",
        email:user.email || "",
        address:user.address || "",
      },
      enableReinitialize: true,
      validationSchema: Yup.object({
        username: Yup
          .string()
          .required('Username is required')
          .min(5, 'Username must be at least 5 characters')
          .max(20, 'Username must be at most 20 characters')
          .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
        phone: Yup.number()
        .typeError("Phone must be a number")
        .integer("Phone must be an integer")
        .min(1000000000, "Phone number must have at least 10 digits")
        .max(9999999999, "Phone number can have at most 10 digits")
        .required("Please enter your phone"),
        email: Yup.string().email().required("Please enter your email"),
      }),
      onSubmit:(values) => {
        console.log("object passed: ",values);
        userService.update(user._id,values)
      .then((res) => {
        console.log("success: ",res.data);
        showToastMessage("success");
      })
      .catch((err) => {
        console.log("err", err.response.data);
        showToastMessage(err.response.data);
      })
      },
    });


  
  return (
    <>
    <ToastContainer/>
    <div className="maindiv">
          <div className="model">
            <div className="model-container">
              <div className="model-left">
                <h1 className="model-title">User Profile</h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="username" className="input-label">
                      Username
                    </label>
                    <input
                      name='username'
                      {...getFieldProps('username')}
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
                      name="phone"
                      {...getFieldProps('phone')}
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
                      name="email"
                      {...getFieldProps('email')}
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
                      name="address"
                      {...getFieldProps('address')}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
                  </div>
                  
                  <div className="model-buttons">
                  <button className="input-button" type="submit">
                      Update
                    </button>
                    
                  </div>
                </form>
              </div>
              <div className="model-right">
                <img
                  src={Logo}
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