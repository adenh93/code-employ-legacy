import * as React from "react";
import { Typography, Button, FormControl, Grid, Box } from "@material-ui/core";
import TextInput from "../../UI/TextInput";
import CurrencySelect from "../../UI/CurrencySelect";
import EnumSelect from "../../UI/EnumSelect";
import Paper from "../../UI/Paper";
import { JobPositionType, SalaryFrequencyType } from "../../../common/enums";
import { FormValues } from "./JobsListFilterContainer";
import MultiSelect from "../../UI/MultiSelect";
import { ProgrammingLanguage } from "../../../common/types";

interface Props {
  values: FormValues;
  salaryList: number[];
  programmingLanguages: ProgrammingLanguage[];
  disabled: boolean;
  onUpdateFilter: any;
  onUpdateSalaryFrequency: (e: any) => void;
  onClearFilter: () => void;
  onSubmit: any;
}

const JobsListFilter: React.SFC<Props> = ({
  values,
  salaryList,
  programmingLanguages,
  disabled,
  onUpdateFilter,
  onUpdateSalaryFrequency,
  onClearFilter,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Paper p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Filter</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <FormControl fullWidth>
              <TextInput
                name="keyword"
                label="Keyword"
                value={values.keyword}
                placeholder="Enter a keyword..."
                disabled={disabled}
                onChange={onUpdateFilter}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FormControl fullWidth>
              <EnumSelect
                name="positionType"
                label="Position Type"
                value={values.positionType}
                enumType={JobPositionType}
                emptyText="Any"
                disabled={disabled}
                onChange={onUpdateFilter}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FormControl fullWidth>
              <EnumSelect
                name="salaryFrequency"
                label="Salary Frequency"
                value={values.salaryFrequency}
                enumType={SalaryFrequencyType}
                emptyText="Any"
                disabled={disabled}
                onChange={onUpdateSalaryFrequency}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={6}>
            <FormControl fullWidth>
              <CurrencySelect
                name="salaryMin"
                label="Minimum Salary"
                value={values.salaryMin}
                items={salaryList}
                emptyText="Any"
                disabled={disabled}
                onChange={onUpdateFilter}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={6}>
            <FormControl fullWidth>
              <CurrencySelect
                name="salaryMax"
                label="Maximum Salary"
                value={values.salaryMax}
                items={salaryList}
                emptyText="Any"
                disabled={disabled}
                onChange={onUpdateFilter}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <MultiSelect
                name="languages"
                label="Programming Languages"
                value={values.languages}
                items={programmingLanguages}
                emptyText="Any"
                disabled={disabled}
                onChange={onUpdateFilter}
              />
            </FormControl>
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
