import * as React from "react";
import {
  FormControlLabel,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 15
    }
  })
);

const RadioButton: React.SFC<Props> = ({ value, checked, disabled, label }) => {
  const styles = useStyles({});
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          disabled={disabled}
          value={value}
          checked={checked}
          icon={<RadioButtonUncheckedIcon className={styles.icon} />}
          checkedIcon={<RadioButtonCheckedIcon className={styles.icon} />}
        />
      }
      label={
        <CheckboxRadioLabel
          disabled={disabled}
          checked={checked}
          label={label}
        />
      }
    />
  );
};

export default RadioButton;
