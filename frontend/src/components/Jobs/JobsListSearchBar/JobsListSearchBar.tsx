import * as React from "react";
import {
  Grid,
  InputBase,
  Paper,
  makeStyles,
  Theme,
  createStyles,
  Button,
  Typography,
  FormControl
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  keyword: string;
  disabled: boolean;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

const height = 60;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 15
    },
    paper: {
      height: height,
      display: "flex",
      padding: theme.spacing(3),
      alignItems: "center",
      borderRadius: 0
    },
    icon: {
      color: theme.palette.primary.light,
      marginRight: theme.spacing(2),
      fontSize: 17
    },
    input: {
      padding: 0,
      marginTop: 2,
      marginLeft: theme.spacing(3),
      color: theme.palette.text.secondary
    },
    button: {
      height: height,
      width: "100%",
      borderRadius: 0
    }
  })
);

const JobsListSearchBar: React.SFC<Props> = ({
  keyword,
  disabled,
  onChange,
  onSubmit
}) => {
  const styles = useStyles({});
  return (
    <form onSubmit={onSubmit}>
      <Grid container className={styles.root}>
        <Grid item xs={12} sm={12} md={5}>
          <Paper className={styles.paper}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <Typography variant="body1">What</Typography>
            <FormControl fullWidth>
              <InputBase
                name="keyword"
                value={keyword}
                className={styles.input}
                placeholder="Enter a keyword..."
                disabled={disabled}
                onChange={onChange}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Paper className={styles.paper}>
            <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
            <Typography variant="body1">Where</Typography>
            <FormControl fullWidth>
              <InputBase
                className={styles.input}
                placeholder="Enter a location..."
                disabled={disabled}
                onChange={onChange}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button
            type="submit"
            className={styles.button}
            variant="contained"
            color="primary"
            disabled={disabled}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default JobsListSearchBar;
