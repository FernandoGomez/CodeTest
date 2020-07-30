export async const searchForCustomerByEmail = customerEmailAddress => {
    await fetch(
      `http://localhost:24811/api/customer/customers-by-email/${customerEmailAddress}`,
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
          return response;
        },
        (error) => {
          //TODO: Log this error:  Jira/Story link here.
          return [];
        }
      );
  };