import {
  BEGIN_API_CALL,
  API_CALL_SUCCESS,
  API_CALL_ERROR,
  ApiStatusState,
  ApiStatusActionTypes
} from "./types";

const initialState: ApiStatusState = {
  apiCallsInProgress: 0
};

export default function apiStatusReducer(
  state: ApiStatusState = initialState,
  action: ApiStatusActionTypes
): ApiStatusState {
  switch (action.type) {
    case BEGIN_API_CALL:
      return {
        apiCallsInProgress: state.apiCallsInProgress + 1
      };
    case API_CALL_SUCCESS:
    case API_CALL_ERROR:
      return {
        apiCallsInProgress: state.apiCallsInProgress - 1
      };
    default:
      return state;
  }
}
