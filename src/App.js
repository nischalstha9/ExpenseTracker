import React, { useEffect, useState } from "react";
// import Register from "./Components/auth/register";
import Login from "./Components/auth/Login";
// import Logout from "./Components/auth/logout";
import ProtectedRoute from "./Components/Routes/privateRoute";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log_in } from "./action";
import { insert_user } from "./action";
import AccountBooks from "./Components/AccountBooks";
import AddAccount from "./Components/AddAccount";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Book from "./Components/Book";
// import "bootstrap/dist/css/bootstrap.min.css";

const token = localStorage.getItem("access_token");
const user = localStorage.getItem("username");

function App() {
  const dispatch = useDispatch();
  if (token) {
    dispatch(log_in());
    dispatch(insert_user(user));
  }
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/logout" component={Logout} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/forget-password" component={ForgetPassword} /> */}
          {/* <Route path="/register" component={Register} /> */}
          <ProtectedRoute exact path="/accounts" component={AccountBooks} />
          <ProtectedRoute exact path="/accounts/new" component={AddAccount} />
          <ProtectedRoute path="/accounts/:account_id" component={Book} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
