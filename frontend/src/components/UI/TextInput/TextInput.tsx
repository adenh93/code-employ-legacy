import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

interface Props {
  name: string;
  value: any;
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
  placeholder,
  adornment,
  disabled,
  onChange
}) => (
  <TextField
    name={name}
    type={type}
    label={label}
    value={value || ""}
    placeholder={placeholder}
    disabled={disabled}
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
);

export default TextInput;
