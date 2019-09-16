export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_ERROR = "API_CALL_ERROR";

export interface ApiStatusState {
  apiCallsInProgress: number;
}

export interface BeginApiCallAction {
  type: typeof BEGIN_API_CALL;
}

export interface ApiCallSuccessAction {
  type: typeof API_CALL_SUCCESS;
}

export interface ApiCallErrorAction {
  type: typeof API_CALL_ERROR;
}

export type ApiStatusActionTypes =
  | BeginApiCallAction
  | ApiCallSuccessAction
  | ApiCallErrorAction;
