import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/UI/Header";
import HomePage from "./Home/HomePage";
import JobsList from "./Jobs/JobsListPage";
import { NavBarItem } from "../common/types";
import { Grid } from "@material-ui/core";
import { NotificationContainer as Notification } from "../components/Notification";

const navItems: NavBarItem[] = [
  { label: "Home", route: "/" },
  { label: "Jobs", route: "/jobs" }
];

const App = () => (
  <Router>
    <Header title="CodeEmploy" navItems={navItems} />
    <Grid
      container
      justify="center"
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        paddingTop: 20
      }}
    >
      <Grid item xs={11}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Jobs" component={JobsList} />
        </Switch>
        <Notification />
      </Grid>
    </Grid>
  </Router>
);

export default App;
