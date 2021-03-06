import { all, put, call, select, takeLatest } from "redux-saga/effects";
import { LOAD_JOB_LISTINGS, LOAD_JOB_LISTINGS_INITIAL } from "../types";
import { loadJobListingsSuccess, loadJobListings } from "../actions";
import {
  beginApiCall,
  apiCallError,
  apiCallSuccess
} from "../../apiStatus/actions";
import * as jobListingApi from "../../../api/jobListingApi";
import { jobListingFilterSelector } from "../../jobListingFilter/selectors";
import { showNotification } from "../../notification/actions";
import { NotificationType } from "../../../common/enums";

export function* handleLoadJobListings({ filter }: any) {
  yield put(beginApiCall());

  try {
    const jobListings = yield call(jobListingApi.searchJobListings, filter);
    yield put(loadJobListingsSuccess(jobListings));
    yield put(apiCallSuccess());
  } catch (err) {
    yield put(apiCallError());
    yield put(
      showNotification("Failed to load job listings", NotificationType.ERROR)
    );
  }
}

export function* handleLoadJobsListingsInitial() {
  const filter = yield select(jobListingFilterSelector);
  yield put(loadJobListings(filter));
}

export function* loadJobListingsSaga() {
  yield all([
    takeLatest(LOAD_JOB_LISTINGS_INITIAL, handleLoadJobsListingsInitial),
    takeLatest(LOAD_JOB_LISTINGS, handleLoadJobListings)
  ]);
}
