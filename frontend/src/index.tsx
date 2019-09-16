import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/App";
import configureStore from "./store/configureStore";
import { loadLookupCodes } from "./store/lookupCodes/actions";

const store = configureStore();
store.dispatch(loadLookupCodes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
