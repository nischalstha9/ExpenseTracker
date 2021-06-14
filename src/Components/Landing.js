import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Landing = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const history = useHistory();

  return <div></div>;
};

export default Landing;
