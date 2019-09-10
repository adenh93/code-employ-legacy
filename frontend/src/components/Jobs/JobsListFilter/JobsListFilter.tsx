import * as React from "react";
import { JobListingSearchFilter } from "../../../common/types";
import { Typography, Button, FormControl, Grid } from "@material-ui/core";
import TextInput from "../../UI/TextInput";
import Select from "../../UI/Select";
import EnumSelect from "../../UI/EnumSelect";
import Paper from "../../UI/Paper";
import { yearlyWages } from "../../../common/constants";
import { JobPositionType } from "../../../common/enums";

interface Props {
  jobListingsFilter: JobListingSearchFilter;
  onUpdateFilter: (e: any) => void;
  onClearFilter: () => void;
}

const JobsListFilter: React.SFC<Props> = ({
  jobListingsFilter,
  onUpdateFilter,
  onClearFilter
}) => {
  return (
    <Paper p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Filter</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={12}>
          <FormControl fullWidth={true}>
            <TextInput
              name="keyword"
              label="Keyword"
              value={jobListingsFilter.keyword}
              placeholder="Enter a keyword..."
              onChange={onUpdateFilter}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={12} lg={12}>
          <FormControl fullWidth={true}>
            <EnumSelect
              name="positionType"
              label="Position Type"
              value={jobListingsFilter.positionType}
              enumType={JobPositionType}
              onChange={onUpdateFilter}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={12} lg={6}>
          <FormControl fullWidth={true}>
            <Select
              name="salaryMin"
              label="Minimum Salary"
              value={jobListingsFilter.salaryMin}
              items={yearlyWages}
              defaultLabel="Any"
              defaultValue={0}
              adornment="$"
              onChange={onUpdateFilter}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={12} lg={6}>
          <FormControl fullWidth={true}>
            <Select
              name="salaryMax"
              label="Maximum Salary"
              value={jobListingsFilter.salaryMax}
              items={yearlyWages}
              defaultLabel="Any"
              defaultValue={0}
              adornment="$"
              onChange={onUpdateFilter}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onClearFilter}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobsListFilter;
