import * as React from "react";
import { Radio as MuiRadio } from "@material-ui/core";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

interface Props {
  name: string;
  value: any;
  checked: boolean;
}

const Radio: React.SFC<Props> = ({ name, value, checked }) => (
  <MuiRadio
    name={name}
    value={value}
    checked={checked}
    icon={<RadioButtonUnchecked style={{ fontSize: 15 }} />}
    checkedIcon={<RadioButtonChecked style={{ fontSize: 15 }} />}
  />
);

export default Radio;
