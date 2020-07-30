export const searchForCustomerByEmail = (customerEmailAddress) =>
  fetch(
    `/api/customer/customers-by-email/${customerEmailAddress}`,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    }
  );

export const searchForInvoicesByCustomerId = (customerId) =>
  fetch(
    `/api/invoice/invoices-by-customer/${customerId}`,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    }
  );
