import * as React from "react";
import {
  Checkbox,
  FormControlLabel,
  createStyles,
  Theme,
  makeStyles
} from "@material-ui/core";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 15
    }
  })
);

const CheckboxButton: React.SFC<Props> = ({
  name,
  checked,
  value,
  label,
  disabled = false,
  onChange
}) => {
  const styles = useStyles({});
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          icon={<CheckBoxOutlineBlankIcon className={styles.icon} />}
          checkedIcon={<CheckBoxIcon className={styles.icon} />}
        />
      }
      label={
        <CheckboxRadioLabel
          checked={checked}
          disabled={disabled}
          label={label}
        />
      }
    />
  );
};

export default CheckboxButton;
