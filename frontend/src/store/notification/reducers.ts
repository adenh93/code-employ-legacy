import {
  NotificationActionTypes,
  NotificationState,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  DESTROY_NOTIFICATION
} from "./types";
import { NotificationMessage } from "../../common/types";

export const initialState: NotificationState = {
  notification: {
    show: false
  } as NotificationMessage
};

export default function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationActionTypes
): NotificationState {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        notification: {
          message: action.message,
          variant: action.variant,
          show: true
        }
      };
    case HIDE_NOTIFICATION:
      return {
        notification: { ...state.notification, show: false }
      };
    case DESTROY_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}
