import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Login from "../../pages/auth/login";
// import Register from "../../pages/auth/register";
import signInImage from "../../assests/images/signinimage.jpg";

const AuthLayout = () => {
  return (
    <>
      <div className="loginImage ">
        <div className="row col-12 align-items-center min-vh-100">
          <div className="col-6 text-center">
            <div className="container ">
              <img src={signInImage} alt="" />
            </div>
          </div>

          <div className="col-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
