import * as React from "react";
import { Checkbox as MuiCheckbox } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

interface Props {
  name: string;
  checked: boolean;
  value: any;
  onChange: (e: any) => void;
}

const Checkbox: React.SFC<Props> = ({ name, checked, value, onChange }) => (
  <MuiCheckbox
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 15 }} />}
    checkedIcon={<CheckBoxIcon style={{ fontSize: 15 }} />}
  />
);

export default Checkbox;
