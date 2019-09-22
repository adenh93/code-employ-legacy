import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/App";
import configureStore from "./store/configureStore";
import { loadLookupCodes } from "./store/lookupCodes/actions";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

const store = configureStore();
store.dispatch(loadLookupCodes());

const theme = createMuiTheme({
  palette: {
    background: {
      default: grey[100]
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
