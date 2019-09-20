import * as React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Divider
} from "@material-ui/core";
import Radio from "../Radio";
import * as numeral from "numeral";

interface Props {
  name: string;
  items: number[];
  value: number;
  onChange: (e: any) => void;
}

const CurrencyRadioGroup: React.SFC<Props> = ({
  name,
  items,
  value,
  onChange
}) => {
  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup name={name} value={value || ""} onChange={onChange}>
        {items.map((item, key) => (
          <div key={key}>
            <FormControlLabel
              value={item}
              control={
                <Radio name={name} value={item} checked={value == item} />
              }
              label={numeral(item).format("$0,0") + "+"}
            />
            {key != items.length - 1 ? <Divider /> : ""}
          </div>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CurrencyRadioGroup;
