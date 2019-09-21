import * as React from "react";
import { JobListingSearchResponse } from "../../../common/types";
import JobsListItem from "../JobsListItem";
import { Grid, Typography } from "@material-ui/core";
import Paper from "../../UI/Paper";

interface Props {
  jobListings: JobListingSearchResponse;
}

const JobsList: React.SFC<Props> = ({ jobListings }) => {
  const { items, recordCount } = jobListings;
  return (
    <>
      {items.length ? (
        <>
          <Typography style={{ marginBottom: 5 }} variant="body2">
            {recordCount} jobs found with your filter criteria
          </Typography>
          <Grid container spacing={3}>
            {items.map(job => {
              return (
                <Grid key={job.id} item xs={12}>
                  <JobsListItem jobListing={job} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <Paper p={3}>
          <Typography variant="body1">
            No job listings found with your filter criteria.
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default JobsList;
