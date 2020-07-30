import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { searchForInvoicesByCustomerId } from "../../services/CustomerApiService";
import { formatCurrency } from "../../utils/currency";
import { formatDateTime } from "../../utils/dateTime";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
});

const InvoiceTable = ({ customerId }) => {
  const [invoices, setInvoices] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (customerId) {
      setIsLoading(true);
      searchForInvoicesByCustomerId(customerId)
        .then((res) => res.json())
        .then(
          (response) => {
            setIsLoading(false);
            setInvoices(response || []);
          },
          (error) => {
            console.error(error)
            //TODO: Log this error:  Jira/Story link here.
            setIsLoading(false);
            setInvoices([]);
          }
        );
    }
  }, [customerId]); // Only re-run the effect if count changes

  const classes = useStyles();
  const isTouched = !isLoading && invoices;
  const hasResults = invoices && invoices.length > 0;
  return (
    <>
      {isLoading ? (
        <div className={classes.center}>
          <CircularProgress />
        </div>
      ) : isTouched ? (
        <>
          <h3>Invoices</h3>
          <TableContainer component={Paper}>
            <Table aria-label="invoice table">
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
              {hasResults ? (
                <TableBody>
                {invoices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.salesOrderId}
                    </TableCell>
                    <TableCell align="right">{formatDateTime(row.orderDate)}</TableCell>
                    <TableCell align="right">{formatDateTime(row.dueDate)}</TableCell>
                    <TableCell align="right">{formatDateTime(row.shipDate)}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(row.totalDue)}
                    </TableCell>
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

export const Component = InvoiceTable;

export default InvoiceTable;
