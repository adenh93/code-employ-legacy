import notificationReducer from "../reducers";
import * as actions from "../actions";
import { NotificationMessage } from "../../../common/types";
import { NotificationState } from "../types";
import { NotificationType } from "../../../common/enums";

it("should return a notification when passed SHOW_NOTIFICATION", () => {
  const initialState: NotificationState = {
    notification: {} as NotificationMessage
  };

  const message = "A";
  const variant = NotificationType.SUCCESS;

  const action = actions.showNotification(message, variant);
  const newState = notificationReducer(initialState, action);

  expect(newState.notification.message).toEqual("A");
  expect(newState.notification.variant).toEqual(NotificationType.SUCCESS);
});

it("should set 'show' to false in the notification state when passed HIDE_NOTIFICATION", () => {
  const initialState: NotificationState = {
    notification: {
      message: "A",
      variant: NotificationType.SUCCESS,
      show: true
    }
  };

  const action = actions.hideNotification();
  const newState = notificationReducer(initialState, action);

  expect(newState.notification.message).toEqual("A");
  expect(newState.notification.variant).toEqual(NotificationType.SUCCESS);
  expect(newState.notification.show).toEqual(false);
});

it("should reset the notification state to initial values when passed DESTROY_NOTIFICATION", () => {
  const initialState: NotificationState = {
    notification: {
      message: "A",
      show: true
    } as NotificationMessage
  };

  const action = actions.destroyNotification();
  const newState = notificationReducer(initialState, action);

  expect(newState.notification.message).toBeUndefined();
  expect(newState.notification.show).toEqual(false);
});
