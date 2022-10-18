import axios from "axios";
import { routeApi } from "../constants/routePath";

export class userService {
  static userLogin = async (Email_Address, Password) => {
    return await axios
      .post(routeApi.signin,{
          Email_Address,
          Password,
        },
        {
          headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  };

  static userRegister = async (First_Name, Last_Name,Email_Address,Password,Mobile_Number,Industry) => {
    return await axios
      .post(routeApi.register,{
          First_Name,
          Last_Name,
          Email_Address,
          Password,
          Mobile_Number,
          Industry,
        },
        {
          headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  };
}
