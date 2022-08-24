const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController")

 //user route
 router.get("/employee",employeeController.apiGetEmployee);
 
module.exports = router;
 