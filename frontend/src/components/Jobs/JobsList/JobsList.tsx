import * as React from "react";
import { JobListingSearchResponse } from "../../../common/types";
import JobsListItem from "../JobsListItem";
import { Grid, Typography } from "@material-ui/core";

interface Props {
  jobListings: JobListingSearchResponse;
}

const JobsList: React.SFC<Props> = ({ jobListings }) => {
  const { items } = jobListings;
  return (
    <>
      {items.length ? (
        <>
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
        <Typography variant="body1">
          No job listings found with your filter criteria.
        </Typography>
      )}
    </>
  );
};

export default JobsList;
