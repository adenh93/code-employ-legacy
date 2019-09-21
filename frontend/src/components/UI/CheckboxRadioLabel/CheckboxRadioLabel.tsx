import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  checked: boolean;
  label: string;
  disabled?: boolean;
}

const CheckboxRadioLabel: React.SFC<Props> = ({
  checked,
  label,
  disabled = false
}) => (
  <Typography
    variant="body1"
    color={checked ? "primary" : disabled ? "textSecondary" : "textPrimary"}
  >
    {label}
  </Typography>
);

export default CheckboxRadioLabel;
