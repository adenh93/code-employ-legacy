import * as React from "react";
import { Typography, Button, Grid, Divider } from "@material-ui/core";
import TextInput from "../../UI/TextInput";
import Paper from "../../UI/Paper";
import { JobPositionType, SalaryFrequencyType } from "../../../common/enums";
import { FormValues } from "./JobsListFilterContainer";
import MultiSelect from "../../UI/MultiSelect";
import { ProgrammingLanguage } from "../../../common/types";
import EnumCheckboxList from "../../UI/EnumCheckboxList";
import EnumRadioGroup from "../../UI/EnumRadioGroup";
import CurrencyRadioGroup from "../../UI/CurrencyRadioGroup";
import * as styles from "./styles.module.scss";
import FilterLegend from "../../UI/FilterLegend";

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
  return (
    <form onSubmit={onSubmit}>
      <Paper p={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Filter</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <TextInput
              name="keyword"
              label="Keyword"
              value={values.keyword}
              placeholder="Enter a keyword..."
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
              onChange={onUpdateCheckGroup}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FilterLegend label="Frequency" />
            <EnumRadioGroup
              name="salaryFrequency"
              enumType={SalaryFrequencyType}
              value={values.salaryFrequency}
              onChange={onUpdateSalaryFrequency}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={12} lg={12}>
            <FilterLegend label="Salary" />
            <CurrencyRadioGroup
              name="salaryMin"
              value={values.salaryMin}
              items={salaryList}
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
