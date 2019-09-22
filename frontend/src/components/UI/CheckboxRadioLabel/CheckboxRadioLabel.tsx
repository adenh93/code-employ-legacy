import * as React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
const classNames = require("classnames");

interface Props {
  checked: boolean;
  label: string;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 15
    },
    default: {
      color: theme.palette.text.primary
    },
    checked: {
      color: theme.palette.primary.main
    },
    disabled: {
      color: theme.palette.text.secondary
    }
  })
);

const CheckboxRadioLabel: React.SFC<Props> = ({
  checked,
  label,
  disabled = false
}) => {
  const styles = useStyles({});
  const classes = classNames(
    styles.root,
    checked ? styles.checked : disabled ? styles.disabled : styles.default
  );
  return (
    <Typography variant="body1" className={classes}>
      {label}
    </Typography>
  );
};

export default CheckboxRadioLabel;
