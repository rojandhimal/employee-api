const {Employee } = require("../../models");

exports.validateCreateEmployee = async (req, res, next) => {
        const {firstName,lastName,email} =req.body;
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(firstName.lenght && lastName.lenght && email.lenght){
            if(emailRegexp.test(email)){
                next();
            }else{
                res.status(400).json({status:"error",message:"Please Provide valid email"})
            }
        }else{
            res.status(400).json({status:"error",message:"Please Provide all required fields"})
        }
}

exports.checkEmployeeExist = async (req, res,next) => {
    const {id}= req.params;
    Employee.findOne({
        where: {
            id: id
        }
    }).then((employee)=>{
        if(employee){
            next();
        }else{
            res.status(500).json({
                status: "error",
                message: "employee not found"
            })
        }
    }).catch((error)=> {
        res.status(500).json({
            status: "error",
            message: error?.message
        })
    })
}
