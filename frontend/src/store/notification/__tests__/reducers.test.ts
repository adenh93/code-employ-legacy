import notificationReducer from "../reducers";
import * as actions from "../actions";
import { Notification } from "../../../common/types";
import { NotificationState } from "../types";

it("should return a notification when passed SHOW_NOTIFICATION", () => {
  const initialState: NotificationState = {
    notification: {} as Notification
  };

  const notification = {
    message: "A"
  } as Notification;

  const action = actions.showNotification(notification);
  const newState = notificationReducer(initialState, action);

  expect(newState.notification.message).toEqual("A");
});

it("should clear the notification state when passed HIDE_NOTIFICATION", () => {
  const initialState: NotificationState = {
    notification: {
      message: "A"
    } as Notification
  };

  const action = actions.hideNotification();
  const newState = notificationReducer(initialState, action);

  expect(newState.notification.message).toBeUndefined();
});
