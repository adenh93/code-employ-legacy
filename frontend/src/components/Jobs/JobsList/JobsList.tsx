import * as React from "react";
import { JobListingSearchResponse } from "../../../common/types";
import JobsListItem from "../JobsListItem";
import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

interface Props {
  jobListings: JobListingSearchResponse;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resultsFound: {
      marginBottom: 5
    },
    paper: {
      padding: theme.spacing(3)
    }
  })
);

const JobsList: React.SFC<Props> = ({ jobListings }) => {
  const styles = useStyles({});
  const { items, recordCount } = jobListings;
  return (
    <>
      {items.length ? (
        <>
          <Typography className={styles.resultsFound} variant="body2">
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
        <Paper className={styles.paper}>
          <Typography variant="body1">
            No job listings found with your filter criteria.
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default JobsList;
