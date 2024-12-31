import { client } from "@/shared/lib/data";
import { CustomerField } from "@/shared/lib/definitions";

export async function fetchCustomers() {
  try {
    const data = await client.sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}