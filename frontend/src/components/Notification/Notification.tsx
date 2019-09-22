import * as React from "react";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
  Grid,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { NotificationTypes } from "../../common/enums";
import { red, green, amber, blue } from "@material-ui/core/colors";

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

interface Props {
  open: boolean;
  variant: NotificationTypes;
  message: string;
  onClose?: () => void;
  onExited?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 70
    },
    success: {
      backgroundColor: green[500]
    },
    warning: {
      backgroundColor: amber[700]
    },
    info: {
      backgroundColor: blue[500]
    },
    error: {
      backgroundColor: red[600]
    },
    icon: {
      fontSize: 20,
      marginRight: 10
    }
  })
);

const Notification: React.SFC<Props> = ({
  open,
  variant = "success",
  message,
  onClose,
  onExited
}) => {
  const styles = useStyles({});
  const Icon = variantIcon[variant];
  return (
    <Snackbar
      open={open}
      className={styles.root}
      autoHideDuration={5000}
      onClose={onClose}
      onExited={onExited}
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
