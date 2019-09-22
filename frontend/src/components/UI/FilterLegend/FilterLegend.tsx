import * as React from "react";
import {
  Typography,
  Divider,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";

interface Props {
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    legend: {
      fontSize: 17
    },
    divider: {
      marginBottom: 10,
      width: 30
    }
  })
);

const FilterLegend: React.SFC<Props> = ({ label }) => {
  const styles = useStyles({});
  return (
    <>
      <Typography className={styles.legend} variant="h6">
        {label}
      </Typography>
      <Divider className={styles.divider} />
    </>
  );
};

export default FilterLegend;
