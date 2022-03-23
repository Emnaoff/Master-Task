const mongoose = require ('mongoose');

const MemberSchema = new mongoose.Schema(
    {
        fullName : {type : String, required : true},
        email : {type : String, required : true, unique : true},
        position : {type : String, required : true},
        picture : {type : String, required : true}
    }
)

module.exports = mongoose.model('member',MemberSchema)