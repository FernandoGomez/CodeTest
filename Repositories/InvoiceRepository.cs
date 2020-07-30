using System.Collections.Generic;
using System.Linq;
using CodeTest.Contexts;
using CodeTest.Models;

namespace CodeTest.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly AdventureWorksLTContext _context;

        public InvoiceRepository(AdventureWorksLTContext context)
        {
            _context = context;
        }

        public List<SalesOrderHeader> GetInvoices()
        {
            var invoices = _context.SalesOrderHeader.ToList();

            return invoices;
        }

        public List<SalesOrderHeader> GetInvoicesByCustomer(int customerId)
        {
            var invoices = _context.SalesOrderHeader.Where(x => x.CustomerId == customerId).ToList();

            return invoices;
        }

        public SalesOrderHeader GetInvoiceDetail(int salesOrderId)
        {
            var invoice = _context.SalesOrderHeader.FirstOrDefault(invoice => invoice.SalesOrderId == salesOrderId);
            var details = _context.SalesOrderDetail.Where(detail => detail.SalesOrderId == salesOrderId).ToHashSet();

            invoice.SalesOrderDetail = details;

            return invoice;
        }
    }
}