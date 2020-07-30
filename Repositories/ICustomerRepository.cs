using System.Collections.Generic;
using CodeTest.Models;

namespace CodeTest.Repositories
{
    public interface ICustomerRepository
    {
        List<Customer> GetCustomers();
        List<Customer> GetCustomersByEmailAddress(string emailAddress);
    }
}