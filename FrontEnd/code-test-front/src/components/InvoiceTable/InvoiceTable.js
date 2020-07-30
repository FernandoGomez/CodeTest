import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const InvoiceTable = ({ isLoading, data, handleRowClick }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Ship Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Total Due</TableCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <span>loading...</span>
        ) : data.length > 0 ? (
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                onClick={() => handleRowClick(row.salesOrderId)}
              >
                <TableCell component="th" scope="row">
                  {row.salesOrderId}
                </TableCell>
                <TableCell align="right">{row.orderDate}</TableCell>
                <TableCell align="right">{row.dueDate}</TableCell>
                <TableCell align="right">{row.shipDate}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.totalDue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <span>no results</span>
        )}
      </Table>
    </TableContainer>
  );
};

export const Component = InvoiceTable;

export default InvoiceTable;