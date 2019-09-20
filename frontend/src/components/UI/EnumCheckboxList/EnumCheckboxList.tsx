import * as React from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

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

  return (
    <FormControl component="fieldset">
      <FormGroup>
        {GetEnumList(enumType).map((item, key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={checkedItems.includes(item)}
                onChange={handleChange}
                value={item}
                name={name}
              />
            }
            label={EnumLabelDictionary.get(enumType, item)}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default EnumCheckboxList;
