import * as React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Divider
} from "@material-ui/core";
import Radio from "../Radio";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";
import CheckboxRadioLabel from "../CheckboxRadioLabel";

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
  const items = GetEnumList(enumType);
  return (
    <FormControl fullWidth component="fieldset">
      <RadioGroup name={name} value={value || ""} onChange={onChange}>
        {items.map((item, key) => {
          const checked = value == item;
          return (
            <div key={key}>
              <FormControlLabel
                value={item}
                control={<Radio name={name} value={item} checked={checked} />}
                label={
                  <CheckboxRadioLabel
                    checked={checked}
                    label={EnumLabelDictionary.get(enumType, item)}
                  />
                }
              />
              {key != items.length - 1 ? <Divider light /> : ""}
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default EnumRadioGroup;
