import React from "react";
import { useDispatch } from "react-redux";
import { log_out } from "../../action";
import axiosInstance from "../../AxiosInstance";

const Logout = () => {
  const dispatch = useDispatch();
  axiosInstance.post("auth/logout/").then((resp) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    dispatch(log_out());
    window.location.path = "/";
  });
  return (
    <div
      className="white-container"
      style={{ padding: "2vh 5vw", margin: "2vh" }}
    >
      <h1>You are Logged Out!</h1>
    </div>
  );
};

export default Logout;
