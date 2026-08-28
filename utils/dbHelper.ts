/**
 *Playwright does not have built-in database tools: Playwright is primarily a browser and API automation tool, so it doesn't include direct commands to talk to databases.

Use standard Node.js database drivers: Because Playwright runs on Node.js, you connect to databases by installing the official Node.js library for your specific database engine (e.g., pg for PostgreSQL, mysql2 for MySQL, or mssql for SQL Server).

Step 1: Install your database driver: Run the command matching your database type in your terminal:

For PostgreSQL: npm install pg --save-dev

For MySQL: npm install mysql2 --save-dev

Step 2: Create a reusable database utility file: Create a helper file (e.g., dbHelper.ts) to manage your connection string details and query execution logic cleanly:
 * 
 */


import { Client } from "pg"; // Example using PostgreSQL

export async function queryDatabase(queryString: string) 
{
  // 1. Configure connection settings using environment variables
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  // 2. Open the connection, run the query, and close it safely
  await client.connect()
  try {
    const result = await client.query(queryString)
    return result.rows // Returns the data rows matching your query
  } finally {
    await client.end()
  }
}