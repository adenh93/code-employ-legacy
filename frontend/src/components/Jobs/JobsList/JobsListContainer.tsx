import * as React from "react";
import JobsList from "./JobsList";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import * as jobListingActions from "../../../store/jobListings/actions";
import { Dispatch } from "redux";
import { JobListingSearchResponse } from "../../../common/types";
import Spinner from "../../UI/Spinner";

interface Props {
  jobListings: JobListingSearchResponse;
  apiCallsInProgress: number;
  loadJobListingsInitial: () => void;
}

const JobsListContainer: React.SFC<Props> = ({
  jobListings,
  apiCallsInProgress,
  loadJobListingsInitial
}) => {
  const waiting = apiCallsInProgress > 0;

  React.useEffect(() => {
    loadJobListingsInitial();
  }, []);

  return (
    <>
      {waiting ? (
        <Spinner size={100} />
      ) : (
        <JobsList jobListings={jobListings} />
      )}
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    jobListings: state.jobListings.jobListings,
    apiCallsInProgress: state.apiStatus.apiCallsInProgress
  };
};

const mapDispatchtoProps = (dispatch: Dispatch) => {
  const actions = {
    loadJobListingsInitial: () =>
      dispatch(jobListingActions.loadJobListingsInitial())
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(JobsListContainer);
