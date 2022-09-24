import React from "react";
import Header from "../header/header";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signin.css";
import Copyright from "../copyright/copyright";
import Referral from "../referral/referral";
// import { useNavigate } from "react-router-dom";

import Footer from "../footer/footer";

function Signin() {
  // const [data, setData] = useState({ email: "", password: "" });
  const [data, setData] = useState({ emailphone: "", password: "" });
  const [error, setError] = useState("");
  //   const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";

      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data[1]);
      localStorage.setItem("name", res.data[0]);
      localStorage.setItem("address", res.data[2]);

      localStorage.setItem("isLoggedIn", true)
      console.log("isLoggedIn")
      // console.log("hi", res.data);
      console.log(res.data[1])
      window.location = "/";
    } catch (error) {
      if (
        error.response
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="section-1">
          <div className="laundrytext">
            <h1>
              Laundry <br />
              Service
            </h1>
          </div>
          <div className="doortext">
            <h5>Doorstep Wash & DryClean Service</h5>
          </div>
          <div className="donotaccounttext">
            <h6>Don't Have An Account</h6>
          </div>
          <div>
            <Link to="/register">
              <button type="button" className="registerbtn">Register</button>
            </Link>
          </div>
        </div>
        <div className="section-2">
          <div className="sign-heading-text-div">
            <h4 className="sign-heading-text">SIGN IN</h4>
          </div>

          <div className="form-div">
            <div className="form-div-2">
              <form onSubmit={handleSubmit}>
                <input
                  className="box-input-field-2"
                  placeholder="Mobile / Email"
                  type="text"
                  value={data.emailphone}
                  name="emailphone"
                  onChange={handleChange}
                  required
                />
                {error && <div className={"errmsg"}>{error}</div>}
                <input
                  className="box-input-field-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
                <img src="./images/padlock.svg" className="padlock" alt="" />
                <div className="forget-password-text">Forget Password?</div>
                <button type="submit" className="signin-btn">
                  Sign In
                </button>
              </form>
            </div>
          </div>





        </div>

      </div>
      <Referral />
      <Footer />
      <Copyright />
    </>
  );
}

export default Signin;