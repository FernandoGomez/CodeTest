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
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      background: "gainsboro",
      "border-top": "2px solid #858585",
      "border-bottom": "2px solid #858585",
    },
  },
});

const CustomerTable = ({ isLoading, data, handleRowClick }) => {
  const classes = useStyles();
  const isTouched = !isLoading && data;
  const hasResults = data && data.length > 0;
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
          <TableBody>
            <TableRow>
              <TableCell>Searching...</TableCell>
            </TableRow>
          </TableBody>
        ) : isTouched ? (
          hasResults ? (
            <TableBody>
              {data.map((row) => (
                <TableRow
                  className={classes.tableRow}
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
            <TableBody>
              <TableRow>
                <TableCell>No Results.</TableCell>
              </TableRow>
            </TableBody>
          )
        ) : (
          <TableBody>
            <TableRow></TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export const Component = CustomerTable;

export default CustomerTable;
