using System.Collections.Generic;
using System.Linq;
using CodeTest.Contexts;
using CodeTest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class InvoiceController : ControllerBase
{
    private readonly AdventureWorksLTContext _context;

    public InvoiceController(AdventureWorksLTContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Customer>> GetCustomers()
    {
        var customers = _context.Customer.ToList();

        return customers;
    }
}