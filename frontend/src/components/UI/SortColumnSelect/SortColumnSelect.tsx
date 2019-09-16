import * as React from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { SortColumn } from "../../../common/types";

interface Props {
  name: string;
  value: string;
  sortColumns: SortColumn[];
  disabled?: boolean;
  onChange: (e: any) => void;
}

const SortColumnSelect: React.SFC<Props> = ({
  name,
  value,
  sortColumns,
  disabled,
  onChange
}) => (
  <>
    <InputLabel shrink htmlFor={name}>
      Sort by
    </InputLabel>
    <Select
      value={value || ""}
      onChange={onChange}
      displayEmpty
      disabled={disabled}
      inputProps={{ name: name, id: name }}
    >
      {sortColumns.map((item: SortColumn, key: number) => {
        return (
          <MenuItem key={key} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </Select>
  </>
);

export default SortColumnSelect;
