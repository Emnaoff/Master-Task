const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
projectName:{type:String, required:true},
email:{type:String, required:true, unique: true},
password:{type:String, required:true},
createdAt:{type:Date, default:new Date()},
role:{type:String,default:'guest'}
    }

)


module.exports = mongoose.model('User',userSchema)