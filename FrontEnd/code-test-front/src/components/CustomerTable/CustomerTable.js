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

const CustomerTable = ({ isLoading, data, handleRowClick }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CustomerID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">E-mail Address</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <span>loading...</span>
        ) : data.length > 0 ? (
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                onClick={() => handleRowClick(row.customerId)}
              >
                <TableCell component="th" scope="row">
                  {row.customerId}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.emailAddress}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
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

export const Component = CustomerTable;

export default CustomerTable;
