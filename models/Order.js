const  mongoose =require('mongoose')

let OrderSchema = new mongoose.Schema({
    StaffId: String,
    CustomerPhone: String,
    ToltalPayment: Number,    
    MoneyGiven: Number,
    MoneyExchange: Number,
    CreateAt:{
        type: Date,
        default: Date.now
   }
})

module.exports = mongoose.model('Order', OrderSchema)