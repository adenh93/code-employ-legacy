import * as React from "react";
import { JobsListContainer as JobsList } from "../../components/Jobs/JobsList";
import { Grid, Typography } from "@material-ui/core";
import { JobsListFilterContainer as JobsListFilter } from "../../components/Jobs/JobsListFilter";
import { JobsListPaginator } from "../../components/Jobs/JobsListPaginator";

const JobsListPage = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <JobsListFilter />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4">Available Jobs</Typography>
        <JobsList />
        <JobsListPaginator />
      </Grid>
    </Grid>
  </div>
);

export default JobsListPage;
