import * as React from "react";
import JobsList from "./JobsList";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import * as jobListingActions from "../../../store/jobListings/actions";
import * as filterActions from "../../../store/jobListingFilter/actions";
import { Dispatch } from "redux";
import {
  JobListingSearchResponse,
  JobListingSearchFilter
} from "../../../common/types";
import Spinner from "../../UI/Spinner";
import { toast } from "react-toastify";
import JobsListFilter from "../JobsListFilter";
import { Grid, Typography } from "@material-ui/core";
import { SalaryFrequencyType } from "../../../common/enums";
import * as constants from "../../../common/constants";

interface Props {
  jobListings: JobListingSearchResponse;
  filter: JobListingSearchFilter;
  apiCallsInProgress: number;
  loadJobListings: (filter: JobListingSearchFilter) => Promise<void>;
  updateFilter: (filter: JobListingSearchFilter) => void;
  clearFilter: () => void;
}

const JobsListContainer: React.SFC<Props> = ({
  jobListings,
  filter,
  apiCallsInProgress,
  loadJobListings,
  updateFilter,
  clearFilter
}) => {
  React.useEffect(() => {
    reloadJobListings();
  }, []);

  const reloadJobListings = (): void => {
    loadJobListings(filter).catch(error => {
      toast.error("Failed to load job listings!");
      console.log(error);
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateFilter({
      ...filter,
      [name]: value || null
    });
  };

  const handleClear = (e: any): void => {
    clearFilter();
  };

  const handleSalaryFrequencyChange = (e: any) => {
    const { value } = e.target;
    if (filter.salaryFrequency != value) {
      updateFilter({
        ...filter,
        salaryFrequency: value,
        salaryMin: null,
        salaryMax: null
      });
    }
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    reloadJobListings();
  };

  const getSalaryList = (): number[] => {
    switch (filter.salaryFrequency) {
      case SalaryFrequencyType.PERDAY:
        return constants.dailySalary;
      case SalaryFrequencyType.PERFORTNIGHT:
        return constants.fortnightlySalary;
      case SalaryFrequencyType.PERHOUR:
        return constants.hourlySalary;
      case SalaryFrequencyType.PERMONTH:
        return constants.monthlySalary;
      case SalaryFrequencyType.PERWEEK:
        return constants.weeklySalary;
      default:
        return constants.yearlySalary;
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <JobsListFilter
          jobListingsFilter={filter}
          salaryList={getSalaryList()}
          onUpdateFilter={handleChange}
          onUpdateSalaryFrequency={handleSalaryFrequencyChange}
          onClearFilter={handleClear}
          onSubmit={handleSubmit}
        />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4" style={{ marginBottom: 10 }}>
          Available Jobs
        </Typography>
        {apiCallsInProgress > 0 ? (
          <Spinner size={100} />
        ) : (
          <>
            <JobsList jobListings={jobListings} />
          </>
        )}
      </Grid>
    </Grid>
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
    updateFilter: (filter: JobListingSearchFilter) =>
      dispatch(filterActions.updateJobListingsFilter(filter)),
    clearFilter: () => dispatch(filterActions.clearJobListingsFilter()),
    loadJobListings: (filter: JobListingSearchFilter) =>
      dispatch(jobListingActions.loadJobListings(filter))
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(JobsListContainer);
