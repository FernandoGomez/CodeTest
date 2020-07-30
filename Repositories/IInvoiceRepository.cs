using System.Collections.Generic;
using CodeTest.Models;

namespace CodeTest.Repositories
{
    public interface IInvoiceRepository
    {
        List<SalesOrderHeader> GetInvoices();
        List<SalesOrderHeader> GetInvoicesByCustomer(int customerId);
        SalesOrderHeader GetInvoiceDetail(int salesOrderId);
    }
}