import * as React from "react";
import JobsList from "./JobsList";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import * as jobListingActions from "../../../store/jobListings/actions";
import { Dispatch } from "redux";
import {
  JobListingSearchResponse,
  JobListingSearchFilter
} from "../../../common/types";
import Spinner from "../../UI/Spinner";
import { toast } from "react-toastify";

interface Props {
  jobListings: JobListingSearchResponse;
  filter: JobListingSearchFilter;
  apiCallsInProgress: number;
  loadJobListings: (filter: JobListingSearchFilter) => Promise<void>;
}

const JobsListContainer: React.SFC<Props> = ({
  jobListings,
  filter,
  apiCallsInProgress,
  loadJobListings
}) => {
  React.useEffect(() => {
    loadJobListings(filter).catch(error => {
      toast.error("Failed to load job listings!");
    });
  }, [filter]);
  return apiCallsInProgress > 0 ? (
    <Spinner size={100} />
  ) : (
    <JobsList jobListings={jobListings} />
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    jobListings: state.jobListings.jobListings,
    filter: state.jobListingsFilter.jobListingsFilter,
    apiCallsInProgress: state.apiStatus.apiCallsInProgress
  };
};
const mapDispatchtoProps = (dispatch: Dispatch) => {
  const actions = {
    loadJobListings: (filter: JobListingSearchFilter) =>
      dispatch(jobListingActions.loadJobListings(filter))
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(JobsListContainer);
