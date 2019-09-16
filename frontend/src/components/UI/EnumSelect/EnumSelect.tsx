import * as React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

interface Props {
  name: string;
  label: string;
  enumType: any;
  value: any;
  emptyText?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const EnumSelect: React.SFC<Props> = ({
  name,
  label,
  enumType,
  value,
  disabled,
  emptyText,
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
      {emptyText ? <MenuItem value="">{emptyText}</MenuItem> : ""}
      {GetEnumList(enumType).map((item, key) => (
        <MenuItem key={key} value={item}>
          {EnumLabelDictionary.get(enumType, item)}
        </MenuItem>
      ))}
    </Select>
  </>
);

export default EnumSelect;
