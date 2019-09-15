import { all, put, takeLatest } from "redux-saga/effects";
import {
  UPDATE_JOB_LISTINGS_FILTER,
  CLEAR_JOB_LISTINGS_FILTER
} from "../types";
import { initialState } from "../reducers";
import { loadJobListings } from "../../jobListings/actions";

export function* handleUpdateFilter({ filter }: any) {
  yield put(loadJobListings(filter));
}

export function* handleClearFilter() {
  const { jobListingsFilter } = initialState;
  yield put(loadJobListings(jobListingsFilter));
}

export function* jobListingFilterSaga() {
  yield all([
    takeLatest(UPDATE_JOB_LISTINGS_FILTER, handleUpdateFilter),
    takeLatest(CLEAR_JOB_LISTINGS_FILTER, handleClearFilter)
  ]);
}
