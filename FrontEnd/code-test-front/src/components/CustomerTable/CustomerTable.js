import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      background: "gainsboro",
      "border-top": "2px solid #858585",
      "border-bottom": "2px solid #858585",
    },
  },
  selectedTableRow: {
    cursor: "select",
    background: "gainsboro",
    "border-top": "2px solid #858585",
    "border-bottom": "2px solid #858585",
  },
});

const CustomerTable = ({ isLoading, data, handleRowClick, selectedId }) => {
  const classes = useStyles();
  const isTouched = !isLoading && data;
  const hasResults = data && data.length > 0;
  return (
    <>
      {isLoading ? (
        <div className={classes.center}>
          <CircularProgress />
        </div>
      ) : isTouched ? (
        <>
          <h3>Customers</h3>
          <TableContainer component={Paper}>
            <Table aria-label="customer table">
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
              {hasResults ? (
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      className={
                        selectedId === row.customerId
                          ? classes.selectedTableRow
                          : classes.tableRow
                      }
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
              )}
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export const Component = CustomerTable;

export default CustomerTable;
