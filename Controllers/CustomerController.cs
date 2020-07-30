using System.Collections.Generic;
using CodeTest.Models;
using CodeTest.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CodeTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet("customers")]
        public ActionResult<List<Customer>> GetCustomers()
        {
            var customers = _customerRepository.GetCustomers();

            return customers;
        }

        [HttpGet("customers-by-email/{emailAddress}")]
        public ActionResult<List<Customer>> GetCustomersByEmailAddress(string emailAddress)
        {
            var customers = _customerRepository.GetCustomersByEmailAddress(emailAddress);

            return customers;
        }
    }
}