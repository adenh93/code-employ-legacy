import * as React from "react";
import { JobsListContainer as JobsList } from "../../components/Jobs/JobsList";
import { Grid, Typography } from "@material-ui/core";

const JobsListPage = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <JobsList />
      </Grid>
    </Grid>
  </div>
);

export default JobsListPage;
