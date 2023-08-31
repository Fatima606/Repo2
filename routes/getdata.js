const express=require("express");
const router=express.Router();
const {db}=require("../database/mongo");
const {Users,Reviews}=require("../Schema/Model");

router.get('/',(err,res)=>{
    Reviews.find({}).then((result)=>{
        if (result){
            res.send(result);
        }
        else{
            console.log("Data not found!");
        }
    })
})
module.exports=router;