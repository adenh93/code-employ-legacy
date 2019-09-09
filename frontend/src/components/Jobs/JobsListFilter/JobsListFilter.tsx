import * as React from "react";
import { JobListingSearchFilter } from "../../../common/types";
import { Paper, Typography, Box, Button, FormControl } from "@material-ui/core";
import TextInput from "../../UI/TextInput";
import Select from "../../UI/Select";
import { yearlyWages } from "../../../common/constants";

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
    <Paper>
      <Box p={3}>
        <Typography variant="h5">Filter</Typography>
        <Box py={2}>
          <FormControl fullWidth={true}>
            <TextInput
              name="keyword"
              label="Keyword"
              value={jobListingsFilter.keyword}
              placeholder="Enter a keyword..."
              onChange={onUpdateFilter}
            />
          </FormControl>
        </Box>
        <Box py={2}>
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
        </Box>
        <Box py={2}>
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
        </Box>
        <Button variant="contained" onClick={onClearFilter}>
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default JobsListFilter;
