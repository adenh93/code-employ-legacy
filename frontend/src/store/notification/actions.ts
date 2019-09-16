import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationActionTypes
} from "./types";
import { Notification } from "../../common/types";

export const showNotification = (
  notification: Notification
): NotificationActionTypes => {
  return {
    type: SHOW_NOTIFICATION,
    notification
  };
};

export const hideNotification = (): NotificationActionTypes => {
  return {
    type: HIDE_NOTIFICATION
  };
};
