import { createStore } from "redux";
import { rootReducer } from "../..";
import * as actions from "../actions";
import { NotificationType } from "../../../common/enums";

it("should handle storing the notification", () => {
  const store = createStore(rootReducer);
  const message = "A";
  const variant = NotificationType.SUCCESS;

  const action = actions.showNotification(message, variant);
  store.dispatch(action);

  const newState = store.getState().notification.notification;
  expect(newState.message).toEqual(message);
});
