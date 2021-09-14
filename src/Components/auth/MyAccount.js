import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const MyAccount = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  return (
    <div className="container mt-3">
      <h1>Profile</h1>
      <hr />
      <h4>Username:</h4>
      <h5>{user.username}</h5>
      <h4>Email:</h4>
      <h5>{user.email}</h5>
      <Button
        variant="outlined"
        color="secondary"
        className="btn btn-outline-warning"
        onClick={() => history.push("/change-password")}
      >
        Change Password
      </Button>
    </div>
  );
};

export default MyAccount;
