import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

interface Props {
  name: string;
  value: any;
  type?: string;
  label?: string;
  placeholder?: string;
  adornment?: any;
  py?: number;
  px?: number;
  onChange?: (e: any) => void;
}

const TextInput: React.SFC<Props> = ({
  name,
  type,
  label,
  value,
  placeholder,
  adornment,
  onChange
}) => (
  <TextField
    name={name}
    type={type}
    label={label}
    value={value || ""}
    placeholder={placeholder}
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
