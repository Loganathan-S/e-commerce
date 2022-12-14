import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/validationSchema";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../service/userService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { routePath } from "../../../constants/routePath";
import { Icon } from "@iconify/react";
import "../login/index.css";
import facebookLogo from "../../../assests/icons/facebook.png";
import twitterLogo from "../../../assests/icons/twitter.png";
import googleLogo from "../../../assests/icons/google.png";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [passwordType, setpasswordType] = useState("password");

  let navigateDashboard = useNavigate();

  let navigateRegister = useNavigate();

  const registerForm = () => {
    navigateRegister(routePath.auth.register);
  };

  const formSubmitHandler = (data) => {
    // console.log(data);
    userService.userLogin(data.email, data.password).then((res) => {
      console.log(res);
      navigateDashboard("/dashboard");
    });
  };

  const togglePassword = (e) => {
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="card shadow p-3">
              <div className="card-body">
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                  <h3 className="">Login</h3>
                  <div className="form-outline mt-2 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y ">
                      <Icon icon="bxs:user" />
                    </div>
                    <input
                      {...register("email")}
                      type="email"
                      name="email"
                      id="email"
                      className="form-control formControl"
                      placeholder="Email Address"
                    />
                  </div>
                  {errors.email ? (
                    <span className="text-danger fw-bold">
                      {errors.email.message}
                    </span>
                  ) : (
                    <></>
                  )}
                  <div className=" form-outline mt-3 position-relative">
                    <div
                      onClick={() => togglePassword()}
                      className="position-absolute top-50 end-0 translate-middle-y mx-2  "
                    >
                      {passwordType === "password" ? (
                        <FaEye className="fa_eye3" />
                      ) : (
                        <FaEyeSlash className="fa_eye" />
                      )}
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle-y ">
                      <Icon icon="ri:lock-password-fill" />
                    </div>
                    <input
                      {...register("password")}
                      type={passwordType}
                      name="password"
                      id="password"
                      className="form-control formControl"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password ? (
                    <span className="text-danger fw-bold ">
                      {errors.password.message}
                    </span>
                  ) : (
                    <></>
                  )}
                  <div className="text-end mt-3">
                    <a
                      className="text-decoration-none"
                      style={{ cursor: "pointer" }}
                    >
                      Forgot Password
                    </a>
                  </div>
                  <div className="mt-3 mb-3 text-center">
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        style={{ paddingRight: "40px", paddingLeft: "40px" }}
                      >
                        Login
                      </button>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span>Don't have an account</span>&nbsp;
                    <a
                      onClick={() => registerForm()}
                      className=""
                      style={{ cursor: "pointer" }}
                    >
                      create an account
                    </a>
                  </div>
                  <hr />
                  <div className="container mt-4 text-center">
                    <span style={{ fontSize: "13px" }} className="me-1">
                      {" "}
                      Or login with
                    </span>

                    <img
                      src={facebookLogo}
                      alt=""
                      width={25}
                      height={25}
                      className="me-1"
                      style={{ cursor: "pointer " }}
                      
                    />

                    <img
                      src={twitterLogo}
                      alt=""
                      width={27}
                      height={27}
                      className="me-1"
                      style={{ cursor: "pointer " }}
                    />

                    <img
                      src={googleLogo}
                      alt=""
                      width={25}
                      height={25}
                      className="me-1"
                      style={{ cursor: "pointer " }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
