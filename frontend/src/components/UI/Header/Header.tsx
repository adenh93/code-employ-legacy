import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import { NavBarItem } from "../../../common/types";

interface Props {
  title: string;
  navItems: NavBarItem[];
}

const Header: React.SFC<Props> = ({ title, navItems }) => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit">
        {title}
      </Typography>
      <NavBar navItems={navItems} />
    </Toolbar>
  </AppBar>
);

export default Header;
