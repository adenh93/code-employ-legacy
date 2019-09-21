import * as React from "react";
import { SortColumn } from "../../../common/types";
import SortColumnSelect from "../SortColumnSelect";
import EnumSelect from "../EnumSelect";
import { OrderDirection, OrderDirectionTypes } from "../../../common/enums";
import { Grid, FormControl } from "@material-ui/core";

interface Props {
  sortColumns: SortColumn[];
  columnValue: string;
  orderDirectionValue: OrderDirectionTypes;
  columnFieldName: string;
  orderDirectionFieldName: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const OrderBySortBy: React.SFC<Props> = ({
  sortColumns,
  columnValue,
  orderDirectionValue,
  columnFieldName,
  orderDirectionFieldName,
  disabled = false,
  onChange
}) => (
  <Grid container spacing={3}>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <SortColumnSelect
          name={columnFieldName}
          value={columnValue}
          sortColumns={sortColumns}
          disabled={disabled}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <EnumSelect
          label="Order"
          name={orderDirectionFieldName}
          enumType={OrderDirection}
          value={orderDirectionValue}
          disabled={disabled}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  </Grid>
);

export default OrderBySortBy;
