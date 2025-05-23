import express from "express";
const router = express.Router();
export default router;

import { createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } from "#db/queries/employees";
