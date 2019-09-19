import * as React from "react";
import { Paper as MuiPaper, Box } from "@material-ui/core";

interface Props {
  p: number;
  className?: any;
}

const Paper: React.SFC<Props> = ({ p, className, ...props }) => (
  <MuiPaper className={className}>
    <Box p={p}>{props.children}</Box>
  </MuiPaper>
);

export default Paper;
