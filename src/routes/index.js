const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const employeeMiddleware = require("../middlewares/employee");

 //user route

 /** 
  * Employee api starts from here
  */

 //get all employees
 router.get("/employees",employeeController.apiGetAllEmployees);

 //create employee
 router.post("/employee",
    employeeMiddleware.validateCreateEmployee,       //checks if all data are valid
    employeeController.apiCreateEmployee);

 //get employee details
 router.get("/employee/:id",
    employeeMiddleware.checkEmployeeExist,          // check if employee exist
    employeeController.apiGetEmployeeDetails);
 
 //update employee
 router.patch("/employee/:id",
    employeeMiddleware.checkEmployeeExist,          // check if employee exist
    employeeController.apiUpdateEmployeeDetails);

 //delete employee 
 router.delete("/employee/:id",
    employeeMiddleware.checkEmployeeExist,           // check if employee exist
    employeeController.apiDeleteEmployee);
 
 /** 
  * Employee api ends from here
  */
module.exports = router;
 