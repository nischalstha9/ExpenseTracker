import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
// import { positions, Provider as AP } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
// };

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    {/* <AP template={AlertTemplate} {...options}> */}
    <App />
    {/* </AP> */}
  </Provider>,
  document.getElementById("root")
);
