import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import { searchForCustomerByEmail } from "./services/CustomerApiService";

function App() {
  const [customers, setCustomers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState();

  const hasSearched = !isLoading && customers;

  const searchForCustomer = (customerEmailAddress) => {
    setSelectedCustomerId();
    setCustomers();
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
  };

  return (
    <div className="App">
      <h1>Fernando's Code Test</h1>
      <section>
        <h2>Search for a customer:</h2>
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
      {hasSearched && (
        <section>
          <CustomerTable
            isLoading={isLoading}
            data={customers}
            handleRowClick={setSelectedCustomerId}
            selectedId={selectedCustomerId}
          />
        </section>
      )}
      {selectedCustomerId && (
        <section>
          <InvoiceTable customerId={selectedCustomerId} />
        </section>
      )}
    </div>
  );
}

export default App;
