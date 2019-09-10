import * as React from "react";
import { Select, InputLabel, MenuItem } from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

interface Props {
  name: string;
  label: string;
  enumType: any;
  value: any;
  readOnly?: boolean;
  onChange: (e: any) => void;
}

const EnumSelect: React.SFC<Props> = ({
  name,
  label,
  enumType,
  value,
  readOnly,
  onChange
}) => (
  <>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      inputProps={{ name: name, id: name, readOnly: readOnly }}
    >
      {GetEnumList(enumType).map((item, key) => (
        <MenuItem key={key} value={item}>
          {EnumLabelDictionary.get(enumType, item)}
        </MenuItem>
      ))}
    </Select>
  </>
);

export default EnumSelect;
