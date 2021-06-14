import { combineReducers } from "redux";
import isAuthenticatedReducer from "./isAuthenticated";
import accessTokenReducer from "./accessToken";
import userInfoReducer from "./userInfo";
import AccountBookReducer from "./AccountBooksReducers";
// import alertsReducer from "./alerts";

const allReducers = combineReducers({
  authenticated: isAuthenticatedReducer,
  token: accessTokenReducer,
  user: userInfoReducer,
  account_books: AccountBookReducer,
  // alerts: alertsReducer,
});

export default allReducers;
