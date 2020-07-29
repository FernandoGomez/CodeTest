using System.Collections.Generic;
using System.Linq;
using CodeTest.Contexts;
using CodeTest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodeTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        private readonly AdventureWorksLTContext _context;

        public InvoiceController(AdventureWorksLTContext context)
        {
            _context = context;
        }

        [HttpGet("invoices")]
        public ActionResult<List<SalesOrderHeader>> GetInvoices()
        {
            var invoices = _context.SalesOrderHeader.ToList();

            return invoices;
        }

        [HttpGet("invoices-by-customer/{customerId}")]
        public ActionResult<List<SalesOrderHeader>> GetInvoicesByCustomer(int customerId)
        {
            var invoices = _context.SalesOrderHeader.Where(x => x.CustomerId == customerId).ToList();

            return invoices;
        }

        [HttpGet("invoice-detail/{salesOrderId}")]
        public ActionResult<SalesOrderHeader> GetInvoiceDetail(int salesOrderId)
        {
            var invoice = _context.SalesOrderHeader.FirstOrDefault(invoice => invoice.SalesOrderId == salesOrderId);
            var details = _context.SalesOrderDetail.Where(detail => detail.SalesOrderId == salesOrderId).ToHashSet();
            
            invoice.SalesOrderDetail = details;
            
            return invoice;
        }
    }
}
