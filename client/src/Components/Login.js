import React, { useState } from "react";
import "./Styles.css";

export default function Login() {
  let [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  // Show password toggler handler
  const toggleShown = () => {
    // Change state of password boolean
    setShowPassword(!showPassword);
  };

  // Login toggler handler
  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  if (authMode === "login") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form m-3 mt-4">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <a className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </a>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>

            <div className="">
              <label>Password</label>
              <div className="input-group" role="group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={toggleShown}
                  >
                    {showPassword === false ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Signup-form-container">
      <form className="Signup-form">
        <div className="Signup-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <a className="link-primary" onClick={changeAuthMode}>
              Sign In
            </a>
          </div>
          <div className="row">
            <div className="col-sm form-group mt-3">
              <label>First Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g John"
              />
            </div>
            <div className="col-sm form-group mt-3">
              <label>Last Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Doe"
              />
            </div>
          </div>

          <div className=" form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className=" form-group mt-3">
            <label>Confirm Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Confirm Email Address"
            />
          </div>

          <div className="row">
            <div className="col-sm form-group mt-3">
              <label>Password</label>
              <div className="input-group" role="group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={toggleShown}
                  >
                    {showPassword === false ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm form-group mt-3">
              <label>Confirm Password</label>
              <div className="input-group" role="group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm password"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={toggleShown}
                  >
                    {showPassword === false ? (
                      <i className="bi bi-eye"></i>
                    ) : (
                      <i className="bi bi-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
