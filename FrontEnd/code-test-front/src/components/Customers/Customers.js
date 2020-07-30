import React from "react";
import CustomerTable from "../CustomerTable/CustomerTable";

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
