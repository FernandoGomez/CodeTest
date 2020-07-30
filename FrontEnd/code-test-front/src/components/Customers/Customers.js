import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import CustomerTable from "../CustomerTable/CustomerTable";
import { searchForCustomerByEmail } from "../../services/CustomerApiService";

const Customers = ({isLoading, data, handleRowClick}) => {
  return (
      <CustomerTable
        isLoading={isLoading}
        data={data}
        handleRowClick={handleRowClick}
      />
  );
};

export const Component = Customers;

export default Customers;
