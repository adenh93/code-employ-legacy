import * as React from "react";
import { TablePagination, Typography } from "@material-ui/core";
import * as styles from "./styles.module.scss";

interface Props {
  page: number;
  rowsPerPage: number;
  count: number;
  labelRowsPerPage?: string;
  rowsPerPageOptions?: number[];
  onChangeRowsPerPage: (e: object) => void;
  onChangePage: (e: object, page: number) => void;
}

const fontSize = "1rem";

const Paginator: React.SFC<Props> = ({
  page,
  rowsPerPage,
  count,
  labelRowsPerPage = "Rows per page",
  rowsPerPageOptions = [5, 10, 15, 20],
  onChangeRowsPerPage,
  onChangePage
}) => (
  <TablePagination
    component="nav"
    page={page}
    rowsPerPage={rowsPerPage}
    style={{ fontSize: fontSize }}
    count={count}
    labelRowsPerPage={
      <div style={{ fontSize: fontSize }}>{`${labelRowsPerPage}:`}</div>
    }
    labelDisplayedRows={({ from, to, count }) => (
      <div style={{ fontSize: fontSize }}>{`${from} to ${to} of ${count}`}</div>
    )}
    rowsPerPageOptions={rowsPerPageOptions}
    onChangeRowsPerPage={onChangeRowsPerPage}
    onChangePage={onChangePage}
  />
);

export default Paginator;
