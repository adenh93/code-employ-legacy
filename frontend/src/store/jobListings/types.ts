import {
  JobListingSearchResponse,
  JobListingSearchFilter
} from "../../common/types";

export const LOAD_JOB_LISTINGS = "LOAD_JOB_LISTINGS";
export const LOAD_JOB_LISTINGS_INITIAL = "LOAD_JOB_LISTINGS_INITIAL";
export const LOAD_JOB_LISTINGS_SUCCESS = "LOAD_JOB_LISTINGS_SUCCESS";

export interface JobListingsState {
  jobListings: JobListingSearchResponse;
}

export interface LoadJobListingsAction {
  type: typeof LOAD_JOB_LISTINGS;
  filter: JobListingSearchFilter;
}

export interface LoadJobListingsInitialAction {
  type: typeof LOAD_JOB_LISTINGS_INITIAL;
}

export interface LoadJobListingsSuccessAction {
  type: typeof LOAD_JOB_LISTINGS_SUCCESS;
  jobListings: JobListingSearchResponse;
}

export type JobListingsActionTypes =
  | LoadJobListingsAction
  | LoadJobListingsInitialAction
  | LoadJobListingsSuccessAction;
