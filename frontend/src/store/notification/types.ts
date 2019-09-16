import { Notification } from "../../common/types";

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

export interface NotificationState {
  notification: Notification;
}

export interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION;
  notification: Notification;
}

export interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION;
}

export type NotificationActionTypes =
  | ShowNotificationAction
  | HideNotificationAction;
