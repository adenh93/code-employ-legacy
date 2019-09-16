import { NotificationMessage } from "../../common/types";
import { NotificationTypes } from "../../common/enums";

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";
export const DESTROY_NOTIFICATION = "DESTROY_NOTIFICATION";

export interface NotificationState {
  notification: NotificationMessage;
}

export interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION;
  message: string;
  variant: NotificationTypes;
}

export interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION;
}

export interface DestroyNotificationAction {
  type: typeof DESTROY_NOTIFICATION;
}

export type NotificationActionTypes =
  | ShowNotificationAction
  | HideNotificationAction
  | DestroyNotificationAction;
