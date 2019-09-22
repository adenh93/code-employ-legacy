import * as React from "react";
import { JobsListContainer as JobsList } from "../../components/Jobs/JobsList";
import { Grid, Hidden } from "@material-ui/core";
import { JobsListFilterContainer as JobsListFilter } from "../../components/Jobs/JobsListFilter";
import { JobsListPaginator } from "../../components/Jobs/JobsListPaginator";
import { JobsListSearchBarContainer as JobsListSearchBar } from "../../components/Jobs/JobsListSearchBar";

const JobsListPage = () => (
  <div>
    <Grid container spacing={3}>
      <Hidden mdDown>
        <Grid item xs={3}>
          <JobsListFilter />
        </Grid>
      </Hidden>
      <Grid item xs>
        <JobsListSearchBar />
        <JobsList />
        <JobsListPaginator />
      </Grid>
    </Grid>
  </div>
);

export default JobsListPage;
