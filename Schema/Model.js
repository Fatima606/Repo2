const mongoose=require("mongoose");

const Users=mongoose.model('users',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },

})
const Reviews=mongoose.model('reviews',{
    review:{
        type:String,
        required:false,
    }
})
module.exports={Users,Reviews};