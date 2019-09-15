import { createSelector } from "reselect";
import { JobListingSearchFilter } from "../../common/types";
import { ApplicationState } from "..";

export const jobListingFilterSelector = createSelector(
  (state: ApplicationState) => state.jobListingsFilter.jobListingsFilter,
  (jobListingsFilter: JobListingSearchFilter) => jobListingsFilter
);
