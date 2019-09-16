import { createStore } from "redux";
import { rootReducer } from "../..";
import * as actions from "../actions";
import { Notification } from "../../../common/types";

it("should handle storing the notification state", () => {
  const store = createStore(rootReducer);
  const notification = {
    message: "A"
  } as Notification;

  const action = actions.showNotification(notification);
  store.dispatch(action);

  const newState = store.getState().notification.notification;
  expect(newState).toEqual(notification);
});
