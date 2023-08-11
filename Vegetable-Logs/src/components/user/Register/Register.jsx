import React from "react";
import { useFormik } from "formik";
import { registerschema } from "../Registerschema/Registerschema";
import "./register.css"



const Register = () => {
    const initialValues = {
        username: "",
        phone:"",
        email: "",
        password: "",
        confirm_password: "",
      };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerschema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <>
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
                      autoComplete="off"
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
    autoComplete="off"
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
                      autoComplete="off"
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
                   <input type="checkbox" name="" id="" required/>
                   <label htmlFor="">I agree with terms and conditions</label>
                   </div>
                    
                  </div>
                  <div className="model-buttons">
                  <button className="input-button" type="submit">
                      Registration
                    </button>
                    
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Login</a>
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

export default Register