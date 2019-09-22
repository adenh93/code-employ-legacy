import * as React from "react";
import {
  Paper,
  Button,
  Grid,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import TextInput from "../../UI/TextInput";
import { JobPositionType, SalaryFrequencyType } from "../../../common/enums";
import { FormValues } from "./JobsListFilterContainer";
import MultiSelect from "../../UI/MultiSelect";
import { ProgrammingLanguage } from "../../../common/types";
import EnumCheckboxList from "../../UI/EnumCheckboxList";
import EnumRadioGroup from "../../UI/EnumRadioGroup";
import CurrencyRadioGroup from "../../UI/CurrencyRadioGroup";
import FilterLegend from "../../UI/FilterLegend";
import JobsListOrderBySortBy from "../JobsListOrderBySortBy";

interface Props {
  values: FormValues;
  salaryList: number[];
  programmingLanguages: ProgrammingLanguage[];
  disabled: boolean;
  onUpdateFilter: any;
  onUpdateSalaryFrequency: (e: any) => void;
  onUpdateCheckGroup: (name: string, value: any[]) => void;
  onClearFilter: () => void;
  onSubmit: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    }
  })
);

const JobsListFilter: React.SFC<Props> = ({
  values,
  salaryList,
  programmingLanguages,
  disabled,
  onUpdateFilter,
  onUpdateSalaryFrequency,
  onUpdateCheckGroup,
  onClearFilter,
  onSubmit
}) => {
  const styles = useStyles({});
  return (
    <form onSubmit={onSubmit}>
      <Paper className={styles.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={12}>
            <FilterLegend label="Filter" />
            <TextInput
              name="keyword"
              label="Keyword"
              value={values.keyword}
              placeholder="Enter a keyword..."
              disabled={disabled}
              onChange={onUpdateFilter}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <JobsListOrderBySortBy
              columnValue={values.orderByColumn}
              orderDirectionValue={values.orderDirection}
              columnFieldName="orderByColumn"
              orderDirectionFieldName="orderDirection"
              disabled={disabled}
              onChange={onUpdateFilter}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FilterLegend label="Position" />
            <EnumCheckboxList
              name="positionTypes"
              enumType={JobPositionType}
              checkedItems={values.positionTypes}
              disabled={disabled}
              onChange={onUpdateCheckGroup}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FilterLegend label="Frequency" />
            <EnumRadioGroup
              name="salaryFrequency"
              enumType={SalaryFrequencyType}
              value={values.salaryFrequency}
              disabled={disabled}
              onChange={onUpdateSalaryFrequency}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FilterLegend label="Salary" />
            <CurrencyRadioGroup
              name="salaryMin"
              value={values.salaryMin}
              items={salaryList}
              disabled={disabled}
              onChange={onUpdateFilter}
            />
          </Grid>
          <Grid item xs={12}>
            <FilterLegend label="Languages" />
            <MultiSelect
              name="languages"
              value={values.languages}
              items={programmingLanguages}
              emptyText="Any"
              disabled={disabled}
              onChange={onUpdateFilter}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={disabled}
                  onClick={onClearFilter}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={disabled}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default JobsListFilter;
