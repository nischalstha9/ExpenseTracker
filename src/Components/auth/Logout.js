import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { log_out, insert_user, remove_books } from "../../action";
import axiosInstance from "../../AxiosInstance";
import { Link } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.post("auth/logout/").then((resp) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      dispatch(log_out());
      dispatch(insert_user({}));
      dispatch(remove_books());
    });
  }, []);

  return (
    <div
      className="white-container"
      style={{ padding: "2vh 5vw", margin: "2vh" }}
    >
      <h1>You are Logged Out!</h1>
      <hr />
      <Link to="/login">Log in again?</Link>
    </div>
  );
};

export default Logout;
