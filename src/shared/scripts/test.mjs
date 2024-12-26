import { PGlite } from "@electric-sql/pglite";

const client = new PGlite("./pgdata");

export async function fetchRevenue() {
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      // console.log('Fetching revenue data...');
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await client.sql`SELECT * FROM revenue`;
  
      console.log('Data fetch completed after 3 seconds.', data.rows);
  
      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch revenue data.");
    }
  }

  fetchRevenue();