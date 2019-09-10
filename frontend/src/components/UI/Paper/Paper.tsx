import * as React from "react";
import { Paper as MuiPaper, Box } from "@material-ui/core";

interface Props {
  p: number;
}

const Paper: React.SFC<Props> = ({ p, ...props }) => (
  <MuiPaper>
    <Box p={p}>{props.children}</Box>
  </MuiPaper>
);

export default Paper;
