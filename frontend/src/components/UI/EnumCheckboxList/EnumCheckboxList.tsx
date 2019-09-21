import * as React from "react";
import { FormControl, FormGroup, Divider } from "@material-ui/core";
import CheckboxButton from "../CheckboxButton";
import { GetEnumList, EnumLabelDictionary } from "../../../common/enums";

interface Props {
  enumType: any;
  name: string;
  checkedItems: number[];
  disabled?: boolean;
  onChange: (name: string, values: number[]) => void;
}

const EnumCheckboxList: React.SFC<Props> = ({
  enumType,
  name,
  checkedItems,
  disabled = false,
  onChange
}) => {
  const handleChange = (e: any) => {
    const { value, checked } = e.currentTarget;
    let values = [...checkedItems] || [];
    checked
      ? values.push(parseInt(value))
      : values.splice(values.indexOf(parseInt(value)), 1);

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
              <CheckboxButton
                name={name}
                value={item}
                checked={checked}
                label={EnumLabelDictionary.get(enumType, item)}
                disabled={disabled}
                onChange={handleChange}
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
