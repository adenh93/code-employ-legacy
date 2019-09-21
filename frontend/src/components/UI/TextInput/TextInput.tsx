import * as React from "react";
import { TextField, InputAdornment, FormControl } from "@material-ui/core";

interface Props {
  name: string;
  value: any;
  fullWidth?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  adornment?: any;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const TextInput: React.SFC<Props> = ({
  name,
  type,
  label,
  value,
  fullWidth = true,
  placeholder,
  adornment,
  disabled,
  onChange
}) => (
  <FormControl fullWidth={fullWidth}>
    <TextField
      name={name}
      type={type}
      label={label}
      value={value || ""}
      placeholder={placeholder}
      disabled={disabled}
      InputLabelProps={{
        shrink: true
      }}
      InputProps={
        adornment
          ? {
              startAdornment: (
                <InputAdornment position="start">{adornment}</InputAdornment>
              )
            }
          : undefined
      }
      onChange={onChange}
    />
  </FormControl>
);

export default TextInput;
