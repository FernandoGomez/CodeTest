using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeTest.Contexts;
using CodeTest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodeTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly AdventureWorksLTContext _context;

        public CustomerController(AdventureWorksLTContext context)
        {
            _context = context;
        }

        [HttpGet("customers")]
        public ActionResult<List<Customer>> GetCustomers()
        {
            var customers = _context.Customer.ToList();

            return customers;
        }

        [HttpGet("customers-by-email/{emailAddress}")]
        public ActionResult<List<Customer>> GetCustomersByEmailAddress(string emailAddress)
        {
            var customer = _context.Customer.Where(customer => customer.EmailAddress == emailAddress).ToList();

            return customer;
        }
    }
}