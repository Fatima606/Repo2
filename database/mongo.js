const mongoose=require("mongoose");
mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://fz4644444:IsXmjA8BvliWy0vV@db1.wxotpu4.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

var db=mongoose.connection;
db.on('error' ,()=>console.log('error'));
db.once('open',()=>console.log('Database Connected'));

module.exports={db};