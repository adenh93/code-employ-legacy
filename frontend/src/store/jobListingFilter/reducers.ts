import {
  JobListingsFilterActionTypes,
  JobListingsFilterState,
  UPDATE_JOB_LISTINGS_FILTER,
  CLEAR_JOB_LISTINGS_FILTER
} from "./types";
import { JobListingSearchFilter } from "../../common/types";
import { OrderDirection } from "../../common/enums";

export const initialState: JobListingsFilterState = {
  jobListingsFilter: {
    currentPage: 1,
    itemsPerPage: 5,
    orderByColumn: "published_date",
    orderDirection: OrderDirection.DESC,
    keyword: "",
    positionTypes: [],
    languages: []
  } as JobListingSearchFilter
};

export default function jobListingsFilterReducer(
  state: JobListingsFilterState = initialState,
  action: JobListingsFilterActionTypes
): JobListingsFilterState {
  switch (action.type) {
    case UPDATE_JOB_LISTINGS_FILTER:
      return {
        jobListingsFilter: action.filter
      };
    case CLEAR_JOB_LISTINGS_FILTER:
      return initialState;
    default:
      return state;
  }
}
