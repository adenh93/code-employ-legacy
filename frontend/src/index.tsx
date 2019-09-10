import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/App";
import configureStore from "./store/configureStore";
import { toast } from "react-toastify";
import "react-toastify/scss/main.scss";

const store = configureStore();
toast.configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
