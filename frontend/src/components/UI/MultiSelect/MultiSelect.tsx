import * as React from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  ListItemText,
  Checkbox
} from "@material-ui/core";

interface Props {
  name: string;
  items: any[];
  value: any[];
  label: string;
  emptyText?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const MultiSelect: React.SFC<Props> = ({
  name,
  items,
  value,
  label,
  emptyText = "Select an option...",
  disabled,
  onChange
}) => (
  <>
    <InputLabel shrink htmlFor={name}>
      {label}
    </InputLabel>
    <Select
      multiple
      displayEmpty
      value={value || []}
      disabled={disabled}
      onChange={onChange}
      renderValue={selected => {
        if ((selected as string[]).length === 0) {
          return <>{emptyText}</>;
        }
        return (selected as string[]).join(", ");
      }}
      inputProps={{ name: name, id: name }}
    >
      {items.map((item, key) => {
        const itemVal = item.name || item;
        return (
          <MenuItem key={key} value={itemVal}>
            <Checkbox checked={value.indexOf(itemVal) > -1} />
            <ListItemText primary={itemVal} />
          </MenuItem>
        );
      })}
    </Select>
  </>
);

export default MultiSelect;
