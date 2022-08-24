const {Employee, Sequelize } = require("../../models");

exports.apiCreateEmployee = async (req, res) => {
        Employee.create(req.body).then((data)=>{
            return res.json({
                status: "ok",
                data: data
            })
        }).catch((error)=> {
            res.status(400).json({
                status: "error",
                data: error?.message
            })
        })
}

exports.apiGetAllEmployees = async (req, res) => {
    Employee.findAll().then((employees)=>{
        return res.json({
            status: "ok",
            employees: employees
        })
    }).catch((error)=> {
        res.status(400).json({
            status: "error",
            data: error?.message
        })
    })
}

exports.apiGetEmployeeDetails = async (req, res) => {
    const {id}= req.params;
    Employee.findOne({
        where: {
            id: id
        }
    }).then((employee)=>{
        return res.json({
            status: "ok",
            employee: employee
        })
    }).catch((error)=> {
        res.status(500).json({
            status: "error",
            message: error?.message
        })
    })
}

exports.apiUpdateEmployeeDetails = async (req, res) => {
    const {id} = req.params;
    Employee.update(req.body, {
        where: {
            id: id
        }
    }).then((employee)=>{
        return res.json({
            status: "ok",
            message:"employ inforamtion updated"
        })
    }).catch((error)=> {
        res.status(500).json({
            status: "error",
            data: error?.message
        })
    })
}

exports.apiDeleteEmployee = async (req, res) => {
    const {id} =req.params;
    Employee.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        return res.json({
            status: "ok",
            message: "Employee deleted successfully"
        })
    }).catch((error)=> {
        res.status(400).json({
            status: "error",
            data: error?.message
        })
    })
}

