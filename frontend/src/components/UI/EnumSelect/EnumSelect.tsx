import * as React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

interface Props {
  name: string;
  label: string;
  enumType: any;
  value: any;
  emptyText?: string;
  readOnly?: boolean;
  onChange: (e: any) => void;
}

const EnumSelect: React.SFC<Props> = ({
  name,
  label,
  enumType,
  value,
  readOnly,
  emptyText = "Select a value...",
  onChange
}) => (
  <>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      inputProps={{ name: name, id: name, readOnly: readOnly }}
    >
      <MenuItem value={0}>{emptyText}</MenuItem>
      {GetEnumList(enumType).map((item, key) => (
        <MenuItem key={key} value={item}>
          {EnumLabelDictionary.get(enumType, item)}
        </MenuItem>
      ))}
    </Select>
  </>
);

export default EnumSelect;
