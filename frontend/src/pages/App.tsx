import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/UI/Header";
import HomePage from "./Home/HomePage";
import JobsList from "./Jobs/JobsListPage";
import { NavBarItem } from "../common/types";
import { Grid } from "@material-ui/core";

const navItems: NavBarItem[] = [
  { label: "Home", route: "/" },
  { label: "Jobs", route: "/jobs" }
];

const App = () => (
  <Router>
    <Header title="CodeEmploy" navItems={navItems} />
    <Grid container style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Jobs" component={JobsList} />
        </Switch>
      </Grid>
    </Grid>
  </Router>
);

export default App;
