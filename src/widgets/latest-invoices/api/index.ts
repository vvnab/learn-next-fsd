import { LatestInvoiceRaw } from "@/shared/lib/definitions";
import { client } from "@/shared/lib/data";
import { formatCurrency } from "@/shared/lib/utils";

export async function fetchLatestInvoices() {
  try {
    const data = await client.sql<LatestInvoiceRaw>`
        SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  } 
}
