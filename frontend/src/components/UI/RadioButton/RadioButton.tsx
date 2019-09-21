import * as React from "react";
import { FormControlLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import CheckboxRadioLabel from "../CheckboxRadioLabel";

interface Props {
  value: any;
  checked: boolean;
  disabled?: boolean;
  label: string;
}

const RadioButton: React.SFC<Props> = ({ value, checked, disabled, label }) => (
  <FormControlLabel
    value={value}
    control={
      <Radio
        disabled={disabled}
        value={value}
        checked={checked}
        icon={<RadioButtonUncheckedIcon style={{ fontSize: 15 }} />}
        checkedIcon={<RadioButtonCheckedIcon style={{ fontSize: 15 }} />}
      />
    }
    label={
      <CheckboxRadioLabel disabled={disabled} checked={checked} label={label} />
    }
  />
);

export default RadioButton;
