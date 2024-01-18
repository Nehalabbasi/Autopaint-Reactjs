import React, { useState } from "react";
import Form from "pages/utilities/Forms";
import Fade from "react-reveal/Fade";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";

export default function SignUp() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [client_name, setclient_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [secondary_email, setSecondary_email] = useState("");
  const [country, setCountry] = useState("");
  const [mobile_phone, setMobile_phone] = useState("");
  const [address, setAddress] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      client_name: {
        value: client_name,
        isRequired: true,
      },
      last_name: {
        value: last_name,
        isRequired: true,
      },

      zip: {
        value: zip,
        isRequired: true,
      },
      companyname: {
        value: companyname,
        isRequired: true,
      },
      address: {
        value: address,
        isRequired: true,
      },
      state: {
        value: state,
        isRequired: true,
      },
      country: {
        value: country,
        isRequired: true,
      },
      mobile_phone: {
        value: mobile_phone,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 8,
      },
      secondary_email: {
        value: secondary_email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setclient_name("");
      setLast_name("");
      setCompanyname("");
      setZip("");
      setState("");
      setCountry("");
      setAddress("");
      setMobile_phone("");
      setEmail("");
      setPassword("");

      const data = {
        client_name,
        last_name,
        email,
        secondary_email,
        password,
        country,
        mobile_phone,
        state,
        zip,
        address,
        companyname,
        generate_code: Math.floor(Math.random() * 100000).toString(),
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      fetch(`${BASE_URL}/client/register`, requestOptions)
        .then((response) => response.json())

        .then((response) => {
          // console.log(response.data);

          alert(JSON.stringify(response.data));
        });
    }
  };

  return (
    <div>
      {" "}
      <div className="inner-banner">
        <Container>
          <h1 className="ib-title">Sign Up</h1>
          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active-page">Sign Up</li>
          </ul>
        </Container>
      </div>

      <section id="contact" className="contact">
        <div className="container">
          <div className=" ct_signup row d-flex justify-content-center col-lg-12 ">
            <Fade bottom>
              <div className="signFormmain col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch ">
                <form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row col-lg-12">
                    <div className="form-group col-lg-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.client_name
                            ? "is-invalid "
                            : ""
                        }`}
                        id="client_name"
                        name="client_name"
                        value={client_name}
                        placeholder="First Name"
                        onChange={(e) => setclient_name(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.client_name
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.client_name
                          ? validate.validate.client_name[0]
                          : ""}
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.last_name
                            ? "is-invalid "
                            : ""
                        }`}
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        placeholder="Last Name"
                        onChange={(e) => setLast_name(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.last_name
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.last_name
                          ? validate.validate.last_name[0]
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="row col-lg-12">
                    <div className="form-group col-lg-6">
                      <label>Email</label>
                      <input
                        type="email"
                        className={`form-control ${
                          validate.validate && validate.validate.email
                            ? "is-invalid "
                            : ""
                        }`}
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.email
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.email
                          ? validate.validate.email[0]
                          : ""}
                      </div>
                    </div>

                    <div className="form-group col-lg-6">
                      <label>Secondary Email</label>
                      <input
                        type="email"
                        // className="form-control"
                        className={`form-control ${
                          validate.validate && validate.validate.email
                            ? "is-invalid "
                            : ""
                        }
                    
                    `}
                        id="secondary_email"
                        name="secondary_email"
                        value={secondary_email}
                        placeholder="Secondary Email"
                        onChange={(e) => setSecondary_email(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.secondary_email
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.secondary_email
                          ? validate.validate.secondary_email[0]
                          : ""}
                      </div>
                    </div>
                  </div>

                  <div className="row col-lg-12">
                    <div className="password mb-3 col-lg-6">
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${
                            validate.validate && validate.validate.password
                              ? "is-invalid "
                              : ""
                          }`}
                          name="password"
                          id="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <div
                          className={`invalid-feedback text-start ${
                            validate.validate && validate.validate.password
                              ? "d-block"
                              : "d-none"
                          }`}
                        >
                          {validate.validate && validate.validate.password
                            ? validate.validate.password[0]
                            : ""}
                        </div>
                      </div>
                    </div>
                    <div className="password mb-3 col-lg-6">
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control "
                          name="password"
                          id="password"
                          value={passwordAgain}
                          placeholder="Confirm Password"
                          onChange={(e) => setPasswordAgain(e.target.value)}
                        />
                      </div>
                    </div>
                    

                    <PasswordChecklist
                      rules={[
                        "minLength",
                        "specialChar",
                        "number",
                        "capital",
                        "match",
                      ]}
                      minLength={8}
                      value={password}
                      valueAgain={passwordAgain}
                      onChange={(isValid) => {}}
                    />
                  </div>


                  <div className="row col-lg-12">
                    <div className="form-group col-lg-6">
                      <label>Company Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.companyname
                            ? "is-invalid "
                            : ""
                        }`}
                        id="companyname"
                        name="companyname"
                        value={companyname}
                        placeholder="Company Name"
                        onChange={(e) => setCompanyname(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.companyname
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.companyname
                          ? validate.validate.companyname[0]
                          : ""}
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <label>Phone No</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.mobile_phone
                            ? "is-invalid "
                            : ""
                        }`}
                        id="mobile_phone"
                        name="mobile_phone"
                        value={mobile_phone}
                        placeholder="Phone No"
                        onChange={(e) => setMobile_phone(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.mobile_phone
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.mobile_phone
                          ? validate.validate.mobile_phone[0]
                          : ""}
                      </div>
                    </div>
                  </div>

                  <div className="row col-lg-12">
                    <div className="form-group col-lg-4">
                      <label>Country</label>

                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.country
                            ? "is-invalid "
                            : ""
                        }`}
                        id="country"
                        name="country"
                        value={country}
                        placeholder="Country"
                        onChange={(e) => setCountry(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.country
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.country
                          ? validate.validate.country[0]
                          : ""}
                      </div>
                    </div>
                    <div className="form-group col-lg-4">
                      <label>State</label>

                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.state
                            ? "is-invalid "
                            : ""
                        }`}
                        id="state"
                        name="state"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.state
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.state
                          ? validate.validate.state[0]
                          : ""}
                      </div>
                    </div>
                    <div className="form-group col-lg-4">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.zip
                            ? "is-invalid "
                            : ""
                        }`}
                        id="zip"
                        name="zip"
                        value={zip}
                        placeholder="Zip"
                        onChange={(e) => setZip(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.zip
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.zip
                          ? validate.validate.zip[0]
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Address</label>
                      <input
                        type="text"
                        className={`form-control ${
                          validate.validate && validate.validate.address
                            ? "is-invalid "
                            : ""
                        }`}
                        id="address"
                        name="address"
                        row={4}
                        value={address}
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.address
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.address
                          ? validate.validate.address[0]
                          : ""}
                      </div>
                    </div>
                  </div>
                  <br />
                  <Fade top>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="signupbtns theme_btn w-100"
                      >
                        Sign Up
                      </button>
                    </div>
                    <hr />
                    <div className="auth-option text-center pt-2">
                      Have an account?{" "}
                      <Link
                        className="text-link"
                        to="/sign-in"
                        style={{ color: "grey" }}
                      >
                        Sign in
                      </Link>
                    </div>
                  </Fade>

                  <br />
                  <br />
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
