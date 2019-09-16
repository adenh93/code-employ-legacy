import * as React from "react";
import Notification from "./Notification";

interface Props {}

export const NotificationContainer: React.SFC<Props> = () => {
  return (
    <Notification
      open={true}
      variant="success"
      message="This is a test message!"
      onClose={null}
    />
  );
};
