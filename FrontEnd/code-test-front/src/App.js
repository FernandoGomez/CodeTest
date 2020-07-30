import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import Customers from "./components/Customers/Customers";
import { searchForCustomerByEmail } from "./services/CustomerApiService";

function App() {
  const [customerEmailAddress, setCustomerEmailAddress] = useState();
  const [customers, setCustomers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedCustomerId, setSelectedCustomerId] = useState();

  const searchForCustomer = customerEmailAddress => {
    setIsLoading(true);
    searchForCustomerByEmail(customerEmailAddress)
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoading(false);
          setCustomers(response || []);
        },
        (error) => {
          //TODO: Log this error:  Jira/Story link here.
          setIsLoading(false);
          setCustomers([]);
        }
      );
  }

  return (
    <div className="App">
      <section>
        <p>Search for a customer:</p>
        <SearchBar
          searchFunction={searchForCustomer}
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="test"
          label="Customer E-mail Address"
          name="email"
          autoFocus={true}
        />
      </section>
      <section>
        <Customers isLoading={isLoading} data={customers} />
      </section>
      {/* {selectedCustomerId && (
        <InvoiceTable />
      )} */}
    </div>
  );
}

export default App;
