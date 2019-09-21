import * as React from "react";
import { FormControl, RadioGroup, Divider } from "@material-ui/core";
import * as numeral from "numeral";
import RadioButton from "../RadioButton";

interface Props {
  name: string;
  items: number[];
  value: number;
  disabled?: boolean;
  emptyLabel?: string;
  onChange: (e: any) => void;
}

const CurrencyRadioGroup: React.SFC<Props> = ({
  name,
  items,
  value,
  disabled = false,
  emptyLabel = "Any",
  onChange
}) => {
  return (
    <FormControl component="fieldset" fullWidth>
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
                label={numeral(item).format("$0,0") + "+"}
              />
              {key != items.length - 1 ? <Divider /> : ""}
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default CurrencyRadioGroup;
