import * as React from "react";
import { withFormik, FormikProps } from "formik";
import { JobListingSearchFilter, LookupCodeList } from "../../../common/types";
import * as filterActions from "../../../store/jobListingFilter/actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { JobPositionTypes, SalaryFrequencyTypes } from "../../../common/enums";
import JobsListFilter from "./JobsListFilter";
import { getSalaryList } from "../../../common/data/salaryList";

interface Props {
  filter: JobListingSearchFilter;
  apiCallsInProgress: number;
  lookupCodes: LookupCodeList;
  updateFilter: (filter: JobListingSearchFilter) => void;
  clearFilter: () => void;
}

export interface FormValues {
  keyword: string;
  languages: string[];
  positionType: JobPositionTypes;
  salaryFrequency: SalaryFrequencyTypes;
  salaryMin: number;
  salaryMax: number;
}

const formikEnhancer = withFormik<Props, FormValues>({
  mapPropsToValues: ({ filter }) => ({
    keyword: filter.keyword,
    languages: filter.languages,
    positionType: filter.positionType,
    salaryFrequency: filter.salaryFrequency,
    salaryMin: filter.salaryMin,
    salaryMax: filter.salaryMax
  }),

  handleSubmit: (values: FormValues, { props }) => {
    const { filter, updateFilter } = props;
    updateFilter({ ...filter, ...values });
  }
});

const JobsListFilterContainer: React.SFC<Props & FormikProps<FormValues>> = ({
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  setValues,
  initialValues,
  clearFilter,
  apiCallsInProgress,
  lookupCodes
}) => {
  const waiting = apiCallsInProgress > 0;
  const salaryList = getSalaryList(values.salaryFrequency);

  const handleFormReset = () => {
    setValues(initialValues);
    clearFilter();
  };

  const handleSalaryFrequencyChange = (e: any) => {
    handleChange(e);
    setFieldValue("salaryMin", undefined);
    setFieldValue("salaryMax", undefined);
  };

  return (
    <JobsListFilter
      values={values}
      salaryList={salaryList}
      programmingLanguages={lookupCodes.programmingLanguages}
      onUpdateFilter={handleChange}
      onUpdateSalaryFrequency={handleSalaryFrequencyChange}
      onClearFilter={() => handleFormReset()}
      disabled={waiting}
      onSubmit={handleSubmit}
    />
  );
};
const mapStateToProps = (state: ApplicationState) => {
  return {
    filter: state.jobListingsFilter.jobListingsFilter,
    lookupCodes: state.lookupCodes.lookupCodes,
    apiCallsInProgress: state.apiStatus.apiCallsInProgress
  };
};

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
)(formikEnhancer(JobsListFilterContainer));
