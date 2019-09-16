import * as React from "react";
import ToastNotification from "./Notification";
import { NotificationMessage } from "../../common/types";
import { ApplicationState } from "../../store";
import * as notificationActions from "../../store/notification/actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props {
  notification: NotificationMessage;
  hideNotification: () => void;
  destroyNotification: () => void;
}

const NotificationContainer: React.SFC<Props> = ({
  notification,
  hideNotification,
  destroyNotification
}) => (
  <ToastNotification
    open={notification.show}
    variant={notification.variant}
    message={notification.message}
    onClose={hideNotification}
    onExited={destroyNotification}
  />
);

const mapStateToProps = (state: ApplicationState) => {
  return {
    notification: state.notification.notification
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = {
    hideNotification: () => dispatch(notificationActions.hideNotification()),
    destroyNotification: () =>
      dispatch(notificationActions.destroyNotification())
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
