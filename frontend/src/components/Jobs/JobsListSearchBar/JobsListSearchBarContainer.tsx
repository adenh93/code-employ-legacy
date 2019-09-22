import * as React from "react";
import JobsListSearchBar from "./JobsListSearchBar";
import { ApplicationState } from "../../../store";
import { Dispatch } from "redux";
import { JobListingSearchFilter } from "../../../common/types";
import * as filterActions from "../../../store/jobListingFilter/actions";
import { connect } from "react-redux";
import { withFormik, FormikProps } from "formik";

interface Props {
  filter: JobListingSearchFilter;
  apiCallsInProgress: number;
  updateFilter: (filter: JobListingSearchFilter) => void;
}

export interface FormValues {
  keyword: string;
}

const formikEnhancer = withFormik<Props, FormValues>({
  mapPropsToValues: ({ filter }) => ({
    keyword: filter.keyword
  }),

  handleSubmit: (values: FormValues, { props }) => {
    const { filter, updateFilter } = props;
    updateFilter({ ...filter, ...values });
  }
});

const JobsListSearchBarContainer: React.SFC<
  Props & FormikProps<FormValues>
> = ({ values, handleSubmit, handleChange, apiCallsInProgress }) => {
  const { keyword } = values;
  const waiting = apiCallsInProgress > 0;
  return (
    <JobsListSearchBar
      keyword={keyword}
      disabled={waiting}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    filter: state.jobListingsFilter.jobListingsFilter,
    apiCallsInProgress: state.apiStatus.apiCallsInProgress
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = {
    updateFilter: (filter: JobListingSearchFilter) =>
      dispatch(filterActions.updateJobListingsFilter(filter))
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formikEnhancer(JobsListSearchBarContainer));
