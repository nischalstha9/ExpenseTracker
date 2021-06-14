import React from "react";
// import Register from "./Components/auth/register";
import Login from "./Components/auth/Login";
import Logout from "./Components/auth/Logout";
import ProtectedRoute from "./Components/Routes/privateRoute";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { insert_user, log_in } from "./action";
import AccountBooks from "./Components/AccountBooks";
import EditAccountBooks from "./Components/EditAccountBooks";
import AddAccount from "./Components/AddAccount";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Book from "./Components/Book";
import ConfirmDeleteModal from "./Components/AccountBookEditDelete.js.js";

// import "bootstrap/dist/css/bootstrap.min.css";

const token = localStorage.getItem("access_token");
const user = localStorage.getItem("username");

function App() {
  const dispatch = useDispatch();
  // RefreshAccountBooks();
  if (token) {
    dispatch(log_in());
    dispatch(insert_user(user));
  }
  const isAuthenticated = useSelector((state) => state.authenticated);
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <div className="motherboard">
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            {/* <Route path="/forget-password" component={ForgetPassword} /> */}
            {/* <Route path="/register" component={Register} /> */}
            <Route exact path="/">
              {isAuthenticated ? (
                <Redirect to="/accounts" />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <ProtectedRoute exact path="/accounts" component={AccountBooks} />
            <ProtectedRoute
              exact
              path="/manage/accounts"
              component={EditAccountBooks}
            />
            <ProtectedRoute
              exact
              path="/manage/accounts/:account_id"
              component={ConfirmDeleteModal}
            />
            <ProtectedRoute
              exact
              path="/create-account-book"
              component={AddAccount}
            />
            <ProtectedRoute path="/accounts/:account_id" component={Book} />
          </div>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;