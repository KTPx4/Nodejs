

module.exports.GetAll = async(req, res) =>{

}

module.exports.GetByID = async(req, res) =>{

}

module.exports.Create = async (req, res) =>{
    let {phone, fullName, Address, ListCart, MoneyGiven, MoneyExchange} = req.body 
    console.log(phone, fullName, Address, ListCart, MoneyGiven, MoneyExchange);
    res.json({
        code: 200,
        message: "ok"
    })
}