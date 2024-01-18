import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Signin() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const token = {
      email: values.email,
      password: values.password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    };
    const response = await fetch(
      `${BASE_URL}/auth/clientlogin`,
      requestOptions
    );
    const data = await response.json();
    sessionStorage.setItem("token", JSON.stringify(data));

    if (data.success === true) {
      window.location = "/";
    } else {
      alert("Invalid Email Or Password");
    }

    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    setSubmitting(false);
  };
  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <>
      <div className="inner-banner">
        <Container>
          <h1 className="ib-title">Login</h1>
          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active-page">Login</li>
          </ul>
        </Container>
      </div>
      <Container>
      <div className="login-form pt-5 pb-5">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="formCenter">
              <form className="formFields" onSubmit={handleSubmit}>
                <div className="formField">
                  <label className="formFieldLabel " htmlFor="email">
                    E-Mail Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    //   onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.email}
                    className="formFieldInput"
                    placeholder="Enter your email"
                    value={email}
                    //   onChange={handleEmail}
                    onChange={(e) => {
                      handleChange(e);
                      handleEmail(e);
                    }}
                  />
                  {errors.email && touched.email && (
                    <div className="errorMessage">{errors.email}</div>
                  )}
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Password
                  </label>

                  <div className="password-input-width  ">
                    <input
                      // onChange={handlePassword}
                      onChange={(e) => {
                        handleChange(e);
                        handlePassword(e);
                      }}
                      value={password}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="formFieldInput  "
                      //    onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your Password"
                      //  value={values.password}
                    />

                    <button
                      type="button"
                      className="btn btn-primary btn-sm password-eye-btn"
                      onClick={(e) => togglePassword(e)}
                    >
                      <Icon
                        className="icon-button"
                        icon="typcn:eye"
                        color="black"
                        onClick={(e) => togglePassword(e)}
                      />
                    </button>
                  </div>
                  <div>
                    {/* {errors.password && touched.password && (
                      <div className="errorMessage">{errors.password}</div>
                    )} */}
                  </div>

                  <div className="mt-1 d-flex justify-content-end">
                    {/* <a
                      href="/generateotp"
                      target="_blank"
                      className="forget-password-link "
                    >
                      Forget password?{" "}
                    </a> */}
                    <Link to="/generateotp" className="forget-password-link ">
                      Forget password?
                    </Link>
                  </div>
                </div>
                <div class="d-flex flex-column mb-3 ">
                  <button
                    className="formFieldButton theme_btn w-100"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>{" "}
                  <a
                    href="/sign-up"
                    target="_blank"
                    className="formFieldButton login-btn-form login-btn-css text-center "
                    rel="noopener noreferrer"
                  >
                    Create an account
                  </a>
                </div>
              </form>
            </div>
          )}
        </Formik>
        {/* <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="link" className="theme_btn" type="submit">
                  Login
                </Button>
              </Form>
              <div className="or-option">
                <span>-- OR --</span>
                <p>
                  Click here to <Link to="/register">Create Your Account</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container> */}
      </div>
      </Container>
    </>
  );
}
