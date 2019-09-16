import * as React from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
  Grid
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import * as styles from "./styles.module.scss";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

interface Props {
  open: boolean;
  variant: keyof typeof variantIcon;
  message: string;
  duration?: number;
  onClose: () => void;
}

const Notification: React.SFC<Props> = ({
  open,
  variant,
  message,
  duration = 3000,
  onClose
}) => {
  const Icon = variantIcon[variant];
  return (
    <Snackbar
      open={open}
      className={styles.notification}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <SnackbarContent
        className={styles[variant]}
        aria-describedby="snackbar"
        message={
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Icon className={styles.icon} />
            </Grid>
            <Grid item>
              <Typography variant="body1">{message}</Typography>
            </Grid>
          </Grid>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      ></SnackbarContent>
    </Snackbar>
  );
};

export default Notification;