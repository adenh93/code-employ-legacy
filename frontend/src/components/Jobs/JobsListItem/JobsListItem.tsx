import * as React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import { JobListingList } from "../../../common/types";
import Paper from "../../UI/Paper";
import * as numeral from "numeral";
import {
  EnumLabelDictionary,
  SalaryFrequencyType,
  JobPositionType
} from "../../../common/enums";
import ChipList from "../../UI/ChipList";
import * as styles from "./styles.module.scss";
import * as moment from "moment";

interface Props {
  jobListing: JobListingList;
}

const JobsListItem: React.SFC<Props> = ({ jobListing }) => {
  return (
    <Paper className={styles.paper} p={2}>
      <Grid container style={{ marginBottom: 15 }}>
        <Grid item xs={10}>
          <Link variant="h6">{jobListing.jobTitle}</Link>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{ textAlign: "right" }} variant="body2">
            {moment(jobListing.createdDate).fromNow()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary">
            {jobListing.companyName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: 15 }}>
        <Grid item xs={12}>
          <Typography variant="body1">
            {EnumLabelDictionary.get(JobPositionType, jobListing.positionType)}
          </Typography>
        </Grid>
        {jobListing.salary ? (
          <Grid item xs={12}>
            <Typography variant="body1">
              {numeral(jobListing.salary).format("$0,0")}{" "}
              {EnumLabelDictionary.get(
                SalaryFrequencyType,
                jobListing.salaryFrequency
              )}
            </Typography>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
      <Grid container style={{ marginBottom: 20 }}>
        <Grid item xs={12}>
          <Typography variant="body1" color="textPrimary">
            {jobListing.city}, {jobListing.stateName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            {jobListing.description}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <ChipList items={jobListing.languages} />
      </Grid>
    </Paper>
  );
};

export default JobsListItem;
