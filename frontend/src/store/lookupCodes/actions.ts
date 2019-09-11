import { LOAD_LOOKUP_CODES_SUCCESS, LookupCodeActionTypes } from "./types";
import { LookupCodeList } from "../../common/types";
import { Dispatch } from "redux";
import * as lookupCodeApi from "../../api/lookupCodeApi";
import { beginApiCall, apiCallError } from "../apiStatus/actions";

export const loadLookupCodesSuccess = (
  lookupCodes: LookupCodeList
): LookupCodeActionTypes => {
  return {
    type: LOAD_LOOKUP_CODES_SUCCESS,
    lookupCodes
  };
};

export const loadLookupCodes: any = () => {
  return async (dispatch: Dispatch) => {
    dispatch(beginApiCall());
    return lookupCodeApi
      .getLookupCodes()
      .then(codes => {
        dispatch(loadLookupCodesSuccess(codes));
      })
      .catch(err => {
        dispatch(apiCallError());
        throw err;
      });
  };
};
