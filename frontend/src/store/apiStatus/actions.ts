import {
  BEGIN_API_CALL,
  API_CALL_SUCCESS,
  API_CALL_ERROR,
  ApiStatusActionTypes
} from "./types";

export const beginApiCall = (): ApiStatusActionTypes => {
  return {
    type: BEGIN_API_CALL
  };
};

export const apiCallSuccess = (): ApiStatusActionTypes => {
  return {
    type: API_CALL_SUCCESS
  };
};

export const apiCallError = (): ApiStatusActionTypes => {
  return {
    type: API_CALL_ERROR
  };
};
