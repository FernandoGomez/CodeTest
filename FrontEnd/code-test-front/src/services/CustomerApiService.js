export const searchForCustomerByEmail = (customerEmailAddress) =>
  fetch(
    `http://localhost:24811/api/customer/customers-by-email/${customerEmailAddress}`,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    }
  );
