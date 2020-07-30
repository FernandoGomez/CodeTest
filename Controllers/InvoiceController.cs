using System.Collections.Generic;
using CodeTest.Contexts;
using CodeTest.Models;
using CodeTest.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CodeTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        private readonly AdventureWorksLTContext _context;
        private readonly IInvoiceRepository _invoiceRepository;

        public InvoiceController(IInvoiceRepository invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }

        [HttpGet("invoices")]
        public ActionResult<List<SalesOrderHeader>> GetInvoices()
        {
            var invoices = _invoiceRepository.GetInvoices();

            return invoices;
        }

        [HttpGet("invoices-by-customer/{customerId}")]
        public ActionResult<List<SalesOrderHeader>> GetInvoicesByCustomer(int customerId)
        {
            var invoices = _invoiceRepository.GetInvoicesByCustomer(customerId);

            return invoices;
        }

        [HttpGet("invoice-detail/{salesOrderId}")]
        public ActionResult<SalesOrderHeader> GetInvoiceDetail(int salesOrderId)
        {
            var invoice = _invoiceRepository.GetInvoiceDetail(salesOrderId);
            
            return invoice;
        }
    }
}
