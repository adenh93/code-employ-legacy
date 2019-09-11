import * as React from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import * as numeral from "numeral";

interface Props {
  name: string;
  label?: string;
  value: any;
  items: any[];
  emptyText?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const CurrencySelect: React.SFC<Props> = ({
  name,
  label,
  value,
  items,
  emptyText = "Select a value...",
  disabled,
  onChange
}) => (
  <>
    <InputLabel shrink htmlFor={name}>
      {label}
    </InputLabel>
    <Select
      value={value || ""}
      onChange={onChange}
      displayEmpty
      disabled={disabled}
      inputProps={{ name: name, id: name }}
    >
      <MenuItem value="">{emptyText}</MenuItem>
      {items.map((item, key) => (
        <MenuItem key={key} value={item}>
          {numeral(item).format("$0,0")}
        </MenuItem>
      ))}
    </Select>
  </>
);

export default CurrencySelect;
