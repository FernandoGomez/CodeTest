import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Invoices</p>
      </header>
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

        {customers.map(x => (
          <span>{x.name}</span>
        ))}
      </section>
    </div>
  );
}

export default App;
