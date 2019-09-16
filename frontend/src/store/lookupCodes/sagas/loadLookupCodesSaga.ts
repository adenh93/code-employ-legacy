import { take, put, call } from "redux-saga/effects";
import { LOAD_LOOKUP_CODES } from "../types";
import { loadLookupCodesSuccess } from "../actions";
import {
  beginApiCall,
  apiCallError,
  apiCallSuccess
} from "../../apiStatus/actions";
import * as lookupCodeApi from "../../../api/lookupCodeApi";
import { showNotification } from "../../notification/actions";
import { NotificationType } from "../../../common/enums";

export function* loadLookupCodesSaga() {
  yield take(LOAD_LOOKUP_CODES);
  yield put(beginApiCall());

  try {
    const lookupCodes = yield call(lookupCodeApi.getLookupCodes);
    yield put(loadLookupCodesSuccess(lookupCodes));
    yield put(apiCallSuccess());
  } catch (err) {
    yield put(apiCallError());
    yield put(
      showNotification("Failed to load lookup codes", NotificationType.ERROR)
    );
  }
}
