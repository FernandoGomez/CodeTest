import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CustomerTable from "./components/CustomerTable/CustomerTable";

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState();

  const searchForCustomer = (searchTerm) => {
    console.log(`searching for ${searchTerm}`);
    setIsLoading(true);
    fetch(
      `http://localhost:24811/api/customer/customers-by-email/${searchTerm}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setCustomers(response);
          setIsLoading(false);
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        }
      );
  };
  const handleRowClick = customerId => {
    setSelectedCustomerId(customerId);
  };

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
        Customer results:
        <CustomerTable
          isLoading={isLoading}
          data={customers}
          handleRowClick={handleRowClick}
        />
      </section>
      {selectedCustomerId && (
        <span>You selected me:  {selectedCustomerId}</span>
      )}
    </div>
  );
}

export default App;
