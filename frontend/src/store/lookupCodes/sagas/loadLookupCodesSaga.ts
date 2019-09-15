import { take, put, call } from "redux-saga/effects";
import { LOAD_LOOKUP_CODES } from "../types";
import { loadLookupCodesSuccess } from "../actions";
import { beginApiCall, apiCallError } from "../../apiStatus/actions";
import * as lookupCodeApi from "../../../api/lookupCodeApi";

export function* loadLookupCodesSaga() {
  yield take(LOAD_LOOKUP_CODES);
  yield put(beginApiCall());

  try {
    const lookupCodes = yield call(lookupCodeApi.getLookupCodes);
    yield put(loadLookupCodesSuccess(lookupCodes));
  } catch (err) {
    yield put(apiCallError());
    throw err;
  }
}
