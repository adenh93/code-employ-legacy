import * as React from "react";
import {
  FormControl,
  FormGroup,
  Divider,
  FormControlLabel
} from "@material-ui/core";
import Checkbox from "../Checkbox";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";
import CheckboxRadioLabel from "../CheckboxRadioLabel";

interface Props {
  enumType: any;
  name: string;
  checkedItems: number[];
  onChange: (name: string, values: number[]) => void;
}

const EnumCheckboxList: React.SFC<Props> = ({
  enumType,
  name,
  checkedItems,
  onChange
}) => {
  const handleChange = (e: any) => {
    const target = e.currentTarget;
    let values = [...checkedItems] || [];

    target.checked
      ? values.push(parseInt(target.value))
      : values.splice(values.indexOf(target.value), 1);

    onChange(name, values);
  };

  const items = GetEnumList(enumType);

  return (
    <FormControl fullWidth component="fieldset">
      <FormGroup>
        {items.map((item, key) => {
          const checked = checkedItems.includes(item);
          return (
            <div key={key}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.includes(item)}
                    onChange={handleChange}
                    value={item}
                    name={name}
                  />
                }
                label={
                  <CheckboxRadioLabel
                    checked={checked}
                    label={EnumLabelDictionary.get(enumType, item)}
                  />
                }
              />
              {key != items.length - 1 ? <Divider /> : ""}
            </div>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default EnumCheckboxList;
