import * as React from "react";
import { Paper as MuiPaper, Box } from "@material-ui/core";

interface Props {
  p?: number;
  marginBottom?: number;
  className?: any;
}

const Paper: React.SFC<Props> = ({ p, marginBottom, className, ...props }) => (
  <MuiPaper className={className}>
    <Box p={p} marginBottom={marginBottom}>
      {props.children}
    </Box>
  </MuiPaper>
);

export default Paper;
