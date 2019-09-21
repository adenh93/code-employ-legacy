import * as React from "react";
import { FormControl, RadioGroup, Divider } from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";
import RadioButton from "../RadioButton";

interface Props {
  name: string;
  enumType: any;
  value: number;
  disabled?: boolean;
  emptyLabel?: string;
  onChange: (e: any) => void;
}

const EnumRadioGroup: React.SFC<Props> = ({
  name,
  enumType,
  value,
  disabled = false,
  emptyLabel = "Any",
  onChange
}) => {
  const items = GetEnumList(enumType);
  return (
    <FormControl fullWidth component="fieldset">
      <RadioGroup name={name} value={value || ""} onChange={onChange}>
        <RadioButton
          disabled={disabled}
          value=""
          checked={!value}
          label={emptyLabel}
        />
        <Divider />
        {items.map((item, key) => {
          return (
            <div key={key}>
              <RadioButton
                disabled={disabled}
                value={item}
                checked={value == item}
                label={EnumLabelDictionary.get(enumType, item)}
              />
              {key != items.length - 1 ? <Divider /> : ""}
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default EnumRadioGroup;
