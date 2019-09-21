import * as React from "react";
import { SortColumn } from "../../../common/types";
import OrderBySortBy from "../../UI/OrderBySortBy";
import { OrderDirectionTypes } from "../../../common/enums";

interface Props {
  columnValue: string;
  orderDirectionValue: OrderDirectionTypes;
  columnFieldName: string;
  orderDirectionFieldName: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const sortColumns: SortColumn[] = [
  { label: "Job Title", value: "job_title" },
  { label: "Salary", value: "salary" },
  { label: "Published Date", value: "published_date" }
];

const JobsListOrderBySortBy: React.SFC<Props> = ({
  columnValue,
  orderDirectionValue,
  columnFieldName,
  orderDirectionFieldName,
  disabled = false,
  onChange
}) => (
  <OrderBySortBy
    sortColumns={sortColumns}
    columnValue={columnValue}
    orderDirectionValue={orderDirectionValue}
    columnFieldName={columnFieldName}
    orderDirectionFieldName={orderDirectionFieldName}
    disabled={disabled}
    onChange={onChange}
  />
);

export default JobsListOrderBySortBy;
