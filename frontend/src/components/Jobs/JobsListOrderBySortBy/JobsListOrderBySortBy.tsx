import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { Dispatch } from "redux";
import { JobListingSearchFilter, SortColumn } from "../../../common/types";
import * as filterActions from "../../../store/jobListingFilter/actions";
import OrderBySortBy from "../../UI/OrderBySortBy";
import { OrderDirectionTypes } from "../../../common/enums";

interface Props {
  filter: JobListingSearchFilter;
  apiCallsInProgress: number;
  updateFilter: (filter: JobListingSearchFilter) => void;
}

const sortColumns: SortColumn[] = [
  { label: "Job Title", value: "job_title" },
  { label: "Salary", value: "salary" },
  { label: "Created Date", value: "created_date" }
];

const JobsListOrderBySortBy: React.SFC<Props> = ({
  filter,
  apiCallsInProgress,
  updateFilter
}) => {
  const waiting = apiCallsInProgress > 0;

  const handleChangeOrderColumn = (e: any) => {
    updateFilter({ ...filter, orderByColumn: e.target.value });
  };

  const handleChangeOrderDirection = (e: any) => {
    updateFilter({
      ...filter,
      orderDirection: parseInt(e.target.value) as OrderDirectionTypes
    });
  };

  return (
    <>
      {!waiting ? (
        <OrderBySortBy
          sortColumns={sortColumns}
          columnValue={filter.orderByColumn}
          orderDirectionValue={filter.orderDirection}
          onChangeOrderColumn={handleChangeOrderColumn}
          onChangeOrderDirection={handleChangeOrderDirection}
        />
      ) : (
        ""
      )}
    </>
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
)(JobsListOrderBySortBy);
