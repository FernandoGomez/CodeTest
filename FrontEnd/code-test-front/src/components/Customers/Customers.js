import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { searchForCustomerByEmail } from "../../services/CustomerApiService";

const Customers = ({ customerEmailAddress }) => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleRowClick = customerId => {
    // setSelectedCustomerId(customerId);
    console.log('selecting customer')
  };

  searchForCustomerByEmail(customerEmailAddress).then((customerData) => {
    setIsLoading(false);
    setCustomers(customerData);
  });

  return (
    <CustomerTable
      isLoading={isLoading}
      data={customers}
      handleRowClick={handleRowClick}
    />
  );
};

export const Component = Customers;

export default Customers;
