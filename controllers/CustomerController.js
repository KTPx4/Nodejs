const CustomerController = require('../models/Customer')

module.exports.GetAll = async(req, res) =>{
    let cust = await CustomerController.find()
    return res.json({
        code: 200,
        message: "Lấy danh sách khách hàng thành công",
        data:{
            customers: cust
        }
    })
}

module.exports.GetByID = async(req, res) =>{

}

module.exports.Create = async(req, res) =>{

}