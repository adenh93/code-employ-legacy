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
  onChangeOrderColumn: (e: any) => void;
  onChangeOrderDirection: (e: any) => void;
}

const ListOrderColumn: React.SFC<Props> = ({
  sortColumns,
  columnValue,
  orderDirectionValue,
  onChangeOrderColumn,
  onChangeOrderDirection
}) => (
  <Grid container spacing={3}>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <SortColumnSelect
          name="jobListingSortColumn"
          value={columnValue}
          sortColumns={sortColumns}
          onChange={onChangeOrderColumn}
        />
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <EnumSelect
          name="jobListingSortDirection"
          label="Order"
          enumType={OrderDirection}
          value={orderDirectionValue}
          onChange={onChangeOrderDirection}
        />
      </FormControl>
    </Grid>
  </Grid>
);

export default ListOrderColumn;
