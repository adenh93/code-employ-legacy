import * as React from "react";
import { ApplicationState } from "../../../store";
import * as filterActions from "../../../store/jobListingFilter/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { JobListingSearchFilter } from "../../../common/types";
import JobsListFilter from "./JobsListFilter";
import { SalaryFrequencyType } from "../../../common/enums";
import * as constants from "../../../common/constants";

interface Props {
  jobListingsFilter: JobListingSearchFilter;
  updateFilter: (filter: JobListingSearchFilter) => void;
  clearFilter: () => void;
}

const JobsListFilterContainer: React.SFC<Props> = ({
  jobListingsFilter,
  updateFilter,
  clearFilter
}) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateFilter({
      ...jobListingsFilter,
      [name]: value || null
    });
  };

  const getSalaryList = () => {
    switch (jobListingsFilter.salaryFrequency) {
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
    <JobsListFilter
      jobListingsFilter={jobListingsFilter}
      salaryList={getSalaryList()}
      onUpdateFilter={handleChange}
      onClearFilter={clearFilter}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => state.jobListingsFilter;
const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = {
    updateFilter: (filter: JobListingSearchFilter) =>
      dispatch(filterActions.updateJobListingsFilter(filter)),
    clearFilter: () => dispatch(filterActions.clearJobListingsFilter())
  };
  return actions;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsListFilterContainer);
