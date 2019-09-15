import {
  LOAD_JOB_LISTINGS_SUCCESS,
  LOAD_JOB_LISTINGS,
  JobListingsActionTypes,
  LOAD_JOB_LISTINGS_INITIAL
} from "./types";
import {
  JobListingSearchResponse,
  JobListingSearchFilter
} from "../../common/types";

export const loadJobListingsSuccess = (
  jobListings: JobListingSearchResponse
): JobListingsActionTypes => {
  return {
    type: LOAD_JOB_LISTINGS_SUCCESS,
    jobListings
  };
};

export const loadJobListingsInitial = (): JobListingsActionTypes => {
  return {
    type: LOAD_JOB_LISTINGS_INITIAL
  };
};

export const loadJobListings = (
  filter: JobListingSearchFilter
): JobListingsActionTypes => {
  return {
    type: LOAD_JOB_LISTINGS,
    filter
  };
};
