import { combineReducers } from "redux";
import jobListings from "./jobListings/reducers";
import { JobListingsState } from "./jobListings/types";
import jobListingsFilter from "./jobListingFilter/reducers";
import { JobListingsFilterState } from "./jobListingFilter/types";
import apiStatus from "./apiStatus/reducers";
import { ApiStatusState } from "./apiStatus/types";
import lookupCodes from "./lookupCodes/reducers";
import { LookupCodesState } from "./lookupCodes/types";
import notification from "./notification/reducers";
import { NotificationState } from "./notification/types";

export interface ApplicationState {
  jobListings: JobListingsState;
  jobListingsFilter: JobListingsFilterState;
  lookupCodes: LookupCodesState;
  apiStatus: ApiStatusState;
  notification: NotificationState;
}

export const rootReducer = combineReducers<ApplicationState>({
  jobListings,
  jobListingsFilter,
  lookupCodes,
  apiStatus,
  notification
});

export default rootReducer;
