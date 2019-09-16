import * as React from "react";
import Paginator from "../../UI/Paginator";
import {
  JobListingSearchFilter,
  JobListingSearchResponse
} from "../../../common/types";
import { Dispatch } from "redux";
import { ApplicationState } from "../../../store";
import * as filterActions from "../../../store/jobListingFilter/actions";
import { connect } from "react-redux";

interface Props {
  filter: JobListingSearchFilter;
  jobListings: JobListingSearchResponse;
  updateFilter: (filter: JobListingSearchFilter) => void;
}

const JobsListPaginator: React.SFC<Props> = ({
  filter,
  jobListings,
  updateFilter
}) => {
  const handleChangeRowsPerPage = (e: any) => {
    updateFilter({ ...filter, currentPage: 1, itemsPerPage: e.target.value });
  };

  const handleChangePage = (e: any, page: number) => {
    updateFilter({ ...filter, currentPage: page + 1 });
  };

  return (
    <Paginator
      page={filter.currentPage - 1}
      rowsPerPage={filter.itemsPerPage}
      count={jobListings.recordCount}
      labelRowsPerPage="Listings per page"
      onChangeRowsPerPage={handleChangeRowsPerPage}
      onChangePage={handleChangePage}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    filter: state.jobListingsFilter.jobListingsFilter,
    jobListings: state.jobListings.jobListings
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
)(JobsListPaginator);
