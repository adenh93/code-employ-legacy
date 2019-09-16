import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  DESTROY_NOTIFICATION,
  NotificationActionTypes
} from "./types";
import { NotificationTypes } from "../../common/enums";

export const showNotification = (
  message: string,
  variant: NotificationTypes
): NotificationActionTypes => {
  return {
    type: SHOW_NOTIFICATION,
    message,
    variant
  };
};

export const hideNotification = (): NotificationActionTypes => {
  return {
    type: HIDE_NOTIFICATION
  };
};

export const destroyNotification = (): NotificationActionTypes => {
  return {
    type: DESTROY_NOTIFICATION
  };
};
