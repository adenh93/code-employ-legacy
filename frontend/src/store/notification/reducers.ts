import {
  NotificationActionTypes,
  NotificationState,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "./types";
import { Notification } from "../../common/types";

export const initialState: NotificationState = {
  notification: {} as Notification
};

export default function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationActionTypes
): NotificationState {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        notification: action.notification
      };
    case HIDE_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}
