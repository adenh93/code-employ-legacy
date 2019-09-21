import * as React from "react";
import { JobsListContainer as JobsList } from "../../components/Jobs/JobsList";
import { Grid, Typography } from "@material-ui/core";
import { JobsListFilterContainer as JobsListFilter } from "../../components/Jobs/JobsListFilter";
import { JobsListPaginator } from "../../components/Jobs/JobsListPaginator";
import { JobsListOrderBySortBy } from "../../components/Jobs/JobsListOrderBySortBy";
import Paper from "../../components/UI/Paper";

const JobsListPage = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <JobsListFilter />
      </Grid>
      <Grid item xs={9}>
        <Paper p={3} marginBottom={3}>
          <Typography variant="h4">Available Jobs</Typography>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography style={{ marginTop: 25 }} variant="body1">
                Showing all available jobs based on your filter criteria:
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <JobsListOrderBySortBy />
            </Grid>
          </Grid>
        </Paper>
        <JobsList />
        <JobsListPaginator />
      </Grid>
    </Grid>
  </div>
);

export default JobsListPage;
