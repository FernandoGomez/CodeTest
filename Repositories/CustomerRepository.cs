using System.Collections.Generic;
using System.Linq;
using CodeTest.Contexts;
using CodeTest.Models;

namespace CodeTest.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly AdventureWorksLTContext _context;

        public CustomerRepository(AdventureWorksLTContext context)
        {
            _context = context;
        }

        public List<Customer> GetCustomers()
        {
            var customers = _context.Customer.ToList();

            return customers;
        }

        public List<Customer> GetCustomersByEmailAddress(string emailAddress)
        {
            var customer = _context.Customer.Where(customer => customer.EmailAddress == emailAddress).ToList();

            return customer;
        }
    }
}