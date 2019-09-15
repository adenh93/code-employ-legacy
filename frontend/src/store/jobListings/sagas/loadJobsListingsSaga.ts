import { all, put, call, select, takeLatest } from "redux-saga/effects";
import { LOAD_JOB_LISTINGS, LOAD_JOB_LISTINGS_INITIAL } from "../types";
import { loadJobListingsSuccess, loadJobListings } from "../actions";
import { beginApiCall, apiCallError } from "../../apiStatus/actions";
import { searchJobListings } from "../../../api/jobListingApi";
import { jobListingFilterSelector } from "../../jobListingFilter/selectors";

export function* handleLoadJobListings({ filter }: any) {
  yield put(beginApiCall());

  try {
    const jobListings = yield call(searchJobListings, filter);
    yield put(loadJobListingsSuccess(jobListings));
  } catch (err) {
    yield put(apiCallError());
    throw err;
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
