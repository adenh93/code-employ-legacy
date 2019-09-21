import * as React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckboxRadioLabel from "../CheckboxRadioLabel";

interface Props {
  name: string;
  checked: boolean;
  value: any;
  label: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const CheckboxButton: React.SFC<Props> = ({
  name,
  checked,
  value,
  label,
  disabled = false,
  onChange
}) => (
  <FormControlLabel
    control={
      <Checkbox
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 15 }} />}
        checkedIcon={<CheckBoxIcon style={{ fontSize: 15 }} />}
      />
    }
    label={
      <CheckboxRadioLabel checked={checked} disabled={disabled} label={label} />
    }
  />
);

export default CheckboxButton;
