import * as React from "react";
import { CircularProgress } from "@material-ui/core";

interface Props {
  color?: "primary" | "secondary" | "inherit";
  size?: number;
}

const Spinner: React.SFC<Props> = ({ color, size }) => (
  <CircularProgress color={color} size={size} />
);

export default Spinner;
