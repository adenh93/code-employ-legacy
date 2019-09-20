import * as React from "react";
import { Typography, Divider } from "@material-ui/core";
import * as styles from "./styles.module.scss";

interface Props {
  label: string;
}

const FilterLegend: React.SFC<Props> = ({ label }) => (
  <>
    <Typography className={styles.legend} variant="h6">
      {label}
    </Typography>
    <Divider className={styles.divider} />
  </>
);

export default FilterLegend;
