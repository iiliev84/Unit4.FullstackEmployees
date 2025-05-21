import db from "#db/client.js";
import { createEmployee } from './queries/employees.js';

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  
  await db.connect();

  await createEmployee ("John Deer", "2000-10-01", 88000)
  await createEmployee ("Jenn Calia", "1985-09-03", 45000)
  await createEmployee ("Alex Damato", "1999-04-18", 77000)
  await createEmployee ("Shannon Sparks", "2001-06-24", 90000)
  await createEmployee ("Maria Lopez", "2000-02-17", 45000)
  await createEmployee ("Anna Smith", "1995-08-24", 50000)
  await createEmployee ("John Belmont", "1984-08-07", 65000)
  await createEmployee ("Bill Young", "2002-03-05", 55000)
  await createEmployee ("Paul Gold", "1990-11-21", 75000)
  await createEmployee ("Dan Jones", "2000-11-11", 80000)
  await createEmployee ("Sara Good", "2000-11-11", 60000)
  await createEmployee ("Chuck Calk", "2000-11-11", 60000)
 
  await db.end();
}

seedEmployees()
