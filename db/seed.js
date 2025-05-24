import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

  await createEmployee ({name:"John Deer", birthday: "2000-10-01", salary:88000})
  await createEmployee ({name:"Jenn Calia", birthday:"1985-09-03", salary:45000})
  await createEmployee ({name:"Alex Damato", birthday:"1999-04-18", salary:77000})
  await createEmployee ({name:"Shannon Sparks", birthday:"2001-06-24", salary:90000})
  await createEmployee ({name:"Maria Lopez", birthday:"2000-02-17", salary:45000})
  await createEmployee ({name:"Anna Smith", birthday:"1995-08-24", salary:50000})
  await createEmployee ({name:"John Belmont", birthday:"1984-08-07", salary:65000})
  await createEmployee ({name:"Bill Young", birthday:"2002-03-05", salary:55000})
  await createEmployee ({name:"Paul Gold", birthday:"1990-11-21", salary:75000})
  await createEmployee ({name:"Dan Jones", birthday:"2000-11-11", salary:80000})
  await createEmployee ({name:"Sara Good", birthday:"2000-11-11", salary:60000})
  await createEmployee ({name:"Chuck Calk", birthday:"2000-11-11", salary:60000})
 
}
