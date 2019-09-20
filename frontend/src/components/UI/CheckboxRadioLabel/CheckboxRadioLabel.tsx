import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  checked: boolean;
  label: string;
}

const CheckboxRadioLabel: React.SFC<Props> = ({ checked, label }) => (
  <Typography variant="body1" color={checked ? "primary" : "textPrimary"}>
    {label}
  </Typography>
);

export default CheckboxRadioLabel;
