import * as React from "react";
import { Chip, Grid } from "@material-ui/core";

interface Props {
  items: any[];
  color?: "default" | "inherit" | "primary" | "secondary";
  variant?: "default" | "outlined";
}

const ChipList: React.SFC<Props> = ({
  items,
  color = "default",
  variant = "default"
}) => (
  <>
    {items.map((item, key) => (
      <Grid item>
        <Chip label={item} color={color} variant={variant} />
      </Grid>
    ))}
  </>
);

export default ChipList;
