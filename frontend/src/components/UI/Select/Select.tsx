import * as React from "react";
import {
  Select as MSelect,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";

interface Props {
  name: string;
  label?: string;
  value: any;
  items: any[];
  defaultLabel?: string;
  defaultValue: any;
  adornment?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
}

const Select: React.SFC<Props> = ({
  name,
  label,
  value,
  items,
  defaultLabel,
  defaultValue,
  adornment,
  readOnly,
  onChange
}) => (
  <>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <MSelect
      value={value || defaultValue}
      onChange={onChange}
      inputProps={{ name: name, id: name, readOnly: readOnly }}
    >
      <MenuItem value={defaultValue}>{defaultLabel}</MenuItem>
      {items.map(item => (
        <MenuItem key={item.id || item} value={item.id || item}>
          {adornment}
          {item.description || item}
        </MenuItem>
      ))}
    </MSelect>
  </>
);

export default Select;
