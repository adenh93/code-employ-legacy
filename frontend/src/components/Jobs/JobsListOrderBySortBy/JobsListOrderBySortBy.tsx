import * as React from "react";
import { SortColumn } from "../../../common/types";
import OrderBySortBy from "../../UI/OrderBySortBy";
import { OrderDirectionTypes } from "../../../common/enums";

interface Props {
  columnValue: string;
  orderDirectionValue: OrderDirectionTypes;
  columnFieldName: string;
  orderDirectionFieldName: string;
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
  onChange
}) => (
  <OrderBySortBy
    sortColumns={sortColumns}
    columnValue={columnValue}
    orderDirectionValue={orderDirectionValue}
    columnFieldName={columnFieldName}
    orderDirectionFieldName={orderDirectionFieldName}
    onChange={onChange}
  />
);

export default JobsListOrderBySortBy;
