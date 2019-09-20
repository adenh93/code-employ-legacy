import * as React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

interface Props {
  name: string;
  enumType: any;
  value: number;
  onChange: (e: any) => void;
}

const EnumRadioGroup: React.SFC<Props> = ({
  name,
  enumType,
  value,
  onChange
}) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup name={name} value={value || ""} onChange={onChange}>
        {GetEnumList(enumType).map((item, key) => (
          <FormControlLabel
            key={key}
            value={item}
            control={<Radio />}
            label={EnumLabelDictionary.get(enumType, item)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default EnumRadioGroup;
