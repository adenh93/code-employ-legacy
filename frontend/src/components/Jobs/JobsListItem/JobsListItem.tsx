import * as React from "react";
import {
  Typography,
  Paper,
  Grid,
  Link,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { JobListingList } from "../../../common/types";
import * as numeral from "numeral";
import {
  EnumLabelDictionary,
  SalaryFrequencyType,
  JobPositionType
} from "../../../common/enums";
import ChipList from "../../UI/ChipList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMoneyBillWave,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment";
import { green, grey } from "@material-ui/core/colors";
const classNames = require("classnames");

interface Props {
  jobListing: JobListingList;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      borderLeft: `3px solid ${theme.palette.primary.main}`
    },
    grid: {
      marginBottom: 15
    },
    icon: {
      marginRight: 5
    },
    clockIcon: {
      color: grey[500]
    },
    cashIcon: {
      color: green[500]
    },
    locationIcon: {
      color: theme.palette.primary.main
    }
  })
);

const JobsListItem: React.SFC<Props> = ({ jobListing }) => {
  const styles = useStyles({});
  return (
    <Paper className={styles.root}>
      <Grid container className={styles.grid}>
        <Grid item xs={10}>
          <Link variant="h6">{jobListing.jobTitle}</Link>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{ textAlign: "right" }} variant="body2">
            <FontAwesomeIcon
              className={classNames(styles.icon, styles.clockIcon)}
              icon={faClock}
            />
            {moment(jobListing.publishedDate).fromNow()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary">
            {jobListing.companyName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={styles.grid}>
        <Grid item xs={12}>
          <Typography variant="body1">
            {EnumLabelDictionary.get(JobPositionType, jobListing.positionType)}
          </Typography>
        </Grid>
        {jobListing.salary ? (
          <Grid item xs={12}>
            <Typography variant="body1">
              <FontAwesomeIcon
                className={classNames(styles.icon, styles.cashIcon)}
                icon={faMoneyBillWave}
              />{" "}
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
      <Grid container className={styles.grid}>
        <Grid item xs={12}>
          <Typography variant="body1" color="textPrimary">
            <FontAwesomeIcon
              className={classNames(styles.icon, styles.locationIcon)}
              icon={faMapMarkerAlt}
            />{" "}
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
