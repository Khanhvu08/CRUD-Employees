const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true,
    }
})
const employeeModel= mongoose.model('employee', employeeSchema)
module.exports = employeeModel